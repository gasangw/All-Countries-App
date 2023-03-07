import Card from 'react-bootstrap/Card';

const AllCountries = (props) => {
  const { name, flags, population, region, capital } = props.info;
  return (
      <Card className="card-container">
        <Card.Img variant="top" src={flags.svg} />
        <Card.Body className={`card-body ${props.theme}`}>
          <Card.Title>{name}</Card.Title>
          <Card.Text><span>Population</span>: {population}</Card.Text>
          <Card.Text><span>Region</span>: {region}</Card.Text>
          <Card.Text><span>Capital</span>: {capital}</Card.Text>
        </Card.Body>
      </Card>
  );
};

export default AllCountries;
