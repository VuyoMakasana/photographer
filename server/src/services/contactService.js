/**
 * In production, wire this up to an email provider (e.g. Postmark, SES)
 * or a CRM. For now it just validates and logs the enquiry so the rest
 * of the stack (frontend form, rate limiting, validation) is fully wired.
 */
export async function submitContactEnquiry(payload) {
  const enquiry = {
    ...payload,
    receivedAt: new Date().toISOString(),
  };

  // eslint-disable-next-line no-console
  console.log("[contact] new enquiry:", enquiry);

  return { id: `enq_${Date.now()}`, ...enquiry };
}
