import hero from "/image/Image 1.png";

const Hero = () => {
  return (
    <div className="w-full relative">
      <div className="w-full h-[70vh]">
        <img src={hero} alt="hero" className="relative  object-cover md:object-fill  h-[90vh] md:blur-0 blur-[1px]  md:h-[80vh] w-full" />
      </div>
      <div className="absolute md:top-[35%] top-[35%] md:w-[60%] w-[80%] flex flex-col pl-10 md:pl-20 gap-4">
        <h1 className="font-bold md:text-6xl  text-5xl font-Poppins text-zinc-700">Gift for your skin</h1>
        <span className="md:w-[60%] w-full md:text-base text-sm tracking-wide font-thin text-neutral-500">Discover your skin's ultimate glow with our luxurious gift embrace unmatched hydration and transformative</span>
        <button className="text-white bg-[#00BDD6] w-[50%] md:w-[20%] p-3 rounded-md hover:opacity-60 font-semibold font-Poppins">Shop Now</button>
      </div>
    </div>
  );
};

export default Hero;
