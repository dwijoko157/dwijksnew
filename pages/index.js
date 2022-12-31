import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>HALLO SAYANG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="SELAMAT TAHUN BARU 2023" />
        <center><p className="description">
          Semangat terus ya sayang<p>Maaf ngetiknya disini hehe<p>Dilihat ya syukur, kalo nggak juga ya gapapa</p></p>
        </p></center>
      </main>

      <Footer />
    </div>

  )
}
