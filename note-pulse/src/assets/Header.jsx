function Header() {
    return (
      <header className="flex justify-around items-center bg-neutral-900 p-2 shadow-xl/30  w-full z-50 fixed h-20 md:h-24">
        <img
          className="w-26 h-18 md:w-35 md:h-24 mt-1.5 md:mt-2.5"
          src="././public/images/logo-white.png"
          alt=""
        />
        <nav>
          <ul className="flex  gap-4 ease-in-out font-roboto text-white">
            <li className="cursor-pointer hover:bg-blue-main hover:text-white hover:rounded-4xl hover:px-4 duration-600 ease-in-out py-2 hover:shadow-xl/20=">
              Olympics
            </li>
            <li className="cursor-pointer hover:bg-blue-main hover:text-white hover:rounded-4xl hover:px-4 duration-600 ease-in-out py-2 hover:shadow-xl/20">
              Universitys
            </li>
            <li className="cursor-pointer hover:bg-blue-main hover:text-white hover:rounded-4xl hover:px-4 duration-600 ease-in-out py-2 hover:shadow-xl/20">
              Questions
            </li>
            <li className="cursor-pointer hover:bg-blue-main hover:text-white hover:rounded-4xl hover:px-4 duration-500 ease-in-out py-2 hover:shadow-xl/20">
              About Us
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Header
