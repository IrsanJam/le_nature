import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../../sharedComponents/components/Modal";
import Layout from "../../sharedComponents/components/Layout";
import { detailProduct } from "./domain/model/model";
import VM from "./presentation/vm/vm";
import CardSent from "./presentation/components/CardSent";

const Detail = () => {
  const location = useLocation();
  const [data, setData] = useState<detailProduct>();
  const [loading, setLoading] = useState(false);
  const [popUp, setPopUp] = useState(false);
  const [image, setImage] = useState("");
  const { getDetailProduct } = VM();

  const changeImage = (data: string | any) => {
    setImage(data);
    setPopUp(!popUp);
  };

  useEffect(() => {
    const idData = location.state.id;
    getDetailProduct(idData).then((data: detailProduct) => {
      setData(data);
      setLoading(true);
    });
  }, []);

  return (
    <>
      <Layout>
        {loading ? (
          <>
            <div className="lg:px-20 px-10 md:pt-5 pt-32 mb-20 font-Poppins">
              <div className="flex-col md:grid md:grid-cols-2  gap-2 justify-center items-center mt-5 md:mt-10">
                <div className="h-full w-full">
                  <img loading="lazy" srcSet={data?.image} className="w-full md:h-[80vh] h-[40vh] mt-5 cursor-pointer" onClick={() => changeImage(data?.image)} />
                </div>
                <div className="grid  md:grid-cols-2 grid-cols-4 gap-3 justify-center items-center mt-5 md:h-[80vh] h-[10vh] w-full  md:w-[40vw]">
                  <img loading="lazy" srcSet={data?.dataImage.image1} className="w-full md:rounded-none rounded-md h-full cursor-pointer" onClick={() => changeImage(data?.dataImage.image1)} />
                  <img loading="lazy" srcSet={data?.dataImage.image2} className="w-full md:rounded-none rounded-md h-full cursor-pointer" onClick={() => changeImage(data?.dataImage.image2)} />
                  <img loading="lazy" srcSet={data?.dataImage.image3} className="w-full md:rounded-none rounded-md h-full cursor-pointer" onClick={() => changeImage(data?.dataImage.image3)} />
                  <img loading="lazy" srcSet={data?.dataImage.image4} className="w-full md:rounded-none rounded-md h-full cursor-pointer" onClick={() => changeImage(data?.dataImage.image4)} />
                </div>
              </div>
            </div>
            <div className="md:px-20 px-5 md:flex flex-col font-Poppins">
              <span className="font-bold text-lg md:text-2xl">Product description</span>
              <div className="flex-col md:flex-row my-3 gap-8 justify-center items-start">
                <div className="flex-col md:flex-row w-full">
                  <p className=" font-light  md:tracking-wide -tracking-wide text-justify md:leading-7 leading-5 text-sm w-[95%]">
                    <span className="font-semibold">{data?.title}</span> was Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis. Nibh dictumst vulputate odio pellentesque sit quis ac, sit ipsum.
                    Sit rhoncus velit in sed massa arcu sit eu. Vitae et vitae eget lorem non dui. Sollicitudin ut mi adipiscing duis. Convallis in semper laoreet nibh leo. Vivamus malesuada ipsum pulvinar non rutrum risus dui, risus. Purus
                    massa velit iaculis tincidunt tortor, risus, scelerisque risus. In at lorem pellentesque orci aenean dictum dignissim in. Aenean pulvinar diam interdum ullamcorper. Vel urna, tortor, massa metus purus metus. Maecenas
                    mollis in velit auctor cursus scelerisque eget.
                  </p>

                  <CardSent />
                </div>

                <div className="flex flex-col px-5 lg:mt-10 py-6 h-full text-base leading-7 bg-white rounded shadow-lg w-full lg:w-[40%]">
                  <div className="flex gap-5 justify-between items-center mt-8 text-sm leading-5 whitespace-nowrap">
                    <div className="text-zinc-400">Total</div>
                    <div className="self-end text-3xl font-extrabold leading-10 text-right text-cyan-500">${data?.price}</div>
                  </div>
                  <div className="justify-center text-center items-center px-16 py-4 mt-10 text-white bg-cyan-500 rounded border-2 border-slate-400 max-md:px-5 max-md:mt-10">Buy now</div>
                  <div className="flex gap-1.5 justify-center px-20 py-3 mt-4 text-cyan-500 bg-white rounded border border-cyan-500 border-solid max-md:px-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b23037cf298db3b0326d2cca5fc6fa368702dbb2f9423885afd14773c750f245?apiKey=5943fdb1ffaf406abdd952d3f158878b&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="my-auto">Add to cart</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <img width="48" height="48" src="https://img.icons8.com/color-glass/48/iphone-spinner.png" className="animate-spin" alt="iphone-spinner" />
          </div>
        )}

        {popUp && <Modal imageUrl={image} setPopUp={setPopUp} />}
      </Layout>
    </>
  );
};

export default Detail;
