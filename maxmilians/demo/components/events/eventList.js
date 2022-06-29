import SingleEvents from "./singleEvents";

const EventList = (props) => {
  const { featuredEvents } = props;
  return (
    <div>
      {featuredEvents.map((featuredEvent) => (
        <SingleEvents key={featuredEvent.id} events={featuredEvent} />
      ))}
    </div>
  );
};

export default EventList;
