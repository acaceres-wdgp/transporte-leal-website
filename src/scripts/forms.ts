import { submitForm, type FormKind } from '../lib/submitForm';

/** Teléfono dominicano: 10 dígitos con código 809/829/849, opcionalmente con +1 / 1 delante. */
function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  const local = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  return /^8[024]9\d{7}$/.test(local);
}

function errorFor(field: HTMLInputElement | HTMLSelectElement): string {
  const value = field.value.trim();
  if (field.required && !value) return 'Este campo es obligatorio.';
  if (field.hasAttribute('data-phone') && value && !isValidPhone(value))
    return 'Teléfono no válido. Ej.: (809) 555-1234.';
  return '';
}

function setError(field: HTMLInputElement | HTMLSelectElement, message: string) {
  const id = `${field.id}-error`;
  let el = document.getElementById(id);
  if (message) {
    if (!el) {
      el = document.createElement('p');
      el.id = id;
      el.className = 'field-error';
      field.insertAdjacentElement('afterend', el);
    }
    el.textContent = message;
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', id);
  } else {
    el?.remove();
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  }
}

function fieldsOf(form: HTMLFormElement) {
  return Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input, select'));
}

function initForm(form: HTMLFormElement) {
  const kind = form.dataset.form as FormKind;
  const success = form.querySelector<HTMLElement>('[data-form-success]');
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');

  for (const field of fieldsOf(form)) {
    // Revalida en vivo solo los campos que ya mostraron un error.
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') setError(field, errorFor(field));
    });
    field.addEventListener('blur', () => {
      if (field.value.trim()) setError(field, errorFor(field));
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (success) success.classList.add('hidden');

    let firstInvalid: HTMLInputElement | HTMLSelectElement | null = null;
    for (const field of fieldsOf(form)) {
      const msg = errorFor(field);
      setError(field, msg);
      if (msg && !firstInvalid) firstInvalid = field;
    }
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    const data = Object.fromEntries(
      Array.from(new FormData(form).entries()).map(([k, v]) => [k, String(v).trim()]),
    );

    if (button) button.disabled = true;
    try {
      const result = await submitForm(kind, data);
      if (result.ok) {
        form.reset();
        if (success) {
          success.textContent = form.dataset.success ?? '';
          success.classList.remove('hidden');
        }
      } else if (success) {
        success.textContent = result.message ?? 'No pudimos enviar. Intente de nuevo o llámenos.';
        success.classList.remove('hidden');
      }
    } finally {
      if (button) button.disabled = false;
    }
  });
}

/** Barra de cotización rápida del hero: lleva sus valores al formulario de cotización. */
function initQuickQuote() {
  const quick = document.querySelector<HTMLFormElement>('[data-quick-quote]');
  const quote = document.querySelector<HTMLFormElement>('form[data-form="cotizacion"]');
  if (!quick || !quote) return;

  quick.addEventListener('submit', (e) => {
    e.preventDefault();
    const src = new FormData(quick);
    for (const name of ['origen', 'destino', 'carga']) {
      const target = quote.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null;
      const value = String(src.get(name) ?? '').trim();
      if (target && value) {
        target.value = value;
        setError(target, '');
      }
    }
    quote.querySelector('[data-form-success]')?.classList.add('hidden');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    quote.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
    history.replaceState(null, '', '#cotizar');

    const firstEmpty = fieldsOf(quote).find((f) => f.required && !f.value.trim());
    (firstEmpty ?? fieldsOf(quote)[0])?.focus({ preventScroll: true });
  });
}

document.querySelectorAll<HTMLFormElement>('form[data-form]').forEach(initForm);
initQuickQuote();
