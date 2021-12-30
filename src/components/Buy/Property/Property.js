import { Card,Button } from "react-bootstrap";
const Property = (props)=>{
    return(
        <>
       
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Know more</Button>
  </Card.Body>
</Card>
      
            
        </>
    );
}

export default Property;