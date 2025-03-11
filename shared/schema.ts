import { pgTable, text, serial, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  author: text("author").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const careers = pgTable("careers", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  department: text("department").notNull(),
  location: text("location").notNull(),
  description: text("description").notNull(),
  requirements: text("requirements").notNull(),
  isActive: boolean("is_active").default(true).notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  content: text("content").notNull(),
  role: text("role").notNull(),
});

export const contactSchema = createInsertSchema(contactSubmissions).omit({ 
  id: true,
  createdAt: true 
});

export const blogPostSchema = createInsertSchema(blogPosts).omit({ 
  id: true,
  createdAt: true 
});

export const careerSchema = createInsertSchema(careers).omit({ 
  id: true 
});

export const testimonialSchema = createInsertSchema(testimonials).omit({ 
  id: true 
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type BlogPost = typeof blogPosts.$inferSelect;
export type Career = typeof careers.$inferSelect;
export type Testimonial = typeof testimonials.$inferSelect;

export type InsertContactSubmission = z.infer<typeof contactSchema>;
export type InsertBlogPost = z.infer<typeof blogPostSchema>;
export type InsertCareer = z.infer<typeof careerSchema>;
export type InsertTestimonial = z.infer<typeof testimonialSchema>;
