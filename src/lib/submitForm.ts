export type FormKind = 'cotizacion' | 'empleo';

export interface SubmitResult {
  ok: boolean;
  message?: string;
}

/**
 * Punto único de envío para todos los formularios del sitio.
 *
 * Modo demo: no envía nada a ningún lado, solo resuelve con éxito.
 */
export async function submitForm(kind: FormKind, data: Record<string, string>): Promise<SubmitResult> {
  // TODO: conectar envío real (correo, WhatsApp, CRM o endpoint) cuando se defina el destino.
  void kind;
  void data;
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { ok: true };
}
