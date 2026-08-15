import { getAllProjects, getProjectBySlug } from "../services/projectsService.js";

export function listProjects(req, res) {
  res.json({ data: getAllProjects() });
}

export function getProject(req, res) {
  const project = getProjectBySlug(req.params.slug);
  if (!project) {
    return res.status(404).json({ error: "Project not found" });
  }
  return res.json({ data: project });
}
