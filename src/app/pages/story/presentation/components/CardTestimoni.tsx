import { FC } from "react";
import { testimoniType } from "../../domain/model/model";

const CardTestimoni: FC<testimoniType> = ({ name, description }) => {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="md:text-base text-sm">"{description}"</p>
        <p className="text-sm mt-2">- {name}</p>
      </div>
    </>
  );
};

export default CardTestimoni;
