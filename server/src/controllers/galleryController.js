import gallery from "../data/gallery.js";

export function listGallery(req, res) {
  res.json({ data: gallery });
}
