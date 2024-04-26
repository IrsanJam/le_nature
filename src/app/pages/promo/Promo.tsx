import Layout from "../../sharedComponents/components/Layout";
import CardPromo from "./presentation/components/CardPromo";

const Promo = () => {
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
          <CardPromo />
        </div>
      </Layout>
    </>
  );
};

export default Promo;
