import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
const Restaurant = ({restaurants}) => {
  const navigate = useNavigate();
  return (
    <div style={stylee.content}>
      <Row xs={1} md={3}>
      {restaurants.map((restaurant) => (
        <Col>
          <Card className='mb-3' onClick={() => navigate(`/restaurantdetails/${restaurant.id}`)}>
            <Card.Img variant="top" src={restaurant.image_url} style={stylee.others}/>
            <Card.Body>
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text style={stylee.let}>
                <p>{restaurant.rating} Stars</p><p>{restaurant.review_count} Reviews</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}
const stylee={
    let:{
      display: 'flex',
      justifyContent: 'space-around' ,
      textIndent: '-5em' 
    },
    content:{
        justifyContent: 'space-around'
    },
    others:{
      height: '250px'
      
    }
}

export default Restaurant
