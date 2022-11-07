import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dwijks21</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hitam" />
        <p className="description">
          no one cares
        </p>
      </main>

      <Footer />
    </div>

  )
}
