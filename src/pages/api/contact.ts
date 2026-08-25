import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const resendApiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.error('RESEND_API_KEY não foi encontrada nas variáveis de ambiente.');
      return new Response(
        JSON.stringify({ error: 'Configuração de servidor ausente (RESEND_API_KEY).' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(resendApiKey);

    let name = '';
    let email = '';
    let phone = '';
    let company = '';
    let message = '';

    const contentType = request.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      const body = await request.json();
      name = body.name || '';
      email = body.email || '';
      phone = body.phone || '';
      company = body.company || '';
      message = body.message || '';
    } else {
      const formData = await request.formData();
      name = formData.get('name')?.toString() || '';
      email = formData.get('email')?.toString() || '';
      phone = formData.get('phone')?.toString() || '';
      company = formData.get('company')?.toString() || '';
      message = formData.get('message')?.toString() || '';
    }

    // Validação básica dos campos obrigatórios
    if (!name.trim() || !email.trim() || !message.trim()) {
      return new Response(
        JSON.stringify({ error: 'Por favor, preencha todos os campos obrigatórios.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const recipients = ['admin@transforma.tech'];

    // Envio via Resend
    // Remetente de testes onboarding@resend.dev (alterar quando o domínio próprio estiver verificado no Resend)
    const { data, error } = await resend.emails.send({
      from: 'Transforma Tech Leads <onboarding@resend.dev>',
      to: recipients,
      subject: `Novo Lead do Site: ${name} (${company || 'Sem empresa'})`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
          <h2 style="color: #0066FF; margin-top: 0;">🚀 Novo Lead Recebido via Popup</h2>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          
          <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <p><strong>Telefone / WhatsApp:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Empresa:</strong> ${escapeHtml(company)}</p>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #0066FF; border-radius: 4px;">
            <p style="margin: 0; font-weight: bold; color: #334155;">Mensagem:</p>
            <p style="margin: 8px 0 0 0; color: #475569; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">Mensagem enviada automaticamente pelo site Transforma Tech.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Erro ao enviar e-mail via Resend:', error);
      return new Response(
        JSON.stringify({ error: error.message || 'Falha ao enviar e-mail via Resend.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, id: data?.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (err: any) {
    console.error('Exceção na API de contato:', err);
    return new Response(
      JSON.stringify({ error: err?.message || 'Erro interno no servidor.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
