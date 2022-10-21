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
  lightMode: boolean;
}

const NavMenu = ({ links, lightMode = false }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <ul
        className={
          "fixed lg:static top-[200px] md:top-[190px] py-5 lg:py-0 px-4 lg:px-0 flex-col lg:flex-row bg-white lg:bg-transparent w-full lg:w-auto flex transition-all duration-300 gap-6 items-start lg:items-center text-lg " +
          (isOpen
            ? "left-0 shadow shadow-neutral-300 z-[999] !text-black"
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
                <ul className="lg:absolute lg:hidden pt-1 pl-5 lg:pl-0 lg:group-hover:block w-full lg:w-[200px] text-black z-50">
                  {link.sublinks.map((sublink, idx) => (
                    <li
                      key={idx}
                      className="first:rounded-t last:rounded-b lg:bg-gray-200 lg:hover:bg-gray-400"
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
          className="rounded-full mx-auto inline-block text-center bg-orange font-bold text-white border-2 transition-all duration-300 border-orange py-3 px-6 hover:scale-105"
        >
          Book Now
        </a>
      </ul>
      <Hamburger clicked={handleClick} isOpen={isOpen} lightMode={lightMode} />
    </div>
  );
};
export default NavMenu;
