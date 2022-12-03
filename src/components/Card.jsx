import location from "../assets/icons/location.png";

export function Card(props) {
  return (
    <article className="card">
      <img className="card--image" loading="lazy" src={props.spot.imageUrl} />

      <div className="card--body">
        <div className="card--header">
          <span className="card--location">
            <img className="location--icon" src={location} alt="location" />
            <span>{props.spot.location}</span>
          </span>
          <a
            className="card--mapLink"
            href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
          >
            View on Google Maps
          </a>
        </div>

        <h3 className="card--title">{props.spot.title}</h3>

        <div className="card--date">
          <span>{props.spot.startDate} - </span>
          <span>{props.spot.endDate}</span>
        </div>

        <div className="card--descr">{props.spot.description}</div>
      </div>
    </article>
  );
}
