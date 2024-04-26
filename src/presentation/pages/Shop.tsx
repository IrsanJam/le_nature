import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import CardProduct from "../components/CardProduct";
import { useNavigate } from "react-router-dom";
import { productsType } from "../../domain/model/product";
import VM from "../vm/vm";

const Shop = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();
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
    getProduct().then((data: any) => {
      setProduct(data);
      setLoading(true);
    });
  }, []);
  return (
    <>
      <Layout>
        <div id="daftarProdukSection" className="flex flex-col justify-center md:pt-16 pt-32 items-center gap-3 lg:h-[35vh] h-[30vh]">
          <span className="font-semibold text-[#484848] text-3xl md:text-4xl font-Poppins">Shop</span>
          <p className="md:tracking-wide -tracking-normal lg:w-[50vw] md:w-[70vw] w-[85vw] px-8 md:px-8 text-center text-xs md:text-sm font-Poppins  text-[#8A8A8A]">
            Get the best skin health and beauty products only for you <span className="hidden md:block">If you want the best product, choose the best one</span>
          </p>
          <div className="w-[20%] transition border-[1px] my-3 border-zinc-400"></div>
        </div>

        {!loading ? (
          <div className="flex justify-center pt-40 items-start h-screen">
            <img width="48" height="48" src="https://img.icons8.com/color-glass/48/iphone-spinner.png" className="animate-spin" alt="iphone-spinner" />
          </div>
        ) : (
          <div id="produkContent" className={`content pb-10 md:pb-0 flex flex-col  justify-center items-center`}>
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 md:gap-8 gap-[1px] md:px-5 w-screen px-5 justify-center items-center md:w-[90vw]">
              {products.map((item: productsType, index: number) => (
                <div key={index}>
                  <CardProduct bestSeler={false} image={item.image} directId={() => handleDirectID(item.id)} key={item.id} description={item.description} price={item.price} originalPrice={item.originalPrice} title={item.title} />
                </div>
              ))}
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Shop;
