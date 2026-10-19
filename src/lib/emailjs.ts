// EmailJS settings for the "Send us a Message" form.
// Copy these three values from your EmailJS dashboard (emailjs.com):
//   Service ID  -> Email Services
//   Template ID -> Email Templates (its "To Email" is set to info@blancosy.co.ke)
//   Public Key  -> Account > General
// They are designed to be public, so they can live in the site code.
export const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
export const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
export const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

export type ContactMessage = {
  name: string;
  email: string;
  organization: string;
  message: string;
};

export const isEmailjsConfigured = () =>
  ![EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY].some((value) =>
    value.startsWith("YOUR_")
  );

// Sends one contact message. Use these variables in the EmailJS template:
// {{from_name}}, {{from_email}}, {{organization}}, {{message}} and {{reply_to}}.
export async function sendContactMessage(data: ContactMessage) {
  if (!isEmailjsConfigured()) {
    throw new Error(
      "EmailJS is not configured: add your Service ID, Template ID and Public Key in src/lib/emailjs.ts"
    );
  }

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        organization: data.organization || "-",
        message: data.message,
        reply_to: data.email
      }
    })
  });

  if (!response.ok) {
    throw new Error(`EmailJS error ${response.status}: ${await response.text()}`);
  }
}
