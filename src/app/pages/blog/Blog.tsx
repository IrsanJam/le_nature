import Layout from "../../sharedComponents/components/Layout";
import CardBlog from "./presentation/components/CardBlog";

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 font-Poppins lg:pt-0  pt-28 md:px-20 lg:my-20">
        <div className="flex flex-col justify-center items-center gap-3 mb-10">
          <span className="font-semibold text-[#484848] text-3xl md:text-4xl font-Poppins">Blog</span>
          <p className="md:tracking-wide -tracking-normal lg:w-[50vw] md:w-[90vw] w-[100vw] px-8 md:px-8 text-center text-xs md:text-sm font-Poppins  text-[#8A8A8A]">
            Discover the ultimate skincare routine tailored to your skin type and concerns <span className="hidden md:block">and recommended products to achieve a healthy complexion</span>
          </p>
          <div className="w-[20%] transition border-[1px] my-3 border-zinc-400"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardBlog />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
