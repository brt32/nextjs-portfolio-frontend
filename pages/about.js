import Layout from "@/components/Layout";
import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <Layout title="About DJ Events">
      <h1>About Me</h1>
      <p className={styles.about}>
        Witam, nazywam się Bartłomiej Proczkowski i jestem Junior Software
        Developerem, samoukiem. Od 12 roku życia interesowałem się
        programowaniem. Niestety naukę na &apos;poważnie&apos; zacząłem dopiero
        pod koniec 2019 roku. Wiedzę programistyczną posiadam w stopniu
        podstawowym. Potfarię tworzyć proste aplikacje webowe, desktopowe,
        mobilne oraz skrypty. Z frontendu znam HTML, CSS oraz Javascript.
        Podstawy Reactjs, Nextjs, Redux. Aplikacje desktopowe tworzę w
        Electronjs, natomiast mobilne w React Native. Potrafię podstawy Pythona
        - proste skrypty, automatyzację sieci i systemów, webscraping, Django.
        Znam podstawy baz danych SQL oraz NoSQL - PostgreSQL, MongoDB. Wiedzę
        czerpię z książek oraz Internetu - głównie z portalu Stackoverflow oraz
        dokumentacji technicznych. Potrafię sprawnie wyszukiwać informacje,
        które mnie interesują. Posiadam również podstawową wiedzę o sieciach
        komputerowych. Z chęcią przyswajam nową wiedzę.
      </p>
    </Layout>
  );
}
