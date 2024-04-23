import React from "react";
import Layout from "../components/Layout";
import image from "../../public/image/Image 1.png";

const Story: React.FC = () => {
  return (
    <>
      <Layout>
        <div
          className="bg-cover blur-lg text-black bg-center flex items-center bg-black  h-[60vh] md:h-[80vh] drop-shadow-lg"
          style={{
            backgroundImage: `url(${image})`,
            filter: "blur(0.1px)",
          }}
        >
          <div className="container md:pt-0 md:px-20 text-zinc-400 px-5">
            <span className="font-bold text-[#484848] text-3xl md:text-4xl font-Poppins text-center">Our Story</span>
            <p className=" md:pr-20 mt-5 font-light w-[100%]  md:w-[55%]">
              Prioritizing customer satisfaction, LeNature provided fast shipping, hassle-free returns, and responsive customer support, earning a loyal customer base and becoming a trusted brand in the market.
            </p>
            <p className=" md:pr-20 mt-5 font-light w-[95%] hidden md:block md:w-[55%]">
              Despite facing challenges from competitors and evolving market dynamics, the company remained resilient, adapting its strategies and investing in technology to stay ahead.
            </p>
          </div>
        </div>
        <section className="bg-gray-100 py-12 text-zinc-600 font-Poppins">
          <div className="container mx-auto px-4 md:px-20">
            <h2 className="text-xl font-bold mb-4">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p>"I've been using this beauty product for a month now, and I can't believe the difference it has made to my skin"</p>
                <p className="text-sm mt-2">- Sandra</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p>"I was skeptical at first, but this web many beauty products, I'm amazed at the resources"</p>
                <p className="text-sm mt-2">- Cindy</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p>"This web help to find beauty product, significant improvement"</p>
                <p className="text-sm mt-2">- Lisa</p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Story;
