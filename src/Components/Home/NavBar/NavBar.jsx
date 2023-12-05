import { NavLink } from "react-router-dom";
const NavBar = () => {
    return (
        <div>
            <div>
            <nav
  className="block w-full max-w-screen-xl px-6 py-3 mx-auto ">
  <div className="flex items-center justify-between text-blue-gray-900">
    <a href="#"
      className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
      <img src="../../../../public/Resources/Logo.png" alt="" />
    </a>
    <div className="hidden lg:block">
      <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
        <NavLink to = '/' className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>
          Home
          </NavLink>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
        <NavLink to = '/donation' className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>
         Donation
          </NavLink>
        </li>
        <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <NavLink to = '/statistics' className={({ isActive, isPending }) =>
         isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>
            Statistics
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
          </nav>
            </div>
        </div>
    );
};

export default NavBar;