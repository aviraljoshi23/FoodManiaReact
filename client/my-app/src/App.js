import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Header from './Components/Header';
import Index from './Components/Index';
import AddHotel from './Components/addHotel';
import AddFood from './Components/addFood';
import HotelList from './Components/HotelList';
import EditHotel from './Components/editHotel';
import AddMenu from './Components/addMenu';
import MenuList from './Components/menuList';
function App() {
  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Index/>}></Route>
      <Route path="/addHotel" element={<AddHotel/>}></Route>
      <Route path="/addFood" element={<AddFood/>}></Route>
      <Route path="/HotelList" element={<HotelList/>}></Route>
      <Route path="/EditHotel" element={<EditHotel/>}></Route>
      <Route path="/HotelMenu" element={<AddMenu/>}></Route>
      <Route path="/MenuList" element={<MenuList/>}></Route>
      <Route path="/AddFood" element={<AddFood></AddFood>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;