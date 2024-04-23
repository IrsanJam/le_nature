import { useEffect, useState } from "react";
import CardProduct from "./CardProduct";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const [loading, setLoading] = useState(false);

  const loadProducts = async () => {
    try {
      const response = await axios.get("https://6621dbd527fcd16fa6c81620.mockapi.io/kecantikan");
      setProduct(response.data);
      setLoading(true);
    } catch (error) {
      setLoading(true);
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
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div id="product" className="font-Poppins text-center text-3xl md:text-5xl md:mt-20 font-bold pt-20 md:pb-10 pb-3 leading-[68.16px] text-zinc-700">
        Our Products
      </div>
      <div className="flex justify-center items-center font-semibold gap-3">
        <button className="bg-cyan-400 border-[1px] border-cyan-500 text-white md:p-3 p-2 px-5 md:px-10 rounded-md">Best-Sellers</button>
        <button onClick={() => navigate("/shop")} className="bg-white text-[#00BDD6] md:p-3 p-2 px-5 border-[1px] border-cyan-400 rounded-md md:px-10">
          New Product
        </button>
      </div>
      {!loading ? (
        <div className="text-center my-20 w-full">Loading..</div>
      ) : (
        <Carousel responsive={responsive} itemClass="carousel-item-padding-80-px" infinite>
          {products.map((item: productsType, index: number) => (
            <div key={index}>
              <CardProduct bestSeler image={item.image} key={item.id} directId={() => handleDirectID(item.id)} description={item.description} price={item.price} originalPrice={item.originalPrice} title={item.title} />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default OurProduct;
