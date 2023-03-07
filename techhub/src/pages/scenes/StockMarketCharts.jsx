import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import axios from "axios";

const StockMarketCharts = () => {
  const [data, setData] = useState(false);

  const API_KEY = "253CIPOFY7KSKFB0";
  const SYMBOL = "TSLA";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${SYMBOL}&interval=60min&apikey=${API_KEY}`
        );
        setData(response.data["Time Series (60min)"]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const labels = [];
    const prices = [];
    for (let key in data) {
      labels.push(key);
      prices.push(data[key]["4. close"]);
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
  }, [data]);

  return (
    <div>
      <canvas id="stockChart" className="w-[1000px]"></canvas>
    </div>
  );
};

export default StockMarketCharts;
