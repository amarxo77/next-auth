import Image from 'next/image';
import contactImg from '/public/contact.png';
import Input from '@/components/input';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Contact description with the contact form',
};

export default function ContactPage() {
  return (
    <div className='md:grid md:grid-cols-2 md:gap-24 md:pb-5'>
      <div className='relative'>
        <Image
          src={contactImg}
          alt='contact image'
          fill
          sizes='100%'
          className='object-contain'
        />
      </div>
      <div className='self-center'>
        <form className='flex flex-col gap-5'>
          <Input placeholder='Name and Surname' />
          <Input type='email' placeholder='Email Address' />
          <Input type='text' placeholder='Phone Number' />
          <textarea
            name=''
            rows={7}
            placeholder='Message'
            className='h-28 rounded-md bg-bgSoft p-2 text-white md:h-36 lg:h-auto'
          />
          <button
            type='submit'
            className='rounded-md bg-blue-500 p-2 font-bold text-white lg:p-3'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
