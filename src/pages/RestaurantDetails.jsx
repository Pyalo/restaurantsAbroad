import React,{useState, useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import restaurantApi from '../api/restaurantApi';
import Maps from '../components/Maps';

const RestaurantDetails = () => {
  const { id } = useParams();
  const[restaurant, setRestaurant] = useState({name:''});

  const getOneRestaurant = () =>{
    restaurantApi.get (`/${id}`)
    .then(({data}) => setRestaurant(data));
  }
    const getDate = (num) => {
      if(num===0){
        return 'Sunday';
      }
      else if(num===1){
        return 'Monday';
      }
      else if(num===2){
        return 'Tuesday';
      }
      else if(num===3){
        return 'Wednasday';
      }
      else if(num===4){
        return 'Thursday';
      }
      else if(num===5){
        return 'Friday';
      }
      else if(num===6){
        return 'Saturday';
      }
    }

      const time = (GMT) =>{
        const tyme = GMT
        let timeA= tyme.replace(/\d\d$/,":$&")
        const [hours,minutes] = timeA.split(":")
        const period= hours>= 12 ? "PM" : "AM"
        const adjustHours = hours % 12 || 12
        const times =`${adjustHours} : ${minutes} ${period}`
        return(`${times}`)
      }
  useEffect(()=> {
    getOneRestaurant();
  }, [])
  if(!restaurant.photos){
    return(
      <p>Loading...</p>
    )
  }
  return (
    <div>
      <div>
      <Carousel>
        <Carousel.Item>
          <img
            style={styles.image}
            className="d-block w-100"
            src={restaurant.photos[0]}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{restaurant.name}</h3>
            <p>{
              restaurant.categories.map((category)=>{
                return(
                  category.title+' '
                )
              })}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={restaurant.photos[1]}
            alt="Second slide"
          />
            <Carousel.Caption>
            <h3>{restaurant.name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={restaurant.photos[2]}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>{restaurant.name}</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div style={styles.day}>
      {
        restaurant.hours[0].open.map((day)=>{
          return(
            <div style={styles.days}>
              <p>{getDate(day.day)}</p>
              <p>{time(day.start)} - {time(day.end)}</p>
          </div>  
          )
        })
      }
      </div>
      <div>
        <Maps coordinates={restaurant.coordinates}/>
      </div>
    </div>
  )
}
const styles={
  days:{
    border : '1px solid gray',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
    margin: '5px'
  },
  day:{
    display: 'flex',
    justifyContent: 'space-around'
  },
  image:{
    height: '100vh'
  }
}

export default RestaurantDetails