'use client';

import { useState } from 'react';
import { OutlineStarIcon } from './Icons';
import useModal from '@/hooks/useModal';
import Modal from './Modal';

export default function StarBtn() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { openModal, closeModal } = useModal(showModal, setShowModal);

  return (
    <div>
      <button onClick={openModal}>
        <OutlineStarIcon className='w-5 h-5' />
      </button>
      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  );
}
