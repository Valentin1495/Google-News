import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

type OutsideClickProps = {
  dropdownRef: RefObject<HTMLDivElement>;
  btnRef: RefObject<HTMLButtonElement>;
  setShowDropdown: Dispatch<SetStateAction<boolean>>;
};

export default function HandleOutsideClick({
  dropdownRef,
  btnRef,
  setShowDropdown,
}: OutsideClickProps) {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        btnRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return null;
}
