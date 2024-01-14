import PropTypes from "prop-types"
import { useState } from "react";
import "./Navbar.css";

function NavLogo() {
  return (
    <div className="flex items-center space-x-3 rtl:space-x-reverse">
      <svg
        width="56"
        height="43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 21.061h11.205v10.97H0V21.06Z" fill="#D6B0FF"></path>
        <path
          d="m17.928 25.449-6.723 6.582L22.41 42.78 34.51 30.934l-1.793-17.551h-14.79v12.066Z"
          fill="url(#Logo_svg__a)"
        ></path>
        <path d="M11.205 32.03H22.41V43H11.205V32.03Z" fill="#D6B0FF"></path>
        <path
          d="M48.63 17.332v9.653L32.717 11.408 43.923 0l10.981 10.97-6.275 6.362Z"
          fill="url(#Logo_svg__b)"
        ></path>
        <path
          d="M43.923 0h11.205v10.97H43.923V0ZM11.653 10.828 22.428.279l32.644 31.957-10.776 10.549-32.643-31.957Z"
          fill="#D6B0FF"
        ></path>
        <defs>
          <linearGradient
            id="Logo_svg__a"
            x1="29.059"
            y1="52.563"
            x2="13.838"
            y2="-7.019"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.031" stopColor="#848AFF"></stop>
            <stop offset="1" stopColor="#EA8CFF"></stop>
          </linearGradient>
          <linearGradient
            id="Logo_svg__b"
            x1="29.059"
            y1="52.563"
            x2="13.838"
            y2="-7.019"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.031" stopColor="#848AFF"></stop>
            <stop offset="1" stopColor="#EA8CFF"></stop>
          </linearGradient>
        </defs>
      </svg>
      <svg
        width="69"
        height="20"
        viewBox="0 0 69 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.9214 0.128174H27.3516H21.4079H21.2905L21.4079 11.86V14.7671H20.8218L10.603 0.128174H0.179443V19.7746H6.24051L6.09383 5.13559H6.73815L17.0153 19.7746H21.4075H27.3512V18.3955V13.0001V11.91H32.9211H34.7045H37.6953H41.3068V7.60979H37.6953H34.7045H32.9211H27.3516V7.04225V4.75267H32.9214H34.7049H37.6957H48.6272H57.2062C61.8033 4.75267 62.6816 5.04742 62.6816 10.0253C62.6816 11.1151 62.7106 13.324 61.8029 14.0898C61.1296 14.6495 59.812 14.679 58.9917 14.7085C58.2891 14.738 57.6154 14.7671 56.9128 14.7671H48.6265V6.22532H42.7704V19.7746H57.4104C59.9576 19.7746 64.6424 19.9808 66.663 18.1252C67.8633 17.006 68.3026 15.0914 68.4196 13.5007C68.5072 12.2343 68.5369 10.938 68.5369 9.67156C68.5369 7.75698 68.5952 5.69521 67.981 3.83965C66.8691 0.481579 63.7069 0.216705 60.6617 0.157684C59.5491 0.128174 58.4365 0.128174 57.3239 0.128174H48.6276H42.7715H41.3076H37.696H34.7052H32.9214Z"
          fill="#171717"
        ></path>
      </svg>
    </div>
  );
}

function TwitterIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1423_21396)">
        <path
          d="M20 3.79875C19.2563 4.125 18.4637 4.34125 17.6375 4.44625C18.4875 3.93875 19.1363 3.14125 19.4412 2.18C18.6488 2.6525 17.7738 2.98625 16.8412 3.1725C16.0887 2.37125 15.0162 1.875 13.8462 1.875C11.5763 1.875 9.74875 3.7175 9.74875 5.97625C9.74875 6.30125 9.77625 6.61375 9.84375 6.91125C6.435 6.745 3.41875 5.11125 1.3925 2.6225C1.03875 3.23625 0.83125 3.93875 0.83125 4.695C0.83125 6.115 1.5625 7.37375 2.6525 8.1025C1.99375 8.09 1.3475 7.89875 0.8 7.5975C0.8 7.61 0.8 7.62625 0.8 7.6425C0.8 9.635 2.22125 11.29 4.085 11.6712C3.75125 11.7625 3.3875 11.8062 3.01 11.8062C2.7475 11.8062 2.4825 11.7913 2.23375 11.7362C2.765 13.36 4.2725 14.5538 6.065 14.5925C4.67 15.6838 2.89875 16.3412 0.98125 16.3412C0.645 16.3412 0.3225 16.3263 0 16.285C1.81625 17.4563 3.96875 18.125 6.29 18.125C13.835 18.125 17.96 11.875 17.96 6.4575C17.96 6.27625 17.9538 6.10125 17.945 5.9275C18.7588 5.35 19.4425 4.62875 20 3.79875Z"
          fill="#6C52EE"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1423_21396">
          <rect width="20" height="20" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}

function Socials() {
  return (
    <div className="xl:flex gap-2 items-center justify-center hidden">
      <a href="https://www.nfd.gg/">
        <div className="sc-5c4ac8b4-6 bbMZeo">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1423_21393)">
              <path
                d="M3.06911 3.6415C4.34384 3.05662 5.71079 2.62568 7.14005 2.37884C7.16606 2.37408 7.19208 2.38599 7.20548 2.40978C7.3813 2.72248 7.57602 3.13037 7.71239 3.45099C9.24962 3.22084 10.779 3.22084 12.2847 3.45099C12.4211 3.12326 12.6229 2.72248 12.7995 2.40978C12.8129 2.38677 12.8389 2.37486 12.8649 2.37884C14.2934 2.62486 15.6603 3.0558 16.9359 3.6415C16.9469 3.64627 16.9564 3.65419 16.9627 3.66451C19.5555 7.53814 20.2658 11.3166 19.9174 15.0481C19.9158 15.0664 19.9055 15.0838 19.8913 15.0949C18.1807 16.3512 16.5236 17.1139 14.8973 17.6194C14.8713 17.6274 14.8437 17.6179 14.8271 17.5964C14.4424 17.0711 14.0995 16.5171 13.8055 15.9346C13.7881 15.9005 13.8047 15.86 13.8402 15.8465C14.3841 15.6402 14.902 15.3886 15.4003 15.1029C15.4397 15.0799 15.4429 15.0235 15.4066 14.9965C15.3017 14.918 15.1968 14.8362 15.0967 14.7537C15.0786 14.7386 15.0534 14.7354 15.0321 14.7449C11.759 16.2394 8.2154 16.2394 4.98091 14.7449C4.95962 14.7346 4.93438 14.7378 4.91548 14.7529C4.81532 14.8354 4.71048 14.9179 4.60485 14.9965C4.5686 15.0235 4.57098 15.0799 4.61036 15.1029C5.1086 15.3941 5.62653 15.6401 6.17126 15.8457C6.20673 15.8592 6.22251 15.9004 6.20512 15.9345C5.90477 16.5163 5.56184 17.0702 5.18427 17.5956C5.16848 17.6178 5.14013 17.6274 5.11411 17.6194C3.47993 17.1139 1.82282 16.3512 0.112156 15.0949C0.0971565 15.0838 0.0877018 15.0671 0.0861397 15.0489C-0.330891 10.7348 0.784616 6.98732 3.04317 3.66525C3.04864 3.65419 3.05809 3.64627 3.06911 3.6415ZM13.3166 12.776C14.302 12.776 15.114 11.8713 15.114 10.7602C15.114 9.64912 14.3178 8.74443 13.3166 8.74443C12.3076 8.74443 11.5034 9.65709 11.5192 10.7602C11.5192 11.8713 12.3155 12.776 13.3166 12.776ZM6.67102 12.776C7.65641 12.776 8.46841 11.8713 8.46841 10.7602C8.46841 9.64912 7.6722 8.74443 6.67102 8.74443C5.66196 8.74443 4.85786 9.65709 4.8736 10.7602C4.8736 11.8713 5.66192 12.776 6.67102 12.776Z"
                fill="#6C52EE"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_1423_21393">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="matrix(-1 0 0 1 20 0)"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>
      </a>
      <a href="https://twitter.com/NFD_gg">
        <div className="sc-5c4ac8b4-6 bbMZeo">
          <TwitterIcon></TwitterIcon>
        </div>
      </a>
    </div>
  );
}

