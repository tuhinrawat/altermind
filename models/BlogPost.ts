import { Schema, model, models } from 'mongoose';

export interface IBlogPost {
  title: string;
  content: string;
  excerpt: string;
  author: string;
  slug: string;
  tags: string[];
  coverImage?: string;
  coverImageCaption?: string;
  publishedAt: Date;
  lastModified: Date;
  isPublished: boolean;
}

const blogPostSchema = new Schema<IBlogPost>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String, required: true },
  author: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  tags: [{ type: String }],
  coverImage: { type: String },
  coverImageCaption: { type: String },
  publishedAt: { type: Date, default: Date.now },
  lastModified: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false }
});

// Update lastModified on every save
blogPostSchema.pre('save', function(next) {
  this.lastModified = new Date();
  next();
});

// Generate slug from title if not provided
blogPostSchema.pre('save', function(next) {
  if (!this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  next();
});

export default models.BlogPost || model<IBlogPost>('BlogPost', blogPostSchema); 