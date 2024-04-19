import * as React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, className }) => <img loading="lazy" src={src} alt={alt} className={`shrink-0 max-w-full ${className}`} />;

const images = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/09fa4fabf992e4d43e1792df79e0cd5f594262f4b9f35cec811e0b6c06e2d1c0?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 1", className: "aspect-[1.02] w-[190px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/094c76d8de407bc0cca2ab3bb13415393c83bc9250247878a36124c3e6d14819?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 2", className: "aspect-[1.02] w-[190px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/49c2fc00fe07d0586b1d2f375e45ceda6971b3d13cfbdeaaf8a1e4cfc6b20b8f?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 3", className: "aspect-[1.02] w-[190px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c87c020e994664121efa86df1d1579a1af3ee49a67076421f2a021318ccc2791?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 4", className: "aspect-[1.02] w-[190px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e2c16e0ca81ef877b010cb0dc27aa702281f032e2249c0eeac6ecb49b495269?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 5", className: "aspect-square w-[186px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4af10df1607e29705cb4ba5f9a3549bec02cd485333d5b059944b2a25a3a29e9?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 6", className: "aspect-[1.02] w-[190px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2845c8e5f787c4e378016eb818b557117972dc94d1a0328578982991de31cbd3?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 7", className: "aspect-[1.02] w-[189px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/34bdd370214084d209e319d4cbd788e254d3d8c95573c39c6f7e20a0cdca8c20?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 8", className: "aspect-[1.02] w-[189px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/93d6717f1b39b55649e3ead94479bd248c8367db37301796851a76858d225e8b?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 9", className: "aspect-[1.02] w-[189px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9baa38dfbec441763b2ee5a27dcd96855bcb843307f50860bb650035a7884588?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 10", className: "aspect-[1.02] w-[189px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6e629f66de806df4c36f626c09fba35e4372786b94c52541550e6ccb0a24f8d?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 11", className: "aspect-[1.02] w-[189px]" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1311c7ebb01b55e44c367312865edef8cf1b475324674ff1f88303f9899bcc54?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Instagram image 12", className: "aspect-[1.02] w-[189px]" },
];

const Instagram: React.FC = () => {
  return (
    <main className="flex flex-col pt-3 bg-white">
      <h1 className="self-center text-5xl font-bold text-center leading-[68.16px] text-zinc-700 max-md:text-4xl">Instagram</h1>
      <p className="self-center mt-5 text-xl leading-8 text-center text-zinc-700">@yourinstagram_offical</p>
      <section className="md:flex hidden gap-2 px-5 mt-10 justify-center items-center">
        {images.slice(0, 6).map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} className={image.className} />
        ))}
      </section>
      <section className="md:flex hidden gap-2 px-5 mt-2 justify-center items-center">
        {images.slice(6).map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} className={image.className} />
        ))}
      </section>

      <section className="flex md:hidden w-full gap-2 mt-10 justify-center items-center">
        {images.slice(0, 2).map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} className={image.className} />
        ))}
      </section>
      <section className="flex md:hidden w-full gap-2 mt-2 justify-center items-center">
        {images.slice(10).map((image, index) => (
          <Image key={index} src={image.src} alt={image.alt} className={image.className} />
        ))}
      </section>
    </main>
  );
};

export default Instagram;
