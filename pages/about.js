import Layout from "@/components/Layout";
import styles from "@/styles/About.module.css";
import Link from "next/link";

export default function About() {
  return (
    <Layout title="About Me">
      <Link href="/events">
        <a className="btn btn-secondary my-1">Go Back</a>
      </Link>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.about}>
        Witam, mam na imię Bartek. Jestem mgr inż. wydziału Elektroniki i 
	Telekomunikacji, Wojkowej Akademii Technicznej w Warszawie - specjalizacji 
	Inżynieria Systemów Bezpieczeństwa. Aktualnie próbuję swoich sił w 
	programowaniu, jako Junior Software Developer. 
	Od 12 roku życia interesowałem się ta dziedziną informatyki. Niestety 
	naukę na &apos;poważnie&apos; zacząłem dopiero 
	na początku 2020 roku. Wiedzę programistyczną posiadam w stopniu podstawowym. 
	Potfarię tworzyć
        proste aplikacje webowe - frontend oraz backend, desktopowe, mobilne 
	oraz skrypty. Z frontendu
        znam HTML, CSS oraz Javascript. Dodatkowo podstawy Reactjs, Nextjs oraz
        Redux. Z backendu - Nodejs, Expressjs, Django (MVT). Aplikacje desktopowe 
	uczę się tworzyć w Electronjs, natomiast
        mobilne w React Native. Potrafię podstawy Pythona - proste skrypty,
        automatyzację sieci i systemów, webscraping, Django i DRF. Znam podstawy
        baz danych SQL - PostgreSQL, oraz NoSQL - MongoDB. Wiedzę czerpię z
        książek oraz Internetu - głównie z Google, portalu
        Stackoverflow, tutoriali, video-tutoriali oraz dokumentacji
        technicznych. Potrafię sprawnie wyszukiwać informacje, które mnie
        interesują oraz rozwiązywać problemy programistyczne. Posiadam również
        wiedzę teoretyczną o sieciach komputerowych na poziomie certyfikatu
        Cisco CCNA Routing&Switching i CCNA Security. Systemy operacyjne Windows
        Server oraz Linux również nie są mi obce. Przez pewien okres czasu zajmowałem
	się również IoT - głównie przy pomocy Arduino oraz Raspberry Pi.
	Z chęcią przyswajam nowe informacje - chcę się ciągle rozwijać.
      </p>
    </Layout>
  );
}
