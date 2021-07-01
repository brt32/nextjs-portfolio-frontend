import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/EventItem.module.css";

export default function EventItem({ evt }) {
  console.log(evt);
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={
            evt.image
              ? evt.image.formats.thumbnail.url
              : "/images/event-default.png"
          }
          width={170}
          height={100}
          alt={evt.title}
        />
      </div>
      <div className={styles.info}>
        <span>
          Finished at {new Date(evt.endDate).toLocaleDateString("en-US")} since{" "}
          {new Date(evt.startDate).toLocaleDateString("en-US")}
        </span>
        <h3>
          <Link href={`/events/${evt.slug}`}><a>Titled as: {evt.title}</a></Link>
        </h3>
        <h5>Created by: {evt.user.username}</h5>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className="btn btn-secondary btn-lg">Details</a>
        </Link>
      </div>
    </div>
  );
}
