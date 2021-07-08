import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { CartContextProvider } from "@/hooks/useCart";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Navbar />
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
export default MyApp;
