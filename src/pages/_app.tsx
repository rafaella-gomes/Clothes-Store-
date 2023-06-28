import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import { Container } from "../styles/pages/app";

import { CartContextProvider } from "../contexts/CartContext";
import { Head } from "../components/Head";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Container>
        <Head />
        <Component {...pageProps} />;
      </Container>
    </CartContextProvider>
  );
}
