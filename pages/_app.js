import "../styles/globals.css";
import { CartProvider } from "react-use-cart";
import { Navbar } from "../components";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <Navbar />
      <Component {...pageProps} />
    </CartProvider>
  );
}
