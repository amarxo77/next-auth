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
    <div className='grid  grid-cols-2 gap-24'>
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
            className='rounded-md bg-bgSoft p-2 text-white'
          />
          <button
            type='submit'
            className='rounded-md bg-blue-500 p-3 font-bold text-white'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
