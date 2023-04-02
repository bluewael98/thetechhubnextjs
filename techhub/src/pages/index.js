import Head from 'next/head'
import LandingPage from './scenes/LandingPage'
import React from "react";
import Image from "next/image";
import Audio from './scenes/Audio';


export async function getServerSideProps() {
  const stockRes = await fetch(
    "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=nPfA2dsE2hQiKIK0btfKvRBVtuN5UPv5QRbzHsZU"
  );
  const stockData = await stockRes.json();

  const newsRes = await fetch(
    "https://api.stockdata.org/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=nPfA2dsE2hQiKIK0btfKvRBVtuN5UPv5QRbzHsZU"
  );
  const newsData = await newsRes.json();

  return {
    props: {
      stockData,
      newsData,
    },
  };
}


export default function Home({stockData, newsData}) {
  return (
    <>
      <Head>
        <title>thetechhub</title>
        <meta name="description" content="tech related" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='flex justify-center items-center flex-col pt-[200px]' >
        <section className='xxs:my-[70px] md:my-[100px]'>
        <LandingPage />
        </section>
        {/* PRICES */}
        <section className="flex flex-col justify-center items-center my-40 w-screen overflow-hidden px-2">
        <div className="bg-neoyellow py-4 px-7 rounded-3xl border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black shadow-4xl" id='stockmarketprices'>
          <h1 className="lg:text-6xl text-4xl font-semibold">MARKET PRICES</h1>
        </div>
        <div className="grid lg:grid-cols-3 content-center xxs:grid-cols-1  px-4 lg:gap-16">
          {/* CONTAINER TSLA */}
          <div className="  bg-neoblue  font-Oswald my-10 rounded-3xl border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black shadow-4xl flex flex-col items-center justify-center px-10 py-5">
            <div className=" bg-neogreen  rounded-3xl flex align-bottom truncate flex-col border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black p-4 xxs:px-6 sm:px-12 py-5 ">
              {/* STOCK NAME & PRICE */}
              <div
                className="flex justify-center my-10 flex-col items-center bg-white rounded-3xl gap-4 p-4 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black
      "
              >
                <Image
                  src="/images/teslalogo.svg"
                  alt=""
                  width={100}
                  height={100}
                />
                <p className="font-semibold font-Oswald text-4xl ">TSLA</p>
              </div>
              {/* 24H STATS */}

              <div className="flex flex-col align-middle justify-center  text-start gap-2 items-center font-semibold text-2xl">
                <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                  <p>
                    Price:{" "}
                    <span className="">
                      {" "}
                      $
                      {stockData &&
                        stockData.data &&
                        stockData.data.find((d) => d.ticker === "TSLA")[
                          "price"
                        ]}
                    </span>
                  </p>
                </div>
                <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                  <p>
                    24H Low: $
                    {stockData &&
                      stockData.data &&
                      stockData.data.find((d) => d.ticker === "TSLA")[
                        "day_low"
                      ]}
                  </p>
                </div>
                <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                  <p>
                    24H High: $
                    {stockData &&
                      stockData.data &&
                      stockData.data.find((d) => d.ticker === "TSLA")[
                        "day_high"
                      ]}
                  </p>
                </div>
                <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                  <p>
                    24h Change:{" "}
                    {stockData &&
                      stockData.data &&
                      stockData.data.find((d) => d.ticker === "TSLA")[
                        "day_change"
                      ]}
                    %
                  </p>
                </div>
              </div>
            </div>
          </div>
           {/* CONTAINER AAPL */}
        <div className="  bg-neoblue  font-Oswald my-10 rounded-3xl border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black shadow-4xl flex flex-col items-center justify-center px-10 py-5">
          <div className=" bg-neogreen  rounded-3xl flex align-bottom truncate flex-col border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black p-4  xxs:px-6 sm:px-12px-12 py-5 ">
            {/* STOCK NAME  */}
            <div
              className="flex justify-center my-10 flex-col items-center bg-white rounded-3xl gap-4 p-4 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black
      "
            >
              <Image
                src="/images/applelogo.svg"
                alt=""
                width={100}
                height={100}
              />
              <p className="font-semibold font-Oswald text-4xl ">AAPL</p>
            </div>
            {/* 24H STATS */}

            <div className="flex flex-col align-middle justify-center  text-start gap-2 items-center font-semibold text-2xl">
              <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                <p>
                  Price:{" "}
                  <span className="">
                    {" "}
                    $
                    {stockData.data &&
                    stockData.data.find((d) => d.ticker === "AAPL")["price"]}
                  </span>
                </p>
              </div>
              <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                <p>
                  24H Low: $
                  {stockData.data &&
                    stockData.data.find((d) => d.ticker === "AAPL")["day_low"]}
                </p>
              </div>
              <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                <p>
                  24H High: $
                  {stockData.data &&
                    stockData.data.find((d) => d.ticker === "AAPL")["day_high"]}
                </p>
              </div>
              <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                <p>
                  24h Change:{" "}
                  {stockData.data &&
                    stockData.data.find((d) => d.ticker === "AAPL")["day_change"]}
                  %
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CONTAINER MSFT */}
        <div className="  bg-neoblue  font-Oswald my-10 rounded-3xl border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black shadow-4xl flex flex-col items-center justify-center px-10 py-5">
          <div className=" bg-neogreen xxs:px-6 sm:px-12  rounded-3xl flex align-bottom truncate flex-col border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black p-4 px-12 py-5 ">
            {/* STOCK NAME */}
            <div
              className="flex justify-center my-10 flex-col items-center bg-white rounded-3xl gap-4 p-4 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black
      "
            >
              <Image
                src="/images/microsoft.svg"
                alt=""
                width={100}
                height={100}
              />
              <p className="font-semibold font-Oswald text-4xl">MSFT</p>
            </div>
            {/* 24H STATS */}

            <div className="flex flex-col align-middle justify-center  text-start gap-2 items-center font-semibold text-2xl">
              <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                <p>
                  Price:{" "}
                  <span className="">
                    {" "}
                    $
                    {stockData.data &&
                    stockData.data.find((d) => d.ticker === "MSFT")["price"]}
                  </span>
                </p>
              </div>
              <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                <p>
                  24H Low: $
                  {stockData.data &&
                    stockData.data.find((d) => d.ticker === "MSFT")["day_low"]}
                </p>
              </div>
              <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                <p>
                  24H High: $
                  {stockData.data &&
                    stockData.data.find((d) => d.ticker === "MSFT")["day_high"]}
                </p>
              </div>
              <div className="bg-white p-2 border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black rounded-3xl w-full items-center justify-center flex  ">
                <p>
                  24h Change:{" "}
                  {stockData.data &&
                    stockData.data.find((d) => d.ticker === "MSFT")["day_change"]}
                  %
                </p>
              </div>
            </div>
          </div>
        </div>

        </div>
      </section>


      {/* NEWS */}
      <div className=" flex flex-col justify-center items-center w-screen overflow-hidden px-2">
      <div className="bg-neoyellow py-4 px-7 rounded-3xl border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black shadow-4xl" id='stockmarketnews'>
          <h1 className="lg:text-6xl text-4xl font-semibold">MARKET NEWS</h1>
        </div>


      {/* ARTICLE */}
{newsData.data.map((article) => (
      <a
        href={article.url}
        target="_blank"
        key={article.id}
      >
        <div className=" bg-white flex xxs:flex-col sm:flex-row justify-center items-center content-center m-5 rounded-2xl xs:max-w-[800px] border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black hover:scale-105 transition duration-300 cursor-pointer xxs:max-w-[340px] max-w-full-xs ">
          <div className="flex flex-col justify-start mx-5 my-5 max-w-[400px]">
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
    <Audio />
      
        
        
      </main>
    </>
  )
}
