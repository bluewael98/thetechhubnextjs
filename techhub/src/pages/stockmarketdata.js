import React from "react";
import Image from "next/image";
import Layout from "../../components/Layout";

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.stockdata.org/v1/data/quote?symbols=AAPL,TSLA,MSFT&api_token=nPfA2dsE2hQiKIK0btfKvRBVtuN5UPv5QRbzHsZU"
  );
  const data = await res.json();

  return {
    props: {
      stockData: data,
    },
  };
}

const StockMarketData = ({ stockData }) => {
  
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center my-40 w-screen">
        <div className="bg-neoyellow py-4 px-7 rounded-3xl border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black shadow-4xl w-full" id="marketprices">
          <h1 className="lg:text-4xl md:text-4xl xxs:text-2xl font-semibold">MARKET PRICES</h1>
        </div>

        <div className="flex justify-center items-center w-screen px-4 gap-16">
          {/* CONTAINER TSLA */}
          <div className="  bg-neoblue  font-Oswald my-10 rounded-3xl border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black shadow-4xl flex flex-col items-center justify-center px-10 py-5">
            <div className=" bg-neogreen  rounded-3xl flex align-bottom truncate flex-col border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black p-4 px-12 py-5 ">
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
          <div className=" bg-neogreen  rounded-3xl flex align-bottom truncate flex-col border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black p-4 px-12 py-5 ">
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
          <div className=" bg-neogreen  rounded-3xl flex align-bottom truncate flex-col border-solid border-t-2 border-r-[6px] border-b-[6px] border-l-2 border-black p-4 px-12 py-5 ">
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
    </Layout>
  );
};

export default StockMarketData;
