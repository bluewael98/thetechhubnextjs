import React, { useState, useEffect } from "react";


export async function getServerSideProps () {
  const res = await fetch( "https://api.stockdata.org/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=nPfA2dsE2hQiKIK0btfKvRBVtuN5UPv5QRbzHsZU");
  const data = await res.json ();

  return {
    props: {
      newsData: data,
    }
  }
}

function StockMarketNews({newsData}) {
console.log(newsData)
  return (
    <div className=" flex flex-col justify-center items-center">


      {/* ARTICLE 1 */}

      <a
        href={newsData.data && newsData.data.length > 0 && newsData.data[0].url}
        target="_blank"
      >
        <div className=" bg-white flex justify-center content-center m-5 rounded-2xl w-[800px] border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black hover:scale-105 transition duration-300 cursor-pointer">
          <div className="flex flex-col justify-start mx-5 my-5 w-[400px]">
            {/* ARTICLE 1 TITLE */}
            <div className=" font-Oswald font-bold text-xl justify-center content-center flex">
              {newsData.data && newsData.data.length > 0 && newsData.data[0].title}.
            </div>

            {/* ARTICLE 1 DESCRITION */}
            <div>
              {newsData.data && newsData.data.length > 0 && newsData.data[0].description}
            </div>
          </div>

          {/* ARTICLE 1 IMG */}
          <div className="flex justify-end">
             {newsData.data && newsData.data.length > 0 && (
              <img
                src={newsData.data[0].image_url}
                alt="article img"
                className="w-[300px] object-cover rounded-lg my-5 mx-5"
              />
            )}
            
          </div>
        </div>
      </a>
      <a
        href={newsData.data && newsData.data.length > 1 && newsData.data[1].url}
        target="_blank"
      >
        <div className=" bg-white flex justify-center content-center m-5 rounded-2xl w-[800px] border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black  hover:scale-105 transition duration-300 cursor-pointer">
          <div className="flex flex-col justify-start mx-5 my-5 w-[400px]">
            {/* ARTICLE 1 TITLE */}
            <div className=" font-Oswald font-bold text-xl justify-center content-center flex">
              {newsData.data && newsData.data.length > 1 && newsData.data[1].title}.
            </div>

            {/* ARTICLE 1 DESCRITION */}
            <div>
              {newsData.data && newsData.data.length > 1 && newsData.data[1].description}
            </div>
          </div>

          {/* ARTICLE 1 IMG */}
          <div className="flex justify-end">
            {newsData.data && newsData.data.length > 1 && (
              <img
                src={newsData.data[1].image_url}
                alt="article img"
                className="w-[300px] object-cover rounded-lg my-5 mx-5"
              />
            )}
          </div>
        </div>
      </a>
    </div>
  );
}
export default StockMarketNews;
