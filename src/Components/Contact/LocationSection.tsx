type LocationDataType = {
  location: string;
  address: string;
  phone: string;
  mapLink: string;
};

const locations = [
  {
    location: "San Francisco",
    address: "1446 Vorwuw Parkway",
    phone: "123-456-7890",
    mapLink: "https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu",
  },
  {
    location: "Chicago",
    address: "1849 Usavom View",
    phone: "123-456-7890",
    mapLink: "https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu",
  },
  {
    location: "Boston",
    address: "1660 Dodgig Place",
    phone: "123-456-7890",
    mapLink: "https://www.google.com/maps/@24.0098057,88.9892437,15z?entry=ttu",
  },
];

const LocationBox = ({
  location,
  address,
  phone,
  mapLink,
}: LocationDataType) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="location-boxes">
        <div className="img1">
          <img src="../assets/img/icons/location3.svg" alt="Location Icon" />
        </div>
        <div className="space32"></div>
        <a href="#">
          {location} <br className="d-lg-block d-none" /> {address}
        </a>
        <div className="space24"></div>
        <p>Phone Number</p>
        <a href={`tel:${phone}`}>{phone}</a>
        <div className="space32"></div>
        <a
          href={mapLink}
          className="map"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Our Map
        </a>
      </div>
    </div>
  );
};

const LocationSection = () => {
  return (
    <div className="location-section-area sp2 bg2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 m-auto">
            <div className="location-header text-center heading2">
              <h5>Location</h5>
              <h2>Our Location</h2>
            </div>
          </div>
        </div>
        <div className="space60 d-lg-block d-none"></div>
        <div className="space30 d-lg-none d-block"></div>
        <div className="row">
          {locations.map((loc, index) => (
            <LocationBox
              key={index}
              location={loc.location}
              address={loc.address}
              phone={loc.phone}
              mapLink={loc.mapLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationSection;
