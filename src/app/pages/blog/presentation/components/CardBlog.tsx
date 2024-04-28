import { FC } from "react";
import { blogType } from "../../domain/model/model";

const CardBlog: FC<blogType> = ({ description, image }) => {
  return (
    <>
      <div className="border p-4 rounded">
        <img loading="lazy" srcSet={image} className="w-full aspect-[1.64]" />
        <p className="md:text-md text-sm mt-5">{description}</p>
      </div>
    </>
  );
};

export default CardBlog;
