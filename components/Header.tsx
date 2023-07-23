import Image from 'next/image';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import Navbar from './Navbar';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='sticky top-0 bg-white z-10 shadow-md pt-2 pb-4 sm:pb-0 xl:pb-4 px-4'>
      <div className='flex items-center justify-between'>
        <Link href={'/'} className='flex items-center space-x-1.5'>
          <Image
            src={
              'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg'
            }
            alt='Google logo'
            width={80}
            height={160}
          />
          <span className='text-xl text-neutral-500 font-medium'>News</span>
        </Link>
        <SearchBar />
        <div className='flex items-center space-x-3'>
          <SearchBtn />
          <div className='bg-neutral-100 rounded-full w-12 h-12'></div>
        </div>
      </div>

      <Navbar />
    </header>
  );
}
