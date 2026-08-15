import { Router } from "express";
import { listProjects, getProject } from "../controllers/projectsController.js";
import { listGallery } from "../controllers/galleryController.js";
import { listServices } from "../controllers/servicesController.js";
import { listJournal } from "../controllers/journalController.js";
import { postContact, postBooking } from "../controllers/contactController.js";
import { contactValidationRules } from "../middleware/validators.js";
import { contactRateLimiter } from "../middleware/rateLimiter.js";

const router = Router();

router.get("/projects", listProjects);
router.get("/projects/:slug", getProject);

router.get("/gallery", listGallery);
router.get("/services", listServices);
router.get("/journal", listJournal);

router.post("/contact", contactRateLimiter, contactValidationRules, postContact);
router.post("/booking", contactRateLimiter, contactValidationRules, postBooking);

export default router;
