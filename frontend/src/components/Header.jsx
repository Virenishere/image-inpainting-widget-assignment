const Header = () => {
  return (
    <header className="bg-[#1B1A26] flex justify-between items-center mx-10 py-5">
      <a href="/" className="text-white font-bold text-4xl italic">
        LO<span className="text-yellow-300 font-bold text-4xl italic">GO</span>
      </a>

      <svg
        width="25"
        height="25"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
         className="cursor-pointer"
      >
        <path
          d="M8.75004 1.66666V3.49608C6.59436 4.05174 5.00004 6.00399 5.00004 8.33332V12.5H15V8.33332C15 6.00399 13.4057 4.05174 11.25 3.49608V1.66666H8.75004ZM3.33337 14.1667V15.8333H8.55798C8.41124 16.0866 8.33377 16.374 8.33337 16.6667C8.33337 17.1087 8.50897 17.5326 8.82153 17.8452C9.13409 18.1577 9.55801 18.3333 10 18.3333C10.4421 18.3333 10.866 18.1577 11.1786 17.8452C11.4911 17.5326 11.6667 17.1087 11.6667 16.6667C11.6658 16.3738 11.5878 16.0864 11.4405 15.8333H16.6667V14.1667H3.33337Z"
          fill="#808080"
        />
      </svg>
    </header>
  );
};

export default Header;
