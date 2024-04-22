import { FC, useState } from "react";

interface zoomProps {
  src: string | undefined;
  alt: string;
}

const ZoomableImage: FC<zoomProps> = ({ src, alt }) => {
  const [zoomed, setZoomed] = useState(false);

  const handleZoomClick = () => {
    setZoomed(!zoomed);
  };

  return (
    <div style={{ overflow: "hidden" }}>
      <img src={src} alt={alt} onClick={handleZoomClick} className={`${zoomed ? `w-[200%] cursor-zoom-in transition` : `w-[100%]`}w-full md:rounded-none rounded-md h-full`} />
    </div>
  );
};

export default ZoomableImage;
