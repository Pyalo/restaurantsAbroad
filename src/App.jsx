// import Home from './pages/Home'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantDetails from './pages/RestaurantDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/restaurantdetails/:id' element={<RestaurantDetails/>}/>
      </Routes>
    </BrowserRouter>
  )
}
export default App






// <div>
    //   <Home/>
    // </div>