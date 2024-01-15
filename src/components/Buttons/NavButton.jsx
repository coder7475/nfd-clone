// eslint-disable-next-line react/prop-types
const NavButton = ({ text }) => {
  return (
    <button
      type="button"
      className="py-2.5 px-5 me-2 mb-2 text-[14px] font-medium text-[#838383] focus:outline-none bg-[#ebe6e6] rounded-tl-3xl rounded-br-3xl border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
    >
      {text}
    </button>
  );
};

export default NavButton;
