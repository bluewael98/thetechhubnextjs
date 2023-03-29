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

  return (
    <div className=" flex flex-col justify-center items-center">
      <div className="bg-neoyellow py-4 mb-10 px-7 rounded-3xl border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black shadow-4xl">
          <h1 className="text-6xl font-semibold">MARKET NEWS</h1>
        </div>


      {/* ARTICLE */}
{newsData.data.map((article) => (
      <a
        href={article.url}
        target="_blank"
        key={article.id}
      >
        <div className=" bg-white flex justify-center content-center m-5 rounded-2xl w-[800px] border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black hover:scale-105 transition duration-300 cursor-pointer">
          <div className="flex flex-col justify-start mx-5 my-5 w-[400px]">
            {/* ARTICLE 1 TITLE */}
            <div className=" font-Oswald font-bold text-xl justify-center content-center flex">
              {article.title}
            </div>

            {/* ARTICLE 1 DESCRITION */}
            <div>
              {article.description}
            </div>
          </div>

          {/* ARTICLE 1 IMG */}
          <div className="flex justify-end">
             {article.image_url && (
              <img
                src={article.image_url}
                alt="article img"
                className="w-[300px] object-cover rounded-lg my-5 mx-5"
              />
            )}
          </div>
        </div>
      </a>
             ))}
    </div>
  );
}
export default StockMarketNews;
