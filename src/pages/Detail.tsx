import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";

interface detailProduct {
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  dataImage: {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
  };
}

const Detail = () => {
  const location = useLocation();
  const [data, setData] = useState<detailProduct>();

  const getProductId = async (id: string) => {
    try {
      const response = await axios.get(`https://6621dbd527fcd16fa6c81620.mockapi.io/kecantikan/${id}`);
      return setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const idData = location.state.id;
    getProductId(idData);
  }, []);
  return (
    <>
      <Navbar />
      <div className="px-20 my-20">
        <span className="text-3xl font-bold ">{data?.title}</span>
        <div className="flex gap-2 justify-center items-center mt-10">
          <div className="h-full w-full">
            <img loading="lazy" srcSet={data?.image} className="w-full max-md:max-w-full h-[80vh] " />
          </div>
          <div className="grid grid-cols-2 gap-3 justify-center items-center h-[80vh] w-[70vw]">
            <img loading="lazy" srcSet={data?.dataImage.image1} className="w-full h-full" />
            <img loading="lazy" srcSet={data?.dataImage.image2} className="w-full h-full" />
            <img loading="lazy" srcSet={data?.dataImage.image3} className="w-full h-full" />
            <img loading="lazy" srcSet={data?.dataImage.image4} className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="px-20 flex flex-col">
        <span className="font-bold text-2xl">Product description</span>
        <div className="flex my-3 gap-8 justify-center items-start">
          <div className="flex-col">
            <p className=" font-thin text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem lorem aliquam sed lacinia quis. Nibh dictumst vulputate odio pellentesque sit quis ac, sit ipsum. Sit rhoncus velit in sed massa arcu sit eu. Vitae et vitae eget
              lorem non dui. Sollicitudin ut mi adipiscing duis. Convallis in semper laoreet nibh leo. Vivamus malesuada ipsum pulvinar non rutrum risus dui, risus. Purus massa velit iaculis tincidunt tortor, risus, scelerisque risus. In at
              lorem pellentesque orci aenean dictum dignissim in. Aenean pulvinar diam interdum ullamcorper. Vel urna, tortor, massa metus purus metus. Maecenas mollis in velit auctor cursus scelerisque eget.
            </p>

            <div className="flex gap-4">
              <div className="flex flex-col mt-10">
                <div className="flex gap-2">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/129b80d5d492cff334f95e3262113fdb14be65fb43af3ffa1055aefe08052b26?apiKey=5943fdb1ffaf406abdd952d3f158878b&" className="shrink-0 w-6 aspect-square" />
                  <div className="flex-auto my-auto">Free delivery</div>
                </div>
                <div className="flex gap-2 mt-4">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b64fe9af0753aab567884536b381c91d8176795418aaadeebe6ab32544f6f6f?apiKey=5943fdb1ffaf406abdd952d3f158878b&" className="shrink-0 w-6 aspect-square" />
                  <div className="flex-auto my-auto">Made in USA</div>
                </div>
                <div className="flex gap-2 mt-4">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a57144d547373ef04c284ffced73e742a5df47f45314219384c878334213bb28?apiKey=5943fdb1ffaf406abdd952d3f158878b&" className="shrink-0 w-6 aspect-square" />
                  <div className="flex-auto my-auto">100% authentic</div>
                </div>
              </div>

              <div className="flex flex-col mt-10">
                <div className="flex gap-2">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d8345e235f957100f6e92a759393beaddeed32fe0eca08da78c1a9aff19b02d?apiKey=5943fdb1ffaf406abdd952d3f158878b&" className="shrink-0 w-6 aspect-square" />
                  <div className="flex-auto my-auto">7 days return</div>
                </div>
                <div className="flex gap-2 mt-4">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7f012672b8af626573771ba8ed56e80823375702a4b18b3bf293c4e39bb325f?apiKey=5943fdb1ffaf406abdd952d3f158878b&" className="shrink-0 w-6 aspect-square" />
                  <div className="flex-auto my-auto">2 years guarantee</div>
                </div>
                <div className="flex gap-2 mt-4">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/93b76539aeb1494ce1e6e6b9bcd5881cd43afc733dfd96906831b2ac3c09b452?apiKey=5943fdb1ffaf406abdd952d3f158878b&" className="shrink-0 w-6 aspect-square" />
                  <div className="flex-auto my-auto">24/7 customer support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col px-5 py-6 h-full text-base leading-7 bg-white rounded shadow-lg w-[1200px]">
            <div className="self-end text-3xl font-extrabold leading-10 text-right text-cyan-500">${data?.price}</div>
            <div className="flex gap-5 justify-between mt-8 text-sm leading-5 whitespace-nowrap">
              <div className="text-zinc-400">Total</div>
              <div className="text-right text-zinc-900">${data?.originalPrice}</div>
            </div>
            <div className="justify-center text-center items-center px-16 py-4 mt-10 text-white bg-cyan-500 rounded border-2 border-slate-400 max-md:px-5 max-md:mt-10">Buy now</div>
            <div className="flex gap-1.5 justify-center px-20 py-3 mt-4 text-cyan-500 bg-white rounded border border-cyan-500 border-solid max-md:px-5">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b23037cf298db3b0326d2cca5fc6fa368702dbb2f9423885afd14773c750f245?apiKey=5943fdb1ffaf406abdd952d3f158878b&" className="shrink-0 w-5 aspect-square" />
              <div className="my-auto">Add to cart</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
