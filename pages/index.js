import Head from 'next/head'
// import Image from 'next/image'
import Banner from '../src/Components/Landing/Banner'
import FrontEnd from '../src/Components/Landing/FrontEnd'
import BackEnd from '../src/Components/Landing/BackEnd'
import Server from '../src/Components/Landing/Server'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hoangs portfolio</title>
        <meta name="description" content="Hoang's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className='Landing_Body'>
          <div className='container border-dashed px-0'>
            <Banner />
            <FrontEnd />
            <BackEnd />
            <Server />
          </div>
        </div>
      </main>
    </div>
  )
}