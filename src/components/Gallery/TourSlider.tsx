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
        gap: "40px",
        perPage: 3,
        perMove: 1,
        classes: {
          arrow: "hidden",
          pagination: "w-full h-10",
        },
      }}
      aria-label="React Splide Example"
    >
      {images.map((image, idx) => (
        <SplideSlide key={idx}>
          <img
            src={image.src}
            alt={image.alt}
            className="rounded-3xl w-[380px] h-[260px] object-cover"
          />
        </SplideSlide>
      ))}
    </Splide>
  );
}
