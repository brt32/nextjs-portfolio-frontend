import { AuthProvider } from "@/context/AuthContext";

import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />;
      </AnimatePresence>
    </AuthProvider>
  );
}

export default MyApp;
