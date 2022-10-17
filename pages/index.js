import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>APAANTUH HEHE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="HALO HEHE" />
        <p className="description">
          Gatau mau ngetik apaan hehe, mau bilang makasih ae sih udah 3 bulan <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>

  )
}
