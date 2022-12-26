import '../styles/globals.css'
import { CartProvider } from 'react-use-cart'
import { Navbar, Footer } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </CartProvider>
  )
}

export default MyApp
