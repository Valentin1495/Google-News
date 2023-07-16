import Image from 'next/image';
import SearchBar from './SearchBar';
import SearchBtn from './SearchBtn';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className='sticky top-0 bg-white z-10 shadow-md py-2 px-4'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-1.5'>
          <div className='relative h-10 w-20'>
            <Image
              src={
                'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg'
              }
              alt='Google logo'
              fill
              priority
            />
          </div>
          <span className='text-xl text-neutral-500 font-medium'>News</span>
        </div>
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
