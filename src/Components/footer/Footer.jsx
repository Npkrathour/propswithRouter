import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div>
      <footer className="bg-sky-400 w-[1440px] mx-auto">
        <div className="grid grid-cols-3 p-5 justify-center text-center">
          <div className="links">
            <ul className="text-start">
              <li className="py-1">
                <NavLink to="/" className={`text-base font-medium py-3`}>
                  Home
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/about" className={`text-base font-medium py-3`}>
                  About
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/service" className={`text-base font-medium py-3`}>
                  Service
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/contact" className={`text-base font-medium py-3`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="links">
            <ul>
              <li className="py-1">
                <NavLink to="/" className={`text-base font-medium py-3`}>
                  Home
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/about" className={`text-base font-medium py-3`}>
                  About
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/service" className={`text-base font-medium py-3`}>
                  Service
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/contact" className={`text-base font-medium py-3`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="links">
            <ul className="text-end">
              <li className="py-1">
                <NavLink to="/" className={`text-base font-medium py-3`}>
                  Home
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/about" className={`text-base font-medium py-3`}>
                  About
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/service" className={`text-base font-medium py-3`}>
                  Service
                </NavLink>
              </li>
              <li className="py-1">
                <NavLink to="/contact" className={`text-base font-medium py-3`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
