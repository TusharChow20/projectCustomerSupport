import React from "react";
import image from "../assetsImg/vector1.png";
const BannerSection = ({ storeCustomer, resolved }) => {
  return (
    <div className="mt-5 md:mt-20 md:px-15 md:flex justify-center items-center  gap-10 w-full text-center text-white text-2xl md:text-4xl">
      <div className="relative md:w-1/2 bg-gradient-to-br from-[#4c12d3] to-[#b18ae9] py-15 md:py-[150px] rounded-xl  ">
        <div className="absolute inset-0">
          <div
            className="absolute left-0 w-1/2 h-full bg-[length:100%_100%] bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div
            className="absolute right-0 w-1/2 scale-x-[-1] h-full bg-[length:100%_100%] bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <h1 className="relative z-10">In-Progress</h1>
        <p className="relative z-10 mt-3 text-6xl font-semibold">
          {storeCustomer.length}
        </p>
      </div>
      <div className="relative md:w-1/2  bg-gradient-to-r from-[#54CF68] to-[#00827A] py-15 md:py-[150px] rounded-xl">
        <div className="absolute inset-0">
          <div
            className="absolute left-0 w-1/2 h-full bg-[length:100%_100%] bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div
            className="absolute right-0 w-1/2 h-full scale-x-[-1] bg-[length:100%_100%] bg-no-repeat"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <h1 className="relative z-10">Resolved</h1>
        <p className="relative z-10 mt-3 text-6xl font-semibold">
          {resolved.length}
        </p>
      </div>
    </div>
  );
};

export default BannerSection;
