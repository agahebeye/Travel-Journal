import location from "../assets/icons/location.png";

export function Card(props) {
  /*
     title: "Mount Fuji",
    location: "Japan",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "12 Jan, 2021",
    endDate: "24 Jan, 2021",
    description:
      "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
    imageUrl: "https://source.unsplash.com/WLxQvbMyfas",
    */
  return (
    <article className="card">
      <img
        className="card--image"
        loading="lazy"
        src="https://source.unsplash.com/WLxQvbMyfas"
      />

      <div className="card--body">
        <div className="card--header">
          <span className="card--location">
            <img className="location--icon" src={location} alt="location" />
            <span>Japan</span>
          </span>
          <a
            className="card--mapLink"
            href="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
          >
            View on Google Maps
          </a>
        </div>

        <h3 className="card--title">Mount Fuji</h3>

        <div className="card--date">
          <span>12 Jan, 2021 - </span>
          <span>24 Jan, 2021</span>
        </div>

        <div className="card--descr">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </div>
      </div>
    </article>
  );
}
