import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NavbarData, fadeIn } from "./NavbarData";
import LogoImage from "../../assets/Logo-img.png";
import { AiOutlineSearch } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
const Navbar = () => {
  const [showNav, setshowNav] = useState<boolean>(false);

  return (
    <div className="max-w-full p-4 flex justify-between items-center bg-white sticky top-0 z-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-[#001712]">
      <img src={LogoImage} alt="web Logo" className="flex flex-row-reverse" />
      <ul className="hidden md:flex md:space-x-3 lg:space-x-6 font-Primary items-center  font-medium">
        {/* displays on wide screen */}
        {NavbarData.map((item, index) => {
          return (
            <li key={index} className="">
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "text-[#017358]" : "")}
              >
                <span>{item.title}</span>
              </NavLink>
            </li>
          );
        })}
        <AiOutlineSearch size={20} />
        <div className="flex space-x-3 items-center">
          <div className="h-[40px] border-[#31967e] border"></div>
          <Link
            to="/register"
            className="btn bg-white hover:bg-white/70  font-normal border-none "
          >
            Register
          </Link>
          <Link
            to="/login"
            className="btn py-2 px-6  font-normal bg-[#017358]/75 hover:bg-[#017358] text-white hover:text-white"
          >
            Login
          </Link>
        </div>
      </ul>
      {/* mobile menu */}
      <div className="md:hidden " onClick={() => setshowNav(!showNav)}>
        {showNav ? <GrFormClose size={30} /> : <RxHamburgerMenu size={20} />}
      </div>
      {showNav && (
        <motion.div
          variants={fadeIn("top", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="absolute top-16 h-screen w-full right-0  space-y-10 justify-center items-center  flex flex-col shadow-md z-10 bg-white font-semibold"
        >
          {/* displays on wide screen */}
          {NavbarData.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => (isActive ? " text-textGreen" : "")}
              >
                <span>{item.title}</span>
              </NavLink>
            );
          })}
          <AiOutlineSearch size={20} />
          <div className="flex flex-col space-y-3 items-center">
            <div className="w-[40px] border-[#31967e] border"></div>
            <Link
              to="/register"
              className="btn bg-white hover:bg-white/70  font-normal border-none "
            >
              Register
            </Link>
            <Link
              to="/login"
              className="btn py-2 px-6  font-normal bg-[#017358]/75 hover:bg-[#017358] text-white hover:text-white"
            >
              Login
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
