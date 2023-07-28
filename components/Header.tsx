import Image from 'next/image';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import Navbar from './Navbar';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import { LogInIcon } from './Icons';
import ProfilePic from './ProfilePic';

export default async function Header() {
  const session: User = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <header className='sticky top-0 bg-white z-10 shadow-md pt-2 pb-4 px-4'>
      <div className='flex items-center justify-between'>
        <Link href={'/'} className='flex items-center space-x-1.5'>
          <Image
            src={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/235px-Google_%22G%22_Logo.svg.png'
            }
            alt='Google logo'
            width={25}
            height={25}
          />
          <span className='text-xl text-neutral-500 font-medium'>News</span>
        </Link>
        <SearchBar />
        <div className='flex items-center gap-x-3'>
          <SearchBtn />
          {session && user ? (
            <ProfilePic user={user} />
          ) : (
            <Link
              href={'/auth/signin'}
              className='mt-1.5 flex items-center gap-x-1.5
               bg-sky-400 p-1.5 rounded-md hover:scale-110 transition-transform'
            >
              <LogInIcon className='w-5 h-5 text-white' />
              <span className='text-white font-bold text-sm'>Sign in</span>
            </Link>
          )}
        </div>
      </div>

      <Navbar />
    </header>
  );
}
