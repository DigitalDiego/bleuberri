import '../styles/globals.css'
import { CartProvider } from 'react-use-cart'
import { Navbar } from '../components'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar/>
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
