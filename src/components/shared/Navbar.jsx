import { useState } from "react";

function NavLogo() {
  return (
    <div
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
      <svg width="56" height="43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 21.061h11.205v10.97H0V21.06Z" fill="#D6B0FF"></path><path d="m17.928 25.449-6.723 6.582L22.41 42.78 34.51 30.934l-1.793-17.551h-14.79v12.066Z" fill="url(#Logo_svg__a)"></path><path d="M11.205 32.03H22.41V43H11.205V32.03Z" fill="#D6B0FF"></path><path d="M48.63 17.332v9.653L32.717 11.408 43.923 0l10.981 10.97-6.275 6.362Z" fill="url(#Logo_svg__b)"></path><path d="M43.923 0h11.205v10.97H43.923V0ZM11.653 10.828 22.428.279l32.644 31.957-10.776 10.549-32.643-31.957Z" fill="#D6B0FF"></path><defs><linearGradient id="Logo_svg__a" x1="29.059" y1="52.563" x2="13.838" y2="-7.019" gradientUnits="userSpaceOnUse"><stop offset="0.031" stopColor="#848AFF"></stop><stop offset="1" stopColor="#EA8CFF"></stop></linearGradient><linearGradient id="Logo_svg__b" x1="29.059" y1="52.563" x2="13.838" y2="-7.019" gradientUnits="userSpaceOnUse"><stop offset="0.031" stopColor="#848AFF"></stop><stop offset="1" stopColor="#EA8CFF"></stop></linearGradient></defs></svg>
      <svg width="69" height="20" viewBox="0 0 69 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.9214 0.128174H27.3516H21.4079H21.2905L21.4079 11.86V14.7671H20.8218L10.603 0.128174H0.179443V19.7746H6.24051L6.09383 5.13559H6.73815L17.0153 19.7746H21.4075H27.3512V18.3955V13.0001V11.91H32.9211H34.7045H37.6953H41.3068V7.60979H37.6953H34.7045H32.9211H27.3516V7.04225V4.75267H32.9214H34.7049H37.6957H48.6272H57.2062C61.8033 4.75267 62.6816 5.04742 62.6816 10.0253C62.6816 11.1151 62.7106 13.324 61.8029 14.0898C61.1296 14.6495 59.812 14.679 58.9917 14.7085C58.2891 14.738 57.6154 14.7671 56.9128 14.7671H48.6265V6.22532H42.7704V19.7746H57.4104C59.9576 19.7746 64.6424 19.9808 66.663 18.1252C67.8633 17.006 68.3026 15.0914 68.4196 13.5007C68.5072 12.2343 68.5369 10.938 68.5369 9.67156C68.5369 7.75698 68.5952 5.69521 67.981 3.83965C66.8691 0.481579 63.7069 0.216705 60.6617 0.157684C59.5491 0.128174 58.4365 0.128174 57.3239 0.128174H48.6276H42.7715H41.3076H37.696H34.7052H32.9214Z" fill="#171717"></path></svg>
    </div>
  );
}

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className="relative z-20 xl:bg-white/90 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden max-w-[95%] mx-auto rounded-[30px] mt-3">
        <div className="relative px-8 w-full">
          <nav
            aria-label="main navigation"
            className="flex items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <NavLogo/>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <svg width="30" height="13" viewBox="0 0 30 13" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="30" height="3" rx="1.5" fill="#171717"></rect><rect y="10" width="15" height="3" rx="1.5" fill="#171717"></rect></svg>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="#home"
                >
                  <span>Home</span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 text-emerald-500 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="#features"
                >
                  <span>Features</span>
                </a>
              </li>
             
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="#about"
                >
                  <span>About</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Navbar;
