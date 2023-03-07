import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const AllCountries = (props) => {
  const { name, flags, population, region, capital } = props.info;
  return (
    <Link to={`/name/${name}`} className="link">
      <Card className="card-container">
        <Card.Img variant="top" src={flags.svg} />
        <Card.Body className={`card-body ${props.theme}`}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <span>Population</span>: {population}
          </Card.Text>
          <Card.Text>
            <span>Region</span>: {region}
          </Card.Text>
          <Card.Text>
            <span>Capital</span>: {capital}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default AllCountries;
