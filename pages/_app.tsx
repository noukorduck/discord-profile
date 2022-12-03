import type { AppProps } from 'next/app'
import Base from '../components/Base'

import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Base>
        <Component {...pageProps} />
      </Base>
    </>
  )
}
