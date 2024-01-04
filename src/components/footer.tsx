import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='flex flex-col sm:flex-row sm:items-center sm:justify-between'>
      <h1 className='fon-bold text-xl'>Logo</h1>
      <p className='flex items-center gap-2 text-slate-500'>
        <span>Designed and developed by</span>
        <a href='https://github.com/amarxo77' className='flex items-center '>
          <FaGithub />
          <span className='italic'>amar.✘♥</span>
          <span className='font-bold italic'>O</span>
        </a>
      </p>
    </footer>
  );
}
