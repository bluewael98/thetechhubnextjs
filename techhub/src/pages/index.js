import Head from 'next/head'
import LandingPage from './scenes/landingpage'


export default function Home() {
  return (
    <>
      <Head>
        <title>thetechhub</title>
        <meta name="description" content="tech related" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        
        <LandingPage />
        
      </main>
    </>
  )
}
