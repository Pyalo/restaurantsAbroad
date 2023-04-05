import React, {useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import Restaurant from '../components/Restaurant'
import Container from 'react-bootstrap/Container';
import SearchIcon from '@mui/icons-material/Search';
import restaurantApi from '../api/restaurantApi';


const Home = () => {
    const [restaurants, setRestaurants]=useState([]);
    const getData = () =>{
        restaurantApi.get('/')
        .then(({data})=>setRestaurants(data.businesses)) ;
    }
    const filterByPrice = (price) => {
        const filteredRestaurants=restaurants.filter((restaurant) =>{
            return restaurant.price=== price
        });
        return filteredRestaurants;
    }
    useEffect(()=> {
        getData();
    }, []);
  return (
    <Container style={styles.all}>
      <div>
        <p class="comeback">Kwetu Lounge</p>
        <img src='disclaimer.png' style={styles.over}></img>
          <div style={styles.inputCont}>
            <input placeholder='Search for a restaurant' style={styles.holder}></input>
            <SearchIcon style={styles.ingine}/>
          </div>
      </div>
        <Row style={styles.const}>
        <div style={styles.margin}>
          <h2>PocketFriendly</h2>
          <Restaurant restaurants={filterByPrice('$')}/>
        </div>
        <div>
          <h2>Moderate</h2>
          <Restaurant restaurants={filterByPrice('$$')}/>
        </div>
        <div>
          <h2>Pricey</h2>
          <Restaurant restaurants={filterByPrice('$$$')}/>
        </div>
        </Row>
    </Container>
  )
}
const styles = {
  const:{
    display:'flex',
    justifyContent: 'space-around'
  },
  holder:{
    width: '90%',
    border: '1px solid gray',
    borderRadius: '10px',
    padding: '7px',
    zIndex: '10',
  },
  all:{
    margin: '0px 25px 150px 100px'
  },
  margin: {
    margin: '10px'
  },
  ingine: {
    marginLeft: '-30px',
    zIndex: '90',
    margin: 'center'
  },
  inputCont: {
    display: 'flex',
    justifyContent : 'center',
    marginTop: '-30px'
  },
  over: {
    width: '100%',
  }
}

export default Home
