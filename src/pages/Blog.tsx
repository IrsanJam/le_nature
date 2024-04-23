import Layout from "../components/Layout";

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4 font-Poppins md:pt-0 pt-28 md:px-20 md:my-20">
        <div className="flex flex-col justify-center items-center gap-3 mb-10">
          <span className="font-semibold text-[#484848] text-3xl md:text-4xl font-Poppins">Blog</span>
          <p className="md:tracking-wide -tracking-normal md:w-[50vw] w-[100vw] px-8 md:px-8 text-center text-xs md:text-sm font-Poppins  text-[#8A8A8A]">
            Discover the ultimate skincare routine tailored to your skin type and concerns <span className="hidden md:block">and recommended products to achieve a healthy complexion</span>
          </p>
          <div className="w-[20%] transition border-[1px] my-3 border-zinc-400"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/355bbf669f90ace54b6de0e34bd6405a09cce8c00ada1edbd81ed408fff8f9ab?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/355bbf669f90ace54b6de0e34bd6405a09cce8c00ada1edbd81ed408fff8f9ab?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/355bbf669f90ace54b6de0e34bd6405a09cce8c00ada1edbd81ed408fff8f9ab?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/355bbf669f90ace54b6de0e34bd6405a09cce8c00ada1edbd81ed408fff8f9ab?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/355bbf669f90ace54b6de0e34bd6405a09cce8c00ada1edbd81ed408fff8f9ab?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/355bbf669f90ace54b6de0e34bd6405a09cce8c00ada1edbd81ed408fff8f9ab?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/355bbf669f90ace54b6de0e34bd6405a09cce8c00ada1edbd81ed408fff8f9ab?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/355bbf669f90ace54b6de0e34bd6405a09cce8c00ada1edbd81ed408fff8f9ab?apiKey=5943fdb1ffaf406abdd952d3f158878b&"
              className="w-full aspect-[1.64]"
            />
            <p className="md:text-md text-sm mt-5">Nora Premium CBD Oil 1000mg offers potent relief, quality ingredient</p>
          </div>
          <div className="border p-4 rounded">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66d50ce885818cd3227afed34e750b9fcabc6bb558fbade9665c6f9b015ae6b5?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d50ce885818cd3227afed34e750b9fcabc6bb558fbade9665c6f9b015ae6b5?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d50ce885818cd3227afed34e750b9fcabc6bb558fbade9665c6f9b015ae6b5?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d50ce885818cd3227afed34e750b9fcabc6bb558fbade9665c6f9b015ae6b5?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d50ce885818cd3227afed34e750b9fcabc6bb558fbade9665c6f9b015ae6b5?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d50ce885818cd3227afed34e750b9fcabc6bb558fbade9665c6f9b015ae6b5?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d50ce885818cd3227afed34e750b9fcabc6bb558fbade9665c6f9b015ae6b5?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d50ce885818cd3227afed34e750b9fcabc6bb558fbade9665c6f9b015ae6b5?apiKey=5943fdb1ffaf406abdd952d3f158878b&"
              className="w-full aspect-[1.64]"
            />
            <p className="md:text-md text-sm mt-5">Promoting skin health and relaxation for enhanced well being</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
