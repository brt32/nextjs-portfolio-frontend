import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import Pagination from "@/components/Pagination";
import { motion } from "framer-motion";
import { API_URL, PER_PAGE } from "@/config/index";

export default function EventsPage({ events, page, total }) {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <Layout>
        <h1>My All Projects</h1>
        {events.length === 0 && <h3>No projects to show...</h3>}

        {events.map((evt) => (
          <EventItem key={evt.id} evt={evt} />
        ))}
        <Pagination page={page} total={total} />
      </Layout>
    </motion.div>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/events/count`);
  const total = await totalRes.json();

  // Fetch events
  const eventRes = await fetch(
    `${API_URL}/events?isUpcoming=false&_sort=startDate:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const events = await eventRes.json();

  return {
    props: { events, page: +page, total },
  };
}
