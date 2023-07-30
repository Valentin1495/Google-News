'use client';

import Image from 'next/image';
import Link from 'next/link';

type ModalProps = {
  showModal: boolean;
  closeModal: () => void;
};

export default function Modal({ showModal, closeModal }: ModalProps) {
  return (
    <div
      className={`transition-opacity ${
        showModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className='modal-contents'>
        <Image
          src={
            'https://lh3.googleusercontent.com/vaKCMRGl23zbcBqZQvt0_g3U6yRy6Da_ADX72E1AXQ01TFfqr9m72deNGXk_l5Iyk5g9wFB_3Q=rw'
          }
          alt='Modal pic'
          width={300}
          height={300}
          className='mx-auto'
        />
        <div className='px-3 py-2 space-y-5'>
          <p className='text-center font-bold text-lg'>
            Sign in to save stories for later
          </p>
          <div className='flex justify-end gap-x-3'>
            <button
              onClick={closeModal}
              className='text-sky-500 text-sm hover:text-sky-600 transition-colors font-bold'
            >
              No, thanks
            </button>
            <Link
              href={'/auth/signin'}
              className='text-white font-bold text-sm bg-sky-400 hover:bg-sky-500 transition-colors py-1.5 px-3 rounded-md'
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className='modal-overlay' onClick={closeModal}></div>
    </div>
  );
}
