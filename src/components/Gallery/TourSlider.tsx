import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
interface Props {
  images: {
    src: any;
    alt: string;
  }[];
  className?: string;
}

export default function ({ images, className }: Props) {
  return (
    <Splide
      className={className ? className : ""}
      options={{
        lazy: true,
        type: "loop",
        autoplay: true,
        interval: 3000,
        focus: 0,
        gap: "40px",
        perPage: 3,
        perMove: 1,
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
        classes: {
          arrow: "hidden",
          pagination:
            "flex justify-center mt-10 space-x-1 [&>li]:flex [&>li]:items-center h-[14px]",
          page: "w-2 h-2 bg-orange border-[3px] border-transparent rounded-full transition-all duration-300 [&.is-active]:bg-white [&.is-active]:border-orange [&.is-active]:w-[14px] [&.is-active]:h-[14px]",
        },
      }}
      aria-label="React Splide Example"
    >
      {images.map((image, idx) => (
        <SplideSlide key={idx}>
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-3xl w-full lg:w-[380px] h-[260px] object-cover"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
