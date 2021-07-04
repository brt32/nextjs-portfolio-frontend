import { AuthProvider } from "@/context/AuthContext";

import "../styles/globals.css";
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
