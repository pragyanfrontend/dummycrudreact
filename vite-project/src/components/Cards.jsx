import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function CardDisplay({data,deletehandler}){


return(
    <Card  style={{ width: '18rem' }}>
      <Card.Img src={data.thumbnail} />
      <Card.Body>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
         {data.description}
        </Card.Text>
        <Card.Text>
         Price: Rs{data.price}
        </Card.Text>
        <Card.Text>
        Rate: {data.rating}
        </Card.Text>
        <Card.Text>
        Brand: {data.brand}
        </Card.Text>
         
           

        <Button onClick={(e)=>deletehandler(data.id)} variant="danger">Delete</Button>
      </Card.Body>
    </Card>

)

}

export default CardDisplay