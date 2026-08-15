import journal from "../data/journal.js";

export function listJournal(req, res) {
  res.json({ data: journal });
}
