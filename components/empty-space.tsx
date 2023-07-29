import Image from 'next/image';

export default function EmptySpace() {
  return (
    <div className='bg-white flex flex-col items-center py-5 gap-y-1 rounded-md'>
      <Image
        src={
          'https://lh3.googleusercontent.com/7Iv4pkYA_hqsvlyo6XNy3UU0tUYgBR9rGrDHekm8-6cHO14jbUrOu8dCU86to2kzYoRVHJn0Ow=s0-rw'
        }
        alt='pic for empty space'
        width={150}
        height={150}
      />
      <p>Your stories will appear here.</p>
    </div>
  );
}
