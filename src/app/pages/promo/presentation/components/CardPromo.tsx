import { promoType } from "../../domain/model/model";
import { FC } from "react";

const CardPromo: FC<promoType> = ({ image, title, description }) => {
  return (
    <>
      <div className="md:mt-14 mt-2 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-full">
            <div className="flex flex-col grow justify-center py-px w-full bg-white rounded-lg text-zinc-700 max-md:mt-6 max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col items-start py-20 md:pr-20 pl-9 mx-5 md:mx-0 min-h-[336px] max-md:px-5 max-md:max-w-full">
                <img loading="lazy" srcSet={image} className="object-cover absolute inset-0 size-full rounded-md" />
                <div className="relative text-2xl font-extrabold leading-10 w-[60%] md:w-[80%] lg:w-[50%]">{title}</div>
                <div className="relative mt-6 text-md leading-8 hidden md:block w-[60%] md:w-[80%] lg:w-[60%] md:font-thin drop-shadow-lg">{description}</div>
                <button className="hover:opacity-65 relative justify-center px-10 py-3 mt-9 text-sm leading-5 text-white whitespace-nowrap bg-cyan-500 rounded max-md:px-5 font-semibold tracking-wide">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPromo;
