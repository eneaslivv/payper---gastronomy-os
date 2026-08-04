import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const NOTIFICATION_EMAILS = ['eneasaldabe@gmail.com', 'aldabeciro@gmail.com'];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const resend = new Resend(apiKey);

  try {
    const { name, email, business, phone } = req.body || {};

    if (!name || !email || !business) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const timestamp = new Date().toLocaleString('es-AR', {
      timeZone: 'America/Argentina/Buenos_Aires',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const html = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
      <div style="background:#1a2e1a;color:#fff;padding:24px 30px;">
        <h1 style="margin:0;font-size:20px;">🍽️ Nuevo Lead — Gastronomy OS</h1>
        <p style="margin:6px 0 0;opacity:0.8;font-size:14px;">${timestamp}</p>
      </div>

      <div style="padding:24px 30px;">
        <h2 style="font-size:16px;color:#1a2e1a;border-bottom:2px solid #d1fae5;padding-bottom:8px;">📋 Datos de Contacto</h2>
        <table style="width:100%;font-size:14px;margin-bottom:20px;">
          <tr><td style="padding:4px 0;color:#6b7280;width:140px;">Nombre</td><td style="padding:4px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:4px 0;color:#6b7280;">Email</td><td style="padding:4px 0;font-weight:600;">${email}</td></tr>
          <tr><td style="padding:4px 0;color:#6b7280;">Local</td><td style="padding:4px 0;font-weight:600;">${business}</td></tr>
          <tr><td style="padding:4px 0;color:#6b7280;">Teléfono</td><td style="padding:4px 0;font-weight:600;">${phone || 'No proporcionado'}</td></tr>
        </table>
      </div>

      <div style="background:#f3f4f6;padding:16px 30px;text-align:center;font-size:12px;color:#9ca3af;">
        Payper Gastronomy OS — Lead automático desde la landing
      </div>
    </div>`;

    const { error } = await resend.emails.send({
      from: 'Payper Leads <onboarding@resend.dev>',
      to: NOTIFICATION_EMAILS,
      subject: `🍽️ Nuevo lead Gastronomy: ${name} — ${business}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('send-gastro-lead error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
