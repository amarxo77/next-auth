import { Document, Schema, Types, model, models } from 'mongoose';

export type BlogDocument = {
  title: string;
  description: string;
  img?: string;
  userId: Types.ObjectId;
  slug: string;
  createdAt?: Date;
  updatedAt?: Date;
} & Document;

const blogSchema = new Schema<BlogDocument>(
  {
    title: {
      type: String,
      required: [true, 'blog title is required'],
    },
    description: {
      type: String,
      required: [true, 'blog description is required'],
    },
    img: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true },
);

export default models.Blog || model<BlogDocument>('Blog', blogSchema);
