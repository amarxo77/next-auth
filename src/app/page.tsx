import Image from 'next/image';
import brandsImg from '/public/brands.png';
import heroGif from '/public/hero.gif';

export default async function HomePage() {
  return (
    <div className='lg:grid lg:grid-cols-2 lg:gap-24'>
      <div className='space-y-6 md:grid md:grid-rows-[auto,auto,auto,5rem] md:space-y-4'>
        <h1 className='text-center text-6xl font-medium text-fuchsia-300 md:pb-0 md:text-left md:text-8xl shadow-inner shadow-fuchsia-800'>
          Creative Thoughts Agency
        </h1>
        <p className='text-center text-xl md:pb-0 md:text-left'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          aspernatur eaque esse voluptatibus ex vero, sunt quia?
        </p>
        <div className='flex items-center justify-center gap-5 md:justify-start md:pb-0'>
          <button className='w-32 rounded-md bg-blue-500 p-[0.7rem] font-semibold text-slate-50 md:p-5'>
            Learn More
          </button>
          <button className='w-32 rounded-md bg-fuchsia-400 p-[0.7rem] font-semibold text-zinc-950 md:p-5'>
            Contact
          </button>
        </div>
        <div className='relative h-12 grayscale md:h-auto'>
          <Image
            src={brandsImg}
            alt='brands images'
            fill
            sizes='100%'
            className='object-contain'
          />
        </div>
      </div>

      <div className='hidden lg:relative lg:block'>
        <Image
          src={heroGif}
          alt='hero'
          fill
          sizes='100%'
          className='object-contain'
        />
      </div>
    </div>
  );
}
