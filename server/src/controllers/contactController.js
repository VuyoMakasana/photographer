import { validationResult } from "express-validator";
import { submitContactEnquiry } from "../services/contactService.js";

export async function postContact(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: "Validation failed", details: errors.array() });
  }

  try {
    const result = await submitContactEnquiry(req.body);
    return res.status(201).json({ data: result });
  } catch (err) {
    return res.status(500).json({ error: "Could not send enquiry, please try again." });
  }
}

// Booking uses the same underlying handler for this initial version —
// split into its own service once booking has distinct requirements
// (e.g. calendar availability, deposits).
export const postBooking = postContact;
