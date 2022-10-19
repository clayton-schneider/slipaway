interface Props {
  isOpen: boolean;
  clicked: () => void;
}
const Hamburger = ({ isOpen, clicked }: Props) => {
  return (
    <button
      onClick={clicked}
      className="cursor-pointer lg:hidden relative z-50"
    >
      <span
        className={
          "block w-7 h-1 mx-auto my-1 transition-all duration-300 bg-neutral-900 " +
          (isOpen ? "rotate-45 translate-y-2" : "")
        }
      ></span>
      <span
        className={
          "block w-7 h-1 mx-auto my-1 transition-all duration-300 bg-neutral-900" +
          (isOpen ? "opacity-0" : "")
        }
      ></span>
      <span
        className={
          "block w-7 h-1 mx-auto my-1 transition-all duration-300 bg-neutral-900 " +
          (isOpen ? "-rotate-45 -translate-y-2" : "")
        }
      ></span>
    </button>
  );
};

export default Hamburger;
