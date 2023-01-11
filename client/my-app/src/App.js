import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Components/Header';
import Index from './Components/Index';
import AddHotel from './Components/addHotel';
import AddFood from './Components/addFood';
import HotelList from './Components/HotelList';
import EditHotel from './Components/editHotel';
import AddMenu from './Components/addMenu';
import MenuList from './Components/menuList';
import FoodList from './Components/foodList';
import GetFood from './Components/GetFood';
import AllFood from './Components/AllFood';
import { useEffect, useState } from 'react';
import MasterContext from './Components/MasterContext';
import axios from 'axios';
function App() {
  const [hotelList,setHotelList] = useState([]);
  const [foodList, setfoodList] = useState([]);
  const [menuList,setMenuList] = useState([]);

  useEffect(()=>{
    loadHotelData();
    loadFoodData();
    loadMenuData();
  },[]);
  
  const loadHotelData = async()=>{
    let res =  await axios.get("http://localhost:3000/hotel/hotel-list");
    if(res.data.status){
      setHotelList(res.data.hotelList)
    }
  }
  const loadFoodData = async()=>{
    let res =  await axios.get("http://localhost:3000/food/list");
    if(res.data.status){
      setfoodList(res.data.foodList)
    }
  }
  const loadMenuData = async()=>{
    let res =  await axios.get("http://localhost:3000/menu/list");
    if(res.data.status){
      setMenuList(res.data.data)
    }
  }
  return (
    <BrowserRouter>
    <Header></Header>
    <MasterContext.Provider value={{hotelList: hotelList,foodList:foodList,menuList:menuList}}>
    <Routes>
      <Route path="/" element={<Index/>}></Route>
      <Route path="/addHotel" element={<AddHotel/>}></Route>
      <Route path="/addFood" element={<AddFood/>}></Route>
      <Route path="/HotelList" element={<HotelList setHotelList={setHotelList}/>}></Route>
      <Route path="/EditHotel" element={<EditHotel/>}></Route>
      <Route path="/HotelMenu" element={<AddMenu/>}></Route>
      <Route path="/MenuList" element={<MenuList/>}></Route>
      <Route path="/AddFood" element={<AddFood/>}></Route>
      <Route path="/foodList" element={<FoodList setfoodList={setfoodList}/>}></Route>
      <Route path ="/GetFood" element={<GetFood/>}></Route>
      <Route path ="/AllFood" element={<AllFood/>}></Route>
    </Routes>
    </MasterContext.Provider>
    </BrowserRouter>
  );
}

export default App;