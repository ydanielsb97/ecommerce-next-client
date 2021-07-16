import '../scss/global.scss'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
