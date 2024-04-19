import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface productsType {
  image: string;
  description: string;
  price: number;
  originalPrice: number;
  title: string;
  id: string;
}

const OurProduct = () => {
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await axios.get("https://6621dbd527fcd16fa6c81620.mockapi.io/kecantikan");
      console.log(response);
      return setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDirectID = (id: string | number) => {
    if (id) {
      navigate(`/detail/${id}`, {
        state: {
          id: `${id}`,
        },
      });
    }
    console.log(id);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div>
      <div className="text-center text-3xl md:text-5xl md:mt-20 font-bold pt-20 md:pb-10 pb-3 leading-[68.16px] text-zinc-700">Our Products</div>
      <div className="flex justify-center items-center">
        <button className="bg-[#00BDD6] text-white md:p-3 p-2 px-5 md:px-10 rounded-md">Best-Sellers</button>
        <button className="bg-white text-[#00BDD6] md:p-3 p-2 px-5 md:px-10">New Product</button>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 justify-center items-center md:gap-7 gap-3 md:py-10 w-full px-5 md:px-20">
        {products.map((item: productsType, index) => (
          <CardProduct key={index} image={item.image} directId={() => handleDirectID(item.id)} description={item.description} price={item.price} originalPrice={item.originalPrice} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
