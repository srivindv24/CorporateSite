import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema, blogPostSchema, careerSchema, testimonialSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const submission = contactSchema.parse(req.body);
      const result = await storage.createContactSubmission(submission);
      res.json(result);
    } catch (err) {
      if (err instanceof ZodError) {
        res.status(400).json({ message: "Invalid submission data", errors: err.errors });
      } else {
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  // Blog posts
  app.get("/api/blog", async (_req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:id", async (req, res) => {
    try {
      const post = await storage.getBlogPost(Number(req.params.id));
      if (!post) {
        res.status(404).json({ message: "Blog post not found" });
        return;
      }
      res.json(post);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch blog post" });
    }
  });

  // Careers
  app.get("/api/careers", async (_req, res) => {
    try {
      const careers = await storage.getCareers();
      res.json(careers);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch careers" });
    }
  });

  app.get("/api/careers/:id", async (req, res) => {
    try {
      const career = await storage.getCareer(Number(req.params.id));
      if (!career) {
        res.status(404).json({ message: "Career not found" });
        return;
      }
      res.json(career);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch career" });
    }
  });

  // Testimonials
  app.get("/api/testimonials", async (_req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
