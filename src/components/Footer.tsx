import * as React from "react";

interface LinkItemProps {
  text: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ text }) => {
  return <div className="mt-6 first:mt-8">{text}</div>;
};

interface ContactItemProps {
  label: string;
  value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ label, value }) => {
  return (
    <>
      <div className="mt-7 first:mt-8">{label}</div>
      <div className="mt-7">{value}</div>
    </>
  );
};

interface SocialIconProps {
  src: string;
  alt: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt }) => {
  return <img loading="lazy" src={src} alt={alt} className="shrink-0 w-6 aspect-square" />;
};

const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9dd5e1cf1d50202f7054388a910928d322e43c77fc474b39c9b39889f7a89e69?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Social media icon 1" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd44dab7ad1068040a0084fd93020c9b0c99045f1a1682220711c5cb981135c3?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Social media icon 2" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0bd69a4c410d3bd9112cdd35a4be58bf4058db2696337a0b9808879e7adb807b?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Social media icon 3" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f43458f9db555c74504cbe9366828c7d0ef66cd4ca9f095152dbd107878b3282?apiKey=5943fdb1ffaf406abdd952d3f158878b&", alt: "Social media icon 4" },
];

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center px-16 py-20 bg-neutral-800 max-md:px-5 mt-14">
      <div className="flex flex-col mt-5 w-full max-w-[1177px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col text-sm leading-5 text-neutral-400">
            <h3 className="text-xl font-bold leading-8">About</h3>
            <nav>
              <LinkItem text="Home" />
              <LinkItem text="Shop" />
              <LinkItem text="Our story" />
              <LinkItem text="Blogs" />
            </nav>
          </div>
          <div className="flex gap-5 justify-between text-sm leading-5 text-neutral-400">
            <div className="flex flex-col self-start">
              <h3 className="text-xl font-bold leading-8">Help</h3>
              <nav>
                <LinkItem text="Shipping & Returns" />
                <LinkItem text="Track Order" />
                <LinkItem text="FAQs" />
              </nav>
            </div>
            <div className="flex flex-col font-bold">
              <h3 className="text-xl leading-8">Contact</h3>
              <ContactItem label="Phone:" value="(+1) 123 456 7893" />
              <ContactItem label="Email:" value="name@email.com" />
            </div>
          </div>
          <div className="flex flex-col self-stretch max-md:max-w-full">
            <h3 className="text-2xl font-bold leading-9 text-neutral-400 max-md:max-w-full">Receive new promotions</h3>
            <p className="mt-5 text-base leading-7 text-neutral-400 max-md:max-w-full">Duis ea tempor commodo amet reprehende</p>
            <form className="flex gap-3 mt-3.5 text-lg leading-7 max-md:flex-wrap">
              <label htmlFor="email" className="sr-only">
                Input your email
              </label>
              <div className="flex flex-auto gap-2 px-5 py-3 rounded-lg border border-solid bg-black bg-opacity-0 border-zinc-400 text-neutral-300 max-md:px-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/093aa3f74fb62adf3b8be4612f3911163b64820831aea1ecc04751eea2bb79a6?apiKey=5943fdb1ffaf406abdd952d3f158878b&"
                  alt=""
                  className="shrink-0 w-6 aspect-square"
                />
                <input type="email" id="email" placeholder="Input your email" className="flex-auto bg-transparent outline-none" />
              </div>
              <button type="submit" className="justify-center px-5 py-5 text-white whitespace-nowrap bg-cyan-500 rounded-md">
                Subscribe
              </button>
            </form>
            <div className="flex gap-2 self-start mt-8">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} src={icon.src} alt={icon.alt} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-5 w-full text-sm leading-5 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 justify-center px-3.5 py-3 text-white whitespace-nowrap rounded border border-solid bg-black bg-opacity-0 border-zinc-200">
            <div>English</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/79081def4fa0a46b376586947e2eb39f5085341e34c8c1ba6d423ebcbad2858b?apiKey=5943fdb1ffaf406abdd952d3f158878b&"
              alt="Language selection arrow"
              className="shrink-0 w-4 aspect-square"
            />
          </div>
          <div className="flex gap-2.5 self-start mt-5 text-neutral-400">
            <div className="grow">© 2022 Brand, Inc.</div>
            <div className="my-auto text-xs leading-5">•</div>
            <div>Privacy</div>
            <div className="my-auto text-xs leading-5">•</div>
            <div>Terms</div>
            <div className="my-auto text-xs leading-5">•</div>
            <div>Sitemap</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
