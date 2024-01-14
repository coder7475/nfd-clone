function NavLogo() {
  return (
    <a
      href="https://flowbite.com/"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <svg width="56" height="43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 21.061h11.205v10.97H0V21.06Z" fill="#D6B0FF"></path><path d="m17.928 25.449-6.723 6.582L22.41 42.78 34.51 30.934l-1.793-17.551h-14.79v12.066Z" fill="url(#Logo_svg__a)"></path><path d="M11.205 32.03H22.41V43H11.205V32.03Z" fill="#D6B0FF"></path><path d="M48.63 17.332v9.653L32.717 11.408 43.923 0l10.981 10.97-6.275 6.362Z" fill="url(#Logo_svg__b)"></path><path d="M43.923 0h11.205v10.97H43.923V0ZM11.653 10.828 22.428.279l32.644 31.957-10.776 10.549-32.643-31.957Z" fill="#D6B0FF"></path><defs><linearGradient id="Logo_svg__a" x1="29.059" y1="52.563" x2="13.838" y2="-7.019" gradientUnits="userSpaceOnUse"><stop offset="0.031" stopColor="#848AFF"></stop><stop offset="1" stopColor="#EA8CFF"></stop></linearGradient><linearGradient id="Logo_svg__b" x1="29.059" y1="52.563" x2="13.838" y2="-7.019" gradientUnits="userSpaceOnUse"><stop offset="0.031" stopColor="#848AFF"></stop><stop offset="1" stopColor="#EA8CFF"></stop></linearGradient></defs></svg>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Flowbite
      </span>
    </a>
  );
}

const Navbar = () => {
  return (
    <nav className="xl:bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLogo></NavLogo>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full xl:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
