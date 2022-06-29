import Link from "next/link";

const SingleEvents = (props) => {
  const { id, title, description, location, date } = props.events;
  const createdDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const exploreLink = `/events/${id}`
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>{location}</small>
      <small>{createdDate}</small>
      <br />
      <Link href={exploreLink}><a events={props.events}> explore more... </a></Link>
    </div>
  );
};

export default SingleEvents;
