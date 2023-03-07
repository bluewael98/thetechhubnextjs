import React, {useEffect } from "react";
import Chart from "chart.js/auto";


export async function getServerSideProps () {
  const API_KEY = "253CIPOFY7KSKFB0";
  const SYMBOL = "TSLA";
  const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${SYMBOL}&interval=60min&apikey=${API_KEY}`)
  const data = await res.json ();

  return {
    props: {
      chartData: data
    }
  }

}

const StockMarketCharts = ({chartData}) => {
 ;

  
  useEffect(() => {
    const labels = [];
    const prices = [];
    for (let key in chartData) {
      labels.push(key);
      prices.push(chartData[key]["4. close"]);
    }
    const ctx = document.getElementById("stockChart");
    if (window.stockChart instanceof Chart) {
      window.stockChart.destroy();
    }
    window.stockChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: SYMBOL,
            data: prices,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 1,
          },
        ],
      },
    });
  }, [chartData]);

  return (
    <div>
      <canvas id="stockChart" className="w-[500px]"></canvas>
    </div>
  );
};

export default StockMarketCharts;
