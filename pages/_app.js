import { GlobalStyle } from '../styles/globalStyle'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
