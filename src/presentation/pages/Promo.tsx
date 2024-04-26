import Layout from "../components/Layout";

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
          <div className="md:mt-14 mt-2 w-full max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center py-px w-full bg-white rounded-lg text-zinc-700 max-md:mt-6 max-md:max-w-full">
                  <div className="flex overflow-hidden relative flex-col items-start py-20 md:pr-20 pl-9 mx-5 md:mx-0 md:ml-20 min-h-[336px] max-md:px-5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/282de6895ee66cbffffe2c1d40fd1256a64ae4d7211095e415cf209eb88c676c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/282de6895ee66cbffffe2c1d40fd1256a64ae4d7211095e415cf209eb88c676c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/282de6895ee66cbffffe2c1d40fd1256a64ae4d7211095e415cf209eb88c676c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/282de6895ee66cbffffe2c1d40fd1256a64ae4d7211095e415cf209eb88c676c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/282de6895ee66cbffffe2c1d40fd1256a64ae4d7211095e415cf209eb88c676c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/282de6895ee66cbffffe2c1d40fd1256a64ae4d7211095e415cf209eb88c676c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/282de6895ee66cbffffe2c1d40fd1256a64ae4d7211095e415cf209eb88c676c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/282de6895ee66cbffffe2c1d40fd1256a64ae4d7211095e415cf209eb88c676c?apiKey=5943fdb1ffaf406abdd952d3f158878b&"
                      className="object-cover absolute inset-0 size-full rounded-md"
                    />
                    <div className="relative text-2xl font-extrabold leading-10 w-[50%] md:w-[80%] lg:w-[50%]">Relaxing & Pampering</div>
                    <div className="relative mt-6 text-md leading-8 hidden md:block w-[60%] md:w-[80%] lg:w-[60%] md:font-thin drop-shadow-lg">Experience the ultimate relaxation and pampering with our </div>
                    <button className="hover:opacity-65 relative justify-center px-10 py-3 mt-9 text-sm leading-5 text-white whitespace-nowrap bg-cyan-500 rounded max-md:px-5 font-semibold tracking-wide">Explore</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center px-1.5 w-full bg-white rounded-lg text-zinc-700 max-md:mt-6 max-md:max-w-full">
                  <div className="flex overflow-hidden relative flex-col items-start py-20 pr-20 mx-5 md:mx-0 pl-8 md:mr-20 min-h-[338px] max-md:px-5 max-md:max-w-full">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4fbdd726383a6bf038e2302ae9ea05f7b2857cc9581f766db9615b7b8774274c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4fbdd726383a6bf038e2302ae9ea05f7b2857cc9581f766db9615b7b8774274c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4fbdd726383a6bf038e2302ae9ea05f7b2857cc9581f766db9615b7b8774274c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4fbdd726383a6bf038e2302ae9ea05f7b2857cc9581f766db9615b7b8774274c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4fbdd726383a6bf038e2302ae9ea05f7b2857cc9581f766db9615b7b8774274c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4fbdd726383a6bf038e2302ae9ea05f7b2857cc9581f766db9615b7b8774274c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4fbdd726383a6bf038e2302ae9ea05f7b2857cc9581f766db9615b7b8774274c?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4fbdd726383a6bf038e2302ae9ea05f7b2857cc9581f766db9615b7b8774274c?apiKey=5943fdb1ffaf406abdd952d3f158878b&"
                      className="object-cover absolute inset-0 size-full rounded-md"
                    />
                    <div className="relative w-[50%] text-2xl font-extrabold leading-10 md:w-[280px]">
                      Smooth &<br />
                      Bright Skin
                    </div>
                    <div className="font-thin relative mt-6 text-md leading-8 hidden md:block w-[60%] drop-shadow-md">Discover the secret to smooth & bright skin with our products</div>
                    <button className="hover:opacity-65 relative justify-center px-10 py-3 mt-9 text-sm leading-5 text-white whitespace-nowrap bg-cyan-500 rounded max-md:px-5 font-semibold tracking-wide">Explore</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Promo;
