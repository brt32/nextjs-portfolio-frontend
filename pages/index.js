import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import Link from "next/link";
import { motion } from "framer-motion";
import { API_URL } from "@/config/index";

export default function HomePage({ events }) {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Layout>
        <h1>Upcoming Projects</h1>
        {events.length === 0 && <h3>No upcoming projects to show...</h3>}

        {events.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}

        {events.length > 0 && (
          <Link href="/events">
            <a className="btn-secondary">View All Projects</a>
          </Link>
        )}
      </Layout>
    </motion.div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=startDate:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}
