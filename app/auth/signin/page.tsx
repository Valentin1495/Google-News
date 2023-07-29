import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import SigninBtn from '@/components/signin-btn';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';

export default async function Signin() {
  const session = await getServerSession(authOptions);

  if (session) redirect('/');

  return (
    <div className='flex justify-center min-h-screen items-center flex-col'>
      <Image src={'/icon.png'} alt='Google news logo' width={70} height={70} />
      <SigninBtn />
    </div>
  );
}
