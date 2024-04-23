import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import CardProduct from "../components/CardProduct";
import { useNavigate } from "react-router-dom";

interface productsType {
  image: string;
  description: string;
  price: number;
  originalPrice: number;
  title: string;
  id: string;
  directId?: () => void;
  bestSeller: boolean;
}

const Shop = () => {
  const [category, setCategory] = useState("Semua");
  const [loading, setLoading] = useState(false);
  const [products, setProduct] = useState([]);
  const navigate = useNavigate();

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://6621dbd527fcd16fa6c81620.mockapi.io/kecantikan");
      return setProduct(response.data);
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
    setCategory("semua");
  }, []);

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <>
      <Layout>
        <div id="daftarProdukSection" className="flex flex-col justify-center items-center gap-3 lg:h-[45vh] h-[30vh]">
          <span className="font-semibold text-[#484848] text-3xl md:text-4xl font-Poppins">Shop</span>
          <p className="md:tracking-wide -tracking-normal md:w-[50vw] w-[100vw] px-8 md:px-8 text-center text-xs md:text-sm font-Poppins  text-[#8A8A8A]">
            Get the best skin health and beauty products only for you <span className="hidden md:block">If you want the best product, choose the best one</span>
          </p>
          <div className="lg:w-[50vw] md:[60vw] w-[90vw] grid grid-cols-4 mt-3 justify-center items-center md:gap-4 gap-2 text-[#828282]">
            <button id="semuaBtn" className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${category === "Semua" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`}>
              Semua
            </button>
            <button id="entryLevelBtn" className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${category === "Entry Level" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`}>
              Entry Level
            </button>
            <button id="midRangeBtn" className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${category === "Mid Range" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`}>
              Mid Range
            </button>
            <button id="highEndBtn" className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${category === "High End" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`}>
              High End
            </button>
          </div>
        </div>

        <div id="produkContent" className={`content pb-10 md:pb-0 flex flex-col  justify-center items-center`}>
          <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-8 gap-2 md:px-5 w-screen px-5 justify-center items-center md:w-[90vw]">
            {!loading ? (
              <div>Loading..</div>
            ) : (
              products.map((item: productsType, index: number) => (
                <div key={index}>
                  <CardProduct bestSeler={false} image={item.image} directId={() => handleDirectID(item.id)} key={item.id} description={item.description} price={item.price} originalPrice={item.originalPrice} title={item.title} />
                </div>
              ))
            )}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Shop;
