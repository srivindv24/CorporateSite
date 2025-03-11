import {
  type ContactSubmission,
  type InsertContactSubmission,
  type BlogPost,
  type InsertBlogPost,
  type Career,
  type InsertCareer,
  type Testimonial,
  type InsertTestimonial,
} from "@shared/schema";

export interface IStorage {
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Blog posts
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  
  // Careers
  createCareer(career: InsertCareer): Promise<Career>;
  getCareers(): Promise<Career[]>;
  getCareer(id: number): Promise<Career | undefined>;
  
  // Testimonials
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private blogPosts: Map<number, BlogPost>;
  private careers: Map<number, Career>;
  private testimonials: Map<number, Testimonial>;
  private currentIds: { [key: string]: number };

  constructor() {
    this.contactSubmissions = new Map();
    this.blogPosts = new Map();
    this.careers = new Map();
    this.testimonials = new Map();
    this.currentIds = {
      contacts: 1,
      blogs: 1,
      careers: 1,
      testimonials: 1,
    };
    
    // Add some initial blog posts and testimonials
    this.initializeData();
  }

  private initializeData() {
    // Add sample blog posts
    const samplePosts: InsertBlogPost[] = [
      {
        title: "The Future of Technology in Business",
        content: "As we look ahead to the future...",
        author: "John Smith"
      },
      {
        title: "Innovation in Corporate Culture",
        content: "Modern workplaces are evolving...",
        author: "Sarah Johnson"
      }
    ];
    
    samplePosts.forEach(post => this.createBlogPost(post));

    // Add sample testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Michael Brown",
        company: "Tech Solutions Inc",
        content: "Working with this company has transformed our business operations...",
        role: "CEO"
      },
      {
        name: "Lisa Chen",
        company: "Global Innovations",
        content: "The level of professionalism and expertise is outstanding...",
        role: "Director of Operations"
      }
    ];
    
    sampleTestimonials.forEach(testimonial => this.createTestimonial(testimonial));
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentIds.contacts++;
    const newSubmission: ContactSubmission = {
      ...submission,
      id,
      createdAt: new Date(),
    };
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentIds.blogs++;
    const newPost: BlogPost = {
      ...post,
      id,
      createdAt: new Date(),
    };
    this.blogPosts.set(id, newPost);
    return newPost;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async createCareer(career: InsertCareer): Promise<Career> {
    const id = this.currentIds.careers++;
    const newCareer: Career = {
      ...career,
      id,
    };
    this.careers.set(id, newCareer);
    return newCareer;
  }

  async getCareers(): Promise<Career[]> {
    return Array.from(this.careers.values());
  }

  async getCareer(id: number): Promise<Career | undefined> {
    return this.careers.get(id);
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentIds.testimonials++;
    const newTestimonial: Testimonial = {
      ...testimonial,
      id,
    };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
}

export const storage = new MemStorage();
