import { useRef, useEffect, useState } from "react";
import { data } from "./data.types";

interface Props {
  key?: number;
  data: data;
  isOpen: boolean;
  btnOnClick: () => void;
}

export default function AccordianItem({ data, isOpen, btnOnClick }: Props) {
  const { title, content } = data;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      const contentEl = contentRef.current as HTMLDivElement;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <li
      className={`mt-5 rounded-xl border shadow-lg shadow-gray-300 border-neutral-300 bg-white py-6 px-8 ${
        isOpen ? "" : ""
      }`}
    >
      <button
        className={`relative flex w-full cursor-pointer flex-wrap items-center justify-between
         text-left text-xl font-bold transition-all duration-300
        ${
          isOpen
            ? "text-primary hover:text-black"
            : "text-black hover:text-primary"
        }`}
        onClick={btnOnClick}
      >
        <div>{title}</div>
        <span className="text-2xl ">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={
          "h-0 overflow-hidden text-lg text-black/90 transition-all duration-300 ease-in " +
          (isOpen ? "pt-6" : "pt-0")
        }
        // need to add the padding to the height
        style={isOpen ? { height: height + 24 } : { height: 0 }}
      >
        <div ref={contentRef}>{content}</div>
      </div>
    </li>
  );
}
