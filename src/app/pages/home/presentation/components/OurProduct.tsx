import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardProduct from "../../../../sharedComponents/components/CardProduct";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VM from "../vm/vm";
import { productsType } from "../../domain/model/model";

const OurProduct = () => {
  const navigate = useNavigate();
  const [products, setProduct] = useState<productsType[]>([]);
  const [loading, setLoading] = useState(false);
  const { getProduct } = VM();

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
    getProduct().then((data: productsType[]) => {
      setProduct(data);
      setLoading(true);
    });
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
      <div id="product" className="font-Poppins text-center text-3xl md:text-5xl md:mt-20 font-bold lg:pt-24 md:pt-0 pt-56 md:pb-10 pb-3 leading-[68.16px] text-zinc-700">
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
