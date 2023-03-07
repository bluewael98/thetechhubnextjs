import Head from 'next/head'
import LandingPage from './scenes/landingpage'

import Layout from '../../components/Layout'


export default function Home() {
  return (
    <>
      <Head>
        <title>thetechhub</title>
        <meta name="description" content="tech related" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='flex justify-center items-center flex-col' >
        <Layout>
        <LandingPage />
       
        </Layout>
        
      
        
        
      </main>
    </>
  )
}
