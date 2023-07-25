import express from "express";
import cors from "cors";
import dalleRoutes from "../routes/dalle.routes.js";

export const handler = async (event, context) => {
  // Create an Express app instance
  const app = express();
  app.use(cors());
  app.use(express.json({ limit: "50mb" }));

  // Register your routes
  app.use("/api/v1/dalle", dalleRoutes);

  // Create a request object from the event
  const req = {
    method: event.httpMethod,
    url: event.path,
    headers: event.headers,
    body: event.body,
  };

  // Create a response object
  let res = {
    statusCode: 200,
    headers: {},
    body: "",
  };

  // Use the Express app to handle the request
  app(req, res, () => {
    // Return the response
    return {
      statusCode: res.statusCode,
      headers: res.headers,
      body: res.body,
    };
  });
};