function DiscordIcon() {
  return (
    <svg
      width="27"
      height="25"
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.1636 4.55227C20.5702 3.82117 18.8615 3.2825 17.0749 2.97395C17.0424 2.96799 17.0099 2.98289 16.9932 3.01262C16.7734 3.40349 16.53 3.91336 16.3595 4.31414C14.438 4.02644 12.5263 4.02644 10.6441 4.31414C10.4736 3.90447 10.2214 3.40349 10.0006 3.01262C9.98387 2.98386 9.95135 2.96897 9.91884 2.97395C8.13329 3.28147 6.4246 3.82014 4.83016 4.55227C4.81635 4.55823 4.80453 4.56814 4.79667 4.58103C1.55565 9.42307 0.667761 14.1461 1.10331 18.8106C1.10526 18.8334 1.1181 18.8552 1.13583 18.8691C3.27416 20.4395 5.34554 21.3928 7.37841 22.0247C7.41092 22.0346 7.4454 22.0228 7.4661 21.996C7.94696 21.3393 8.37562 20.6469 8.74315 19.9187C8.76483 19.8761 8.74413 19.8254 8.69979 19.8086C8.01986 19.5507 7.37245 19.2362 6.74965 18.8791C6.70038 18.8503 6.69642 18.7799 6.74179 18.7461C6.87284 18.6479 7.00394 18.5457 7.12909 18.4426C7.15175 18.4237 7.18329 18.4198 7.2099 18.4316C11.3013 20.2996 15.7308 20.2996 19.7739 18.4316C19.8005 18.4187 19.832 18.4227 19.8557 18.4415C19.9808 18.5447 20.1119 18.6479 20.2439 18.7461C20.2892 18.7798 20.2863 18.8503 20.237 18.879C19.6142 19.2431 18.9668 19.5506 18.2859 19.8075C18.2416 19.8244 18.2219 19.876 18.2436 19.9186C18.619 20.6458 19.0477 21.3382 19.5197 21.9949C19.5394 22.0227 19.5748 22.0346 19.6074 22.0247C21.6501 21.3928 23.7215 20.4394 25.8598 18.8691C25.8786 18.8552 25.8904 18.8344 25.8923 18.8115C26.4136 13.4189 25.0192 8.7346 22.196 4.58201C22.1892 4.56814 22.1774 4.55823 22.1636 4.55227ZM9.35424 15.9704C8.12245 15.9704 7.10746 14.8395 7.10746 13.4507C7.10746 12.0618 8.10272 10.9309 9.35424 10.9309C10.6155 10.9309 11.6207 12.0718 11.601 13.4507C11.601 14.8395 10.6057 15.9704 9.35424 15.9704ZM17.6612 15.9704C16.4295 15.9704 15.4145 14.8395 15.4145 13.4507C15.4145 12.0618 16.4098 10.9309 17.6612 10.9309C18.9225 10.9309 19.9277 12.0718 19.908 13.4507C19.908 14.8395 18.9226 15.9704 17.6612 15.9704Z"
        fill="url(#paint0_linear_564_9860-aa223)"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_564_9860-aa223"
          x1="1"
          y1="12.5004"
          x2="26"
          y2="12.5004"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D1A0FF"></stop>
          <stop offset="1" stopColor="#DABFFF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

function NavigationLinks(props) {
  return (
    <ul
      role="menubar"
      aria-label="Select page"
      className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto  lg:overflow-visible lg:bg-white/0 lg:gap-6 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
        props.isToggleOpen
          ? "visible opacity-100 backdrop-blur-xl flex justify-center flex-col items-center font-bold text-[24px] underline"
          : "invisible opacity-0"
      }`}
    >
      <li role="none" className="flex items-stretch">
        <a
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 focus:text-blue-800 focus:outline-none focus-visible:outline-none"
          href="#home"
        >
          <span>About</span>
        </a>
      </li>
      <li role="none" className="flex items-stretch">
        <a
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 focus:text-blue-800 focus:outline-none focus-visible:outline-none"
          href="#aggregator"
        >
          <span>Aggregator</span>
        </a>
      </li>
      <li role="none" className="flex items-stretch">
        <a
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 focus:text-blue-800 focus:outline-none focus-visible:outline-none "
          href="#features"
        >
          <span>Features</span>
        </a>
      </li>
      <li role="none" className="flex items-stretch">
        <a
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 focus:text-blue-800 focus:outline-none focus-visible:outline-none"
          href="#roadmap"
        >
          <span>Roadmap</span>
        </a>
      </li>
      <li role="none" className="flex items-stretch">
        <a
          role="menuitem"
          aria-haspopup="false"
          className="flex items-center gap-2 py-4 transition-colors duration-300 focus:text-blue-800 focus:outline-none focus-visible:outline-none"
          href="#contact"
        >
          <span>Contact Us</span>
        </a>
      </li>
      <li role="none" className={`${props.isToggleOpen ? "w-full" : "hidden"}`}>
        <a href="https://www.nfd.gg/">
          <button
            type="button"
            className="text-white w-full bg-[#6b83da] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-mediumtext-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2 dark:focus:ring-[#3b5998]/55 me-2 mb-2 rounded-tl-[32px] rounded-br-[32px] rounded-tr-lg rounded-bl-lg"
          >
            <DiscordIcon></DiscordIcon>
            <>Join Discord</>
          </button>
        </a>
      </li>
      <li role="none" className={`${props.isToggleOpen ? "w-full" : "hidden"}`}>
        <a href="https://www.nfd.gg/">
          <button
            type="button"
            className="w-full text-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-mediumtext-sm px-5 py-2.5 text-center inline-flex items-center justify-center gap-2 dark:focus:ring-[#3b5998]/55 me-2 mb-2 rounded-tl-[32px] rounded-br-[32px] rounded-tr-lg rounded-bl-lg border-2 border-blue-400"
          >
            <TwitterIcon />
            <>Follow Twitter</>
          </button>
        </a>
      </li>
    </ul>
  );
}

NavigationLinks.propTypes = {
  isToggleOpen: PropTypes.any
}

function DropDownButton(props) {
  return (
    <button
      className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  props.isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
      onClick={() => props.setIsToggleOpen(!props.isToggleOpen)}
      aria-expanded={props.isToggleOpen ? "true" : "false"}
      aria-label="Toggle navigation"
    >
      <svg
        width="30"
        height="13"
        viewBox="0 0 30 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="30" height="3" rx="1.5" fill="#171717"></rect>
        <rect y="10" width="15" height="3" rx="1.5" fill="#171717"></rect>
      </svg>
    </button>
  );
}

DropDownButton.propTypes = {
  isToggleOpen: PropTypes.any,
  setIsToggleOpen: PropTypes.func
}

const Navbar = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-20 xl:bg-white/90 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden max-w-[95%] mx-auto rounded-[30px] mt-3 py-1">
      <div className="relative px-8 w-full">
        <nav
          aria-label="main navigation"
          className="flex items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          <NavLogo />
          <DropDownButton
            isToggleOpen={isToggleOpen}
            setIsToggleOpen={setIsToggleOpen}
          ></DropDownButton>
          <NavigationLinks isToggleOpen={isToggleOpen}></NavigationLinks>
          <Socials></Socials>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
