import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function CardDisplay({data}){

return(
    <Card  style={{ width: '18rem' }}>
      <Card.Img src={data.thumbnail} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         {data.description}
        </Card.Text>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>

)

}

export default CardDisplay