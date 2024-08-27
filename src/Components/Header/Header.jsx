import { Link, NavLink } from "react-router-dom";
import { CiHome } from "react-icons/ci";
import { WiCloudDown } from "react-icons/wi";
import { MdMiscellaneousServices } from "react-icons/md";
function Header() {
  return (
    <>
      <nav className="flex justify-between bg-sky-400 w-[1440px] mx-auto border py-4 p-5 my-2 rounded-lg ">
        <div className="brand-logo">
          <Link to="/">
            <h2>Navbar</h2>
          </Link>
        </div>

        <ul className="flex  justify-end gap-10 items-center">
          <li>
            <NavLink to="/" className={`inline-flex items-center gap-1 p-0 m-0 text-base font-normal`}>
              Home <CiHome className={`w-5 h-5 text-dark`} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={`inline-flex items-center gap-1 p-0 m-0 text-base font-normal`}>
              About <WiCloudDown className={`w-5 h-5 text-dark`} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className={`inline-flex items-center gap-1 p-0 m-0 text-base font-normal`}>
              Service <MdMiscellaneousServices className={`w-5 h-5 text-dark`} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
