
const AllEvents = (props) => {
    const {title, description} = props.event
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default AllEvents;