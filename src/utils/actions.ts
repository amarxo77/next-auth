'use server';

import { revalidatePath } from 'next/cache';
import { connectDB } from './db';
import Blog from './models/Blog';

export async function addBlog(formData: FormData) {
  try {
    await connectDB();
    const { title, description, userId, slug } = Object.fromEntries(formData);
    await Blog.create({
      title,
      description,
      userId,
      slug,
    });
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    throw new Error('Error while creating a new blog');
  }
}

export async function deleteBlog(blogId: string) {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(blogId);
    if (!deletedBlog) throw new Error('Post with specified id not found');
    console.log('blog deleted');
    revalidatePath('/blog');
  } catch (error) {
    console.log(error);
    throw new Error('There was an error while deleting the blog.');
  }
}
