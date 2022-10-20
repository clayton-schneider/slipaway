import * as SplideLib from "@splidejs/react-splide";
const { Splide, SplideSlide } = SplideLib;

import "@splidejs/react-splide/css/core";
interface Props {
  images: {
    src: any;
    alt: string;
  }[];
}

export function Slider({ images }: Props) {
  return (
    <Splide
      className="h-[350px] w-[600px] relative"
      options={{
        lazy: true,
        type: "loop",
        autoplay: true,
        gap: "40px",
        classes: {
          arrow:
            "fill-light-blue absolute [&>svg]:w-5 [&>svg]:h-5 z-50 bg-white rounded-full p-2 shadow-xl shadow-neutral-300",
          next: "right-10 top-1/2",
          prev: "left-10 top-1/2 rotate-180",
        },
      }}
      aria-label="React Splide Example"
    >
      {images.map((image, idx) => (
        <SplideSlide key={idx}>
          <img src={image.src} alt={image.alt} className="rounded-[50px]" />
        </SplideSlide>
      ))}
    </Splide>
  );
}
