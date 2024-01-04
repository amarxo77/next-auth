import BlogCard from '@/components/blog-card';
import { getBlogs } from '@/utils/db';

export default async function BlogPage() {
  const blogs = await getBlogs();
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-16'>
      {blogs.length === 0 ? (
        <div className='text-center'>No Blogs, Add some...</div>
      ) : (
        blogs.map((blog) => {
          const { description, id, slug, title, userId, createdAt, img } = blog;
          return (
            <BlogCard
              key={id}
              blog={{ description, id, slug, title, userId, createdAt, img }}
            />
          );
        })
      )}
    </div>
  );
}
