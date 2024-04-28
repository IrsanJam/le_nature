import { useNavigate } from "react-router-dom";

const OurStory = () => {
  const navigate = useNavigate();
  return (
    <div id="story" className="flex flex-col pt-2.5 bg-white my-20 font-Poppins">
      <div className="flex gap-5 justify-center items-center relative">
        <div className="md:text-5xl text-3xl text-center font-bold leading-[68.16px] text-zinc-700 ">Our story</div>
        <span className="cursor-pointer hidden md:block absolute right-0 justify-center self-start px-20 py-3.5 mt-2.5 text-sm leading-5 text-cyan-500 rounded bg-black bg-opacity-0 max-md:pr-5" onClick={() => navigate("/story")}>
          See all
        </span>
      </div>
      <div className="md:mt-14 mt-7 relative">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b685784fd47dec2d6096227709513a6d93abfb68788c473862c52370c49c3228?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b685784fd47dec2d6096227709513a6d93abfb68788c473862c52370c49c3228?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b685784fd47dec2d6096227709513a6d93abfb68788c473862c52370c49c3228?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b685784fd47dec2d6096227709513a6d93abfb68788c473862c52370c49c3228?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b685784fd47dec2d6096227709513a6d93abfb68788c473862c52370c49c3228?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b685784fd47dec2d6096227709513a6d93abfb68788c473862c52370c49c3228?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b685784fd47dec2d6096227709513a6d93abfb68788c473862c52370c49c3228?apiKey=5943fdb1ffaf406abdd952d3f158878b&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b685784fd47dec2d6096227709513a6d93abfb68788c473862c52370c49c3228?apiKey=5943fdb1ffaf406abdd952d3f158878b&"
          className="object-fill relative inset-0 md:h-[60%] px-5 rounded-md md:px-20 overflow-hidden"
        />
        <div className="flex absolute top-1 md:hidden lg:flex right-20 gap-4 justify-center px-5 py-3.5 mt-96 mr-16 rounded bg-zinc-900 max-md:mt-10 max-md:mr-2.5">
          <div className="flex-auto my-auto text-white">Watch video </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44751251b9de45fcd9a78f5c9f1c8e8d65fb61599caf1758188a11fd05ec16ad?apiKey=5943fdb1ffaf406abdd952d3f158878b&" className="shrink-0 w-6 aspect-square" />
        </div>
      </div>
    </div>
  );
};

export default OurStory;
