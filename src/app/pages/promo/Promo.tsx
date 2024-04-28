import { useEffect, useState } from "react";
import Layout from "../../sharedComponents/components/Layout";
import CardPromo from "./presentation/components/CardPromo";
import { promoType } from "./domain/model/model";
import VM from "./presentation/vm/vm";

const Promo = () => {
  const [data, setData] = useState<promoType[]>([]);
  const { getDataPromo } = VM();

  useEffect(() => {
    getDataPromo().then((res: promoType[]) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <Layout>
        <div id="promo" className="flex flex-col pt-2.5 font-Poppins">
          <div className="flex gap-5 justify-center items-center relative pt-28 md:pt-36 lg:pt-14">
            <div className="flex flex-col justify-center  items-center gap-3 ">
              <span className="font-semibold text-[#484848] text-3xl md:text-4xl font-Poppins">Promo</span>
              <p className="md:tracking-wide -tracking-normal lg:w-[50vw] md:w-[70vw] w-[85vw] px-8 md:px-8 text-center text-xs md:text-sm font-Poppins  text-[#8A8A8A]">
                Shop now and enjoy exclusive discounts on our latest collection! <span className="hidden md:block">Shop today and elevate your shopping experience with us</span>
              </p>
              <div className="w-[20%] transition border-[1px] my-3 border-zinc-400"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 md:px-20 px-5">
            {data.map((item, key) => (
              <CardPromo key={key} title={item.title} description={item.description} image={item.image} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Promo;
