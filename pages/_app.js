import Nav from "components/Nav";
import Footer from "components/Footer";

import "styles/theme.scss";
import "styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <div id="app">
      <Component {...pageProps} />
    </div>
  );
}
