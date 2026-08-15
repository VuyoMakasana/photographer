import services from "../data/services.js";

export function listServices(req, res) {
  res.json({ data: services });
}
