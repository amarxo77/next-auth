import Image from 'next/image';
import AboutStats from '@/components/about/about-stats';
import aboutImg from '/public/about.png';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Page',
  description: 'About page description',
};

export default function AboutPage() {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-24 lg:pb-5'>
      <div className='flex flex-col items-center gap-6 text-center lg:items-start lg:text-left'>
        <h2 className='text-xl font-medium text-blue-500'>About Agency</h2>
        <h1 className='text-5xl font-semibold md:w-3/4 lg:w-full'>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className='text-xl font-light leading-5 md:w-3/4 lg:w-full'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
          dolorum laudantium error? Fugiat sit, aut non deserunt sequi officiis
          natus ipsa, culpa mollitia quod, aspernatur illo soluta? Repellat,
          voluptates suscipit beatae accusamus deserunt vitae ipsa ducimus odio
          voluptatibus necessitatibus dolore aperiam eveniet ratione,
          repellendus vero.
        </p>
        <div className='flex items-center justify-between gap-4'>
          <AboutStats heading='10 k+' overview='Years of experience' />
          <AboutStats heading='10 k+' overview='Years of experience' />
          <AboutStats heading='10 k+' overview='Years of experience' />
        </div>
      </div>
      <div className='hidden lg:relative lg:block'>
        <Image
          src={aboutImg}
          alt='about image'
          fill
          sizes='100%'
          className='object-contain'
        />
      </div>
    </div>
  );
}
