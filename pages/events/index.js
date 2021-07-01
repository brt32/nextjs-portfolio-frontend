import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
  return (
    <Layout>
      <h1>My All Projects</h1>
      {events.length === 0 && <h3>No projects to show...</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=startDate:ASC`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1,
  };
}