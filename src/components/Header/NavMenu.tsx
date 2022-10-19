import { useState } from "react";
import PrimaryBtn from "../Button/PrimaryBtn.astro";
import Hamburger from "./Hamburger";

interface Props {
  links: {
    link: string;
    linkText: string;
    sublinks?: {
      link: string;
      linkText: string;
    }[];
  }[];
}

const NavMenu = ({ links }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <ul
        className={
          "fixed lg:static top-[190px] py-5 lg:py-0 flex-col lg:flex-row bg-white w-full lg:w-auto flex transition-all duration-300 gap-6 items-center text-lg " +
          (isOpen
            ? "left-0 shadow shadow-neutral-300 z-40 !text-black"
            : "-left-full")
        }
      >
        {links.map((link, idx) => {
          if (link.sublinks) {
            return (
              <li key={idx} className="relative group">
                <a href={link.link}>
                  <button>{link.linkText}</button>
                </a>
                <ul className="absolute hidden pt-1 group-hover:block w-[200px] text-black z-50">
                  {link.sublinks.map((sublink, idx) => (
                    <li
                      key={idx}
                      className="first:rounded-t last:rounded-b bg-gray-200 hover:bg-gray-400"
                    >
                      <a className=" py-2 px-4 block" href={sublink.link}>
                        {sublink.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            );
          } else {
            return (
              <li key={idx}>
                <a href={link.link}>{link.linkText}</a>
              </li>
            );
          }
        })}
        <a
          href="/book"
          className="rounded-full inline-block bg-orange font-bold text-white border-2 transition-all duration-300 border-orange py-3 px-6 hover:scale-105"
        >
          Book Now
        </a>
      </ul>
      <Hamburger clicked={handleClick} isOpen={isOpen} />
    </div>
  );
};
export default NavMenu;
