import { Splide, SplideSlide } from "@splidejs/react-splide";
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
      className="w-full lg:w-[1200px] mx-auto relative"
      options={{
        lazy: true,
        type: "loop",
        autoplay: true,
        gap: "40px",
        perPage: 2,
        perMove: 1,
        classes: {
          arrow:
            "fill-light-blue absolute top-1/2 [&>svg]:w-5 [&>svg]:h-5 z-50 bg-white rounded-full p-2 -translate-y-1/2 shadow-xl shadow-neutral-300",
          next: "right-10 lg:right-auto lg:right- lg:left-[640px]",
          prev: "left-10 rotate-180",
        },
        breakpoints: {
          1024: {
            perPage: 1,
            height: 400,
            width: "80%",
          },
          640: {
            width: "100%",
            height: 300,
          },
        },
      }}
      aria-label="React Splide Example"
    >
      {images.map((image, idx) => (
        <SplideSlide key={idx}>
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-[50px] w-full h-full object-cover"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
