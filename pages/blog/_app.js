import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
