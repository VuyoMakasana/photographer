import "dotenv/config";

const config = {
  port: process.env.PORT || 4000,
  clientOrigin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
  nodeEnv: process.env.NODE_ENV || "development",
  // Placeholders for a future database / image storage integration.
  // Leave unset for the current local-data version of the site.
  databaseUrl: process.env.DATABASE_URL || null,
  cloudinaryUrl: process.env.CLOUDINARY_URL || null,
};

export default config;
