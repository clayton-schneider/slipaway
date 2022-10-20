interface Props {
  isOpen: boolean;
  clicked: () => void;
  lightMode?: boolean;
}
const Hamburger = ({ isOpen, clicked, lightMode = false }: Props) => {
  return (
    <button
      onClick={clicked}
      className="cursor-pointer lg:hidden relative z-50"
    >
      <span
        className={
          "block w-7 h-1 mx-auto my-1 transition-all duration-300 " +
          (isOpen ? "rotate-45 translate-y-2 " : "") +
          (lightMode ? "bg-white" : "bg-neutral-900")
        }
      ></span>
      <span
        className={
          "block w-7 h-1 mx-auto my-1 transition-all duration-300 " +
          (isOpen ? "opacity-0 " : "") +
          (lightMode ? "bg-white" : "bg-neutral-900")
        }
      ></span>
      <span
        className={
          "block w-7 h-1 mx-auto my-1 transition-all duration-300  " +
          (isOpen ? "-rotate-45 -translate-y-2 " : "") +
          (lightMode ? "bg-white" : "bg-neutral-900")
        }
      ></span>
    </button>
  );
};

export default Hamburger;
