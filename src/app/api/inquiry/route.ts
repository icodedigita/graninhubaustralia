import { adminEmail, sendMail } from "@/lib/mailer";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-dynamic";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const company = String(body.company ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const product = String(body.product ?? "").trim();

  if (!name || !email || !message) {
    return Response.json(
      { ok: false, error: "Name, email and message are required" },
      { status: 400 }
    );
  }

  const fields: [string, string][] = [
    ["Name", name],
    ["Company", company || "—"],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Product", product || "—"],
  ];

  const text = [
    `New inquiry from ${siteConfig.name}`,
    "",
    ...fields.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New inquiry from ${escapeHtml(siteConfig.name)}</h2>
    <table cellpadding="4" cellspacing="0">
      ${fields
        .map(
          ([label, value]) =>
            `<tr><td><strong>${escapeHtml(label)}</strong></td><td>${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
  `;

  const recipients = Array.from(new Set([siteConfig.contact.email, adminEmail()]));

  try {
    await sendMail({
      to: recipients,
      replyTo: email,
      subject: `New inquiry from ${name}${product ? ` — ${product}` : ""}`,
      text,
      html,
    });
  } catch (error) {
    console.error("Failed to send inquiry email", error);
    return Response.json(
      { ok: false, error: "Failed to send email" },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}
