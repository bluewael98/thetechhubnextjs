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
  const SYMBOL = "TSLA";

  useEffect(() => { 
    const labels = []; // Creating an empty array to hold the x-axis labels for the chart
    const prices = []; // Creating an empty array to hold the y-axis prices for the chart
    const timeSeries = chartData["Time Series (60min)"]; // Extracting the "Time Series (60min)" object from the chartData prop
    for (let key in timeSeries) { // Looping through each key in the "Time Series (60min)" object
      labels.push(key); // Adding the key (which represents a date and time) to the labels array
      prices.push(timeSeries[key]["4. close"]); // Adding the closing price for the key's date and time to the prices array
    }
    const ctx = document.getElementById("stockChart"); // Getting the canvas element with an ID of "stockChart"
    if (window.stockChart instanceof Chart) { // Checking if there is already a chart instance stored in the global window object
      window.stockChart.destroy(); // If there is, destroy it to prevent duplicates
    }
    window.stockChart = new Chart(ctx, { // Creating a new Chart.js chart instance and storing it in the global window object
      type: "line", // Setting the chart type to "line"
      data: {
        labels: labels, // Setting the x-axis labels for the chart
      
        datasets: [
          {
            label: SYMBOL, 
            data:  prices, // Setting the y-axis data for the chart
            fill: true, // Setting the chart area to not be filled
            lineTension: 0.1, // Setting the curve of the chart line
            pointHoverRadius: 5,
            pointHitRadius: 10,
            borderColor: "#4B69FE",
            borderWidth: "4",
            pointRadius: 0,
            xAxisID: "Time",
            yAxisID: "Price",
            
            
            
          },
        ],
      },
      options: {
        scales: {
         
         x: {
          ticks:{
            display: false,
          }
        },
        y: {
          ticks: {
            display: false,
          }
        }

        
      
        
      }
    }
    });
  }, [chartData]); // Specifying that the useEffect hook should only run when the chartData prop changes


  return (
    <section className="flex justify-center items-center">
      <div className="w-[800px] bg-white rounded-2xl px-4 border-solid border-t-4 border-r-[12px] border-b-[12px] border-l-4 border-black ">
      <canvas id="stockChart"></canvas>
      </div>
      
    </section>
  );
};

export default StockMarketCharts;
