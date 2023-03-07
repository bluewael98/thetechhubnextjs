import Head from 'next/head'
import LandingPage from './scenes/landingpage'
import StockMarketCharts from './scenes/StockMarketCharts'
import StockMarketData from './scenes/StockMarketData'
import StockMarketNews from './scenes/StockMarketNews'


export default function Home() {
  return (
    <>
      <Head>
        <title>thetechhub</title>
        <meta name="description" content="tech related" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='flex justify-center items-center flex-col' >
        
        <LandingPage />
        <StockMarketData />
        <StockMarketNews />
        <StockMarketCharts />
        
        
      </main>
    </>
  )
}
