import mongoose from 'mongoose';
import Blog, { BlogDocument } from './models/Blog';
import User, { UserDocument } from './models/User';

export async function connectDB() {
  if (mongoose.connections[0].readyState >= 1) {
    console.log('Already connected to the database');
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log('connected to the database.');
  } catch (error) {
    console.log(error);
    console.log('Error while connecting to the database');
  }
}

export async function getBlogs() {
  try {
    await connectDB();
    const blogs: BlogDocument[] = await Blog.find({});
    return blogs;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch the blogs');
  }
}

export async function getSingleBlog(blogId: string) {
  try {
    await connectDB();
    const blog: BlogDocument | null = await Blog.findById(blogId);
    if (!blog) throw new Error(`Blog with id does not exists`);
    return blog;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch the blog');
  }
}

export async function getUsers() {
  try {
    await connectDB();
    const users: UserDocument[] = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch the users');
  }
}

export async function getUser(userId: string) {
  try {
    await connectDB();
    const user: UserDocument | null = await User.findById(userId);
    if (!user) throw new Error(`Not able to find the user with the id`);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Failed to fetch the user');
  }
}
