import type { AppProps } from 'next/app'

import Footer from '../components/Footer'
import Header from '../components/Header'

import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <hr className="vx" />
      <main>
        <Component {...pageProps} />
      </main>
      <hr className="vx" />
      <Footer />
    </>
  )
}
