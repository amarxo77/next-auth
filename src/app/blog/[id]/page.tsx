import Image from 'next/image';
import { getSingleBlog, getUser } from '@/utils/db';
import noImageFoundImg from '/public/noImageFound.png';
import noavatarImg from '/public/noavatar.png';

export default async function SingleBlogPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = await getSingleBlog(params.id);
  const user = await getUser(blog.userId.toString());

  return (
    <article className='grid min-h-[70dvh] grid-cols-[1fr,2fr] gap-24'>
      <div className='relative'>
        <Image
          src={blog?.img || noImageFoundImg}
          alt={blog.title}
          fill
          className='object-cover'
        />
      </div>
      <div className='flex flex-col gap-8'>
        <h1 className='text-6xl'>{blog.title}</h1>
        <div className='flex items-center gap-10'>
          {/* User Details */}
          <Image
            src={noavatarImg}
            alt={user.username}
            width={50}
            className='rounded-full'
          />
          <div className='flex flex-col gap-1'>
            {/* Author Details */}
            <span className='font-bold text-gray-500'>Author</span>
            <span>{user.username}</span>
          </div>
          <div className='flex flex-col gap-1'>
            {/* Published Details */}
            <span className='font-bold text-gray-500'>Published</span>
            <span>{blog.createdAt?.toISOString().slice(0, 10)}</span>
          </div>
        </div>
        <div>{blog.description}</div>
      </div>
    </article>
  );
}
