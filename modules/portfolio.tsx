import Image from "next/image";
import { galleryImages } from "@/data";

export default function Portfolio() {
  const mapper = (
    val: {
      src: string;
      alt: string;
      name: string;
    },
    ind: number
  ) => {
    return (
      <div className={`img-container ${val.name}`} key={ind}>
        <Image src={val.src} alt={val.alt} fill priority sizes="100%"></Image>
      </div>
    );
  };

  return (
    <section className="gallery-main">
      <h3 className="gallery-header">
        <span className="gallery-heading">RECENT WORKS</span>
        <p className="gallery-description">
          We love what we do, check out some of our latest works
        </p>
      </h3>
      <div className="gallery-container">
        <div className="gallery">{galleryImages.map(mapper)}</div>
      </div>
    </section>
  );
}
