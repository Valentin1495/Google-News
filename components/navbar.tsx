import CategoryDropdown from './category-dropdown';
import NavLink from './nav-link';

export const categories: string[] = [
  'home',
  'fashion',
  'food',
  'health',
  'travel',
  'technology',
  'arts',
  'movies',
];

export default function Navbar() {
  return (
    <nav className='mt-4 grid grid-cols-4 gap-3 xl:gap-0 xl:flex xl:items-center xl:justify-between w-2/3 mx-auto'>
      {categories.slice(0, 3).map((category, idx) => (
        <div
          key={idx}
          className='flex justify-center items-center w-fit sm:w-auto'
        >
          <NavLink category={category} />
        </div>
      ))}
      {categories.slice(3, 8).map((category, idx) => (
        <div key={idx} className='hidden sm:flex justify-center items-center'>
          <NavLink category={category} />
        </div>
      ))}

      <CategoryDropdown />
    </nav>
  );
}
