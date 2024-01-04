'use client';

import { addBlog, deleteBlog } from '@/utils/actions';

export default function ServerActionTestPage() {
  const handelClick = async () => {
    await deleteBlog('659692f2f1721b0b04accda8');
    console.log('test blog deleted');
  };
  return (
    <>
      <form action={addBlog}>
        <input type='text' name='title' placeholder='title' />
        <input type='text' name='description' placeholder='description' />
        <input type='text' name='userId' placeholder='userId' />
        <input type='text' name='slug' placeholder='slug' />
        <button type='submit'>Test me</button>
      </form>
      <button
        type='button'
        onClick={handelClick}
        className='bg-purple-500 font-bold text-white'
      >
        Delete Test Post
      </button>
    </>
  );
}
