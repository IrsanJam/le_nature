import React from "react";
import Layout from "../../sharedComponents/components/Layout";

const Story: React.FC = () => {
  return (
    <>
      <Layout>
        <div
          className="bg-cover  text-black bg-center flex items-center bg-black  h-[70vh] md:h-[80vh] drop-shadow-lg"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1614859475299-814a09cd2e79?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundPositionX: "contain",
          }}
        >
          <div className="container md:pt-0 md:px-20 text-zinc-500 drop-shadow-sm p-5 mx-5 md:bg-transparent bg-white rounded-md bg-opacity-90">
            <span className="font-bold  text-3xl md:text-4xl font-Poppins text-center">Our Story</span>
            <div className="md:w-[20%] w-[60%] transition border-[1px] my-3 border-zinc-500 mt-3"></div>
            <p className=" md:pr-20 md:mt-5 mt-2 font-light w-[100%]  md:w-[50%] bg-transparent ">
              Prioritizing customer satisfaction, LeNature provided fast shipping, hassle-free returns, and responsive customer support, earning a loyal customer base and becoming a trusted brand in the market.
            </p>
            <p className=" md:pr-20 mt-5 font-light w-[95%] hidden md:block md:w-[45%]">
              Despite facing challenges from competitors and evolving market dynamics, the company remained resilient, adapting its strategies and investing in technology to stay ahead.
            </p>
          </div>
        </div>
        <section className="bg-gray-100 py-12 text-zinc-600 font-Poppins">
          <div className="container mx-auto px-4 md:px-20">
            <h2 className="text-xl font-bold mb-4">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="md:text-base text-sm">"I've been using this beauty product for a month now, and I can't believe the difference it has made to my skin"</p>
                <p className="text-sm mt-2">- Sandra</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="md:text-base text-sm">"I was skeptical at first, but this web many beauty products, I'm amazed at the resources"</p>
                <p className="text-sm mt-2">- Cindy</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="md:text-base text-sm">"This web help to find beauty product, significant improvement"</p>
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
