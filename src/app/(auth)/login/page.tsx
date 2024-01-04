import { auth, signIn } from '@/utils/auth';
import { VscGithub } from 'react-icons/vsc';

export default async function LoginPage() {
  const session = await auth();
  console.log(session);

  const handelGithubLogin = async () => {
    'use server';
    await signIn('github');
  };

  return (
    <form action={handelGithubLogin}>
      <button className='flex items-center gap-2 rounded bg-slate-600 px-6 py-4 text-white'>
        <VscGithub className='h-6 w-6' /> Login with Github
      </button>
    </form>
  );
}
