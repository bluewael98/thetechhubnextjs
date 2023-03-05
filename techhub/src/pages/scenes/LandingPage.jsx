import React from "react";
import landinglogo from "../../public/landinglogo.png";

import Image from "next/image";

const LandingPage = () => {
  return (
    <section className="flex justify-center items-center h-[800px]">
      <div className=" bg-neogreen border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black shadow-4xl p-10 rounded-full z-0">
        <Image src={landinglogo.src} alt="THE TECH HUB" />
      </div>
    </section>
  );
};

export default LandingPage;
