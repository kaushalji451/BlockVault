import express from "express";
import cors from "cors";
import helmet from "helmet";
import pinoHttp from "pino-http";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { notFoundMiddleware } from "./middleware/not-found.middleware.js";
import router from "./routes/index.js";
import AuthRoute from "./modules/auth/auth.route.js";
const app = express();

// Middleware
app.use(helmet());

// CORS configuration
app.use(
    cors({
        origin: process.env.FRONTEND_URL || "http://localhost:5173",
    })
);

// Parse incoming JSON requests
app.use(express.json());
// Parse incoming URL-encoded requests
app.use(express.urlencoded({ extended: true }));
// Logging middleware
app.use(pinoHttp.default({ level: process.env.LOG_LEVEL || "info" }));

// Health check endpoint
app.use("/api/v1", router);

// Authentication routes
app.use("/api/v1/auth", AuthRoute);


// 404 not found middleware
app.use(notFoundMiddleware);

// error handling middleware
app.use(errorMiddleware);

export default app;
