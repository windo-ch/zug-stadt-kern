import { ClubEventImage } from "@/data/1000erClubEvents";

interface ClubEventGalleryProps {
  images: ClubEventImage[];
  className?: string;
}

const spanFor = (count: number, index: number) => {
  if (count === 1) return "md:col-span-6";
  if (count === 2 || count === 4) return "md:col-span-3";
  if (count === 3) return "md:col-span-2";
  if (index < 2) return "md:col-span-3";
  return "md:col-span-2";
};

const ClubEventGallery = ({ images, className = "" }: ClubEventGalleryProps) => {
  if (!images.length) return null;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 ${className}`}>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`rounded-xl overflow-hidden aspect-[4/3] ${spanFor(images.length, index)}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className={`w-full h-full object-cover ${image.position === "top" ? "object-top" : ""}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ClubEventGallery;
