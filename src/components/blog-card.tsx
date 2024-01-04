import Link from 'next/link';
import Image from 'next/image';
import { Types } from 'mongoose';
import noImageFoundImg from '/public/noImageFound.png';

type BlogCardProps = {
  blog: {
    id: string;
    title: string;
    description: string;
    img?: string;
    userId: Types.ObjectId;
    slug: string;
    createdAt?: Date;
    updatedAt?: Date;
  };
};

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className='flex'>
      <div className='grid flex-grow grid-rows-[250px,auto]'>
        <div className='relative'>
          {/* <Image
            src={blog.img ?? noImageFoundImg}
            alt='post image'
            fill
            sizes='100%'
            className='rounded-sm object-cover'
          /> */}
          <img
            src={blog.img ?? noImageFoundImg}
            alt={blog.title}
            className='object-contain'
          />
        </div>
        <div className='flex flex-col gap-3 pt-4'>
          <h1 className='text-2xl font-medium'>{blog.title}</h1>
          <p className='w-11/12 text-sm'>{blog.description}</p>
          <Link href={`/blog/${blog.id}`} className='text-sm underline'>
            READ MORE...
          </Link>
        </div>
      </div>
      <span className='mt-[-30%] inline-block -rotate-90 self-center text-sm'>
        01.01.2024
      </span>
    </article>
  );
}
