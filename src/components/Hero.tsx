import { useNavigate } from "react-router-dom";
import hero from "/image/Image 1.png";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full relative">
      <div className="w-full h-[70vh]">
        <img src={hero} alt="hero" className="relative  object-cover md:object-fill  h-[90vh] md:blur-0 blur-[1px]  md:h-[70vh] lg:h-[80vh] w-full" />
      </div>
      <div className="absolute md:top-[35%] top-[35%] lg:w-[60%] md:w-[40%] w-[80%] flex flex-col pl-10 md:pl-20 gap-4">
        <h1 className="font-bold lg:text-6xl  text-5xl font-Poppins text-zinc-700">Gift for your skin</h1>
        <span className="lg:w-[60%] w-full md:text-base text-sm tracking-wide font-thin text-neutral-500">Discover your skin's ultimate glow with our luxurious gift embrace unmatched hydration and transformative</span>
        <button onClick={() => navigate("/shop")} className="text-white bg-[#00BDD6] w-[50%] lg:w-[20%] p-3 rounded-md hover:opacity-60 font-semibold font-Poppins">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
