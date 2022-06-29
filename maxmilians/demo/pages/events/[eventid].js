import { useRouter } from "next/router";
import AllEvents from "../../components/events/AllEvents";
import { getEventsById } from "../../dummy-data";

const SpecificEvent = (props) => {
  const router = useRouter();
  const { eventid } = router.query;
  const event = getEventsById(eventid);

  if (!event) {
    return <div>no data found</div>;
  }
  return (
    <div>
      <AllEvents event={event} />
    </div>
  );
};

export default SpecificEvent;
