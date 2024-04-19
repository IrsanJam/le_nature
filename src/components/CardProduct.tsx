import { FC } from "react";

interface CardProps {
  title?: string;
  description?: string;
  price?: number;
  originalPrice?: number;
  image: string;
  directId: () => void;
}

const CardProduct: FC<CardProps> = ({ title, description, price, originalPrice, image, directId }) => {
  return (
    <div className="flex flex-col grow mx-auto  w-full bg-white rounded-lg max-md:mt-6 shadow-lg">
      <div className="flex overflow-hidden relative flex-col items-end px-16 pt-3 pb-20 w-full text-xs leading-5 text-white whitespace-nowrap aspect-[0.83] max-md:pl-5">
        <img loading="lazy" srcSet={image} className="object-cover absolute inset-0 size-full" />
        <div className="flex absolute flex-col justify-center mb-40 bg-black bg-opacity-0 w-[78px] max-md:mb-1 right-3">
          <div className="justify-center px-2 py-2.5 bg-violet-500 rounded-2xl">Best-seller</div>
        </div>
      </div>
      <div onClick={directId} className="mt-6 hover:scale-105 hover:font-bold hover:px-4 cursor-pointer text-lg font-semibold leading-7 px-2 text-zinc-900">
        {title}
      </div>
      <div className="mt-3.5 text-sm leading-5 text-zinc-700 px-2">{description}</div>
      <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
        <div className="flex gap-3 my-auto pb-2">
          <div className="text-3xl font-bold leading-10 text-zinc-700  pl-2">${price}</div>
          <div className="my-auto text-base leading-7 text-gray-500  pl-2">${originalPrice}</div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c919498182c930f8f49384208cfa729bed96c050767a0679d182649cd67164c2?apiKey=5943fdb1ffaf406abdd952d3f158878b&"
          className="shrink-0 w-11 border-solid aspect-square md:pr-2 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default CardProduct;
