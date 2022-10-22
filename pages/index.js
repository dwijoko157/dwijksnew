import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HALO :)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="DWIJKS21 - Hitam" />
        <p className="description">
          Mau cari apaan? Web ini kosong :)
        </p>
      </main>

      <Footer />
    </div>

  )
}
