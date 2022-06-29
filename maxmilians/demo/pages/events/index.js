import EventList from "../../components/events/eventList";
import { getFeaturedEvent } from "../../dummy-data";

const AllEvents = () => {
  const featuredEvents = getFeaturedEvent();

  return (
    <div>
      <EventList featuredEvents={featuredEvents} />
    </div>
  );
};

export default AllEvents;
