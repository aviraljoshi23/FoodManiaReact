import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function AddFood() {

  const hotelIdfield = useRef();
  const menuIdfield = useRef();
  const foodNameField = useRef();
  const foodPriceField = useRef();
  const foodDescription = useRef();
  let fileName = useRef("");

  const [hotelfoodList, sethotelfoodList] = useState([]);
  const [hotelList, sethotelList] = useState([]);
  const [hotelMenuList, sethotelMenuList] = useState([]);
  const  [dummyHotelMenuList,setdummyHotelMenuList] = useState([]);

  useEffect(() => {
    loadFoodData();
    loadHotelData();
    loadMenuData();
  }, [])

  const loadFoodData = async () => {
    let res = await axios.get("http://localhost:3000/food/list");
    if (res.status) {
      sethotelfoodList(res.data.foodList);
    }
  }
  const loadHotelData = async () => {
    let res = await axios.get("http://localhost:3000/hotel/hotel-list")
    if (res.status) {
      sethotelList(res.data.hotelList);
    }
  }
  const loadMenuData = async () => {
    let res = await axios.get("http://localhost:3000/menu/list");
    if (res.status) {
      sethotelMenuList(res.data.data);
    }
  }
  const save = async(e) => {
    e.preventDefault();
    let formData =  new FormData();
    formData.append("foodImage",fileName);
    formData.set("hotelId",hotelIdfield.current.value);
    formData.set("menuCategoryId",menuIdfield.current.value);
    formData.set("foodName",foodNameField.current.value);
    formData.set("foodPrice",foodPriceField.current.value);
    formData.set("foodDescription",foodDescription.current.value);
    alert("Data Added");
    console.log(formData);

    // let res =  await axios.post("http://localhost:3000/menu/save");
    // if(res.data.status){
    //   window.alert("Food Saved")
    // }
  }
  const checkHotelMenu = ()=>{
    if(hotelIdfield.current.value==0){
      sethotelMenuList([]);
    }
    else{
      let data =  hotelMenuList.filter((item)=>item.categoryId._id==hotelIdfield.current.value);
      setdummyHotelMenuList(data);
    }
  }
  const onFileChange = (event)=>{
    filename = event.target.files[0];
  }
  return <>
    <div className="content">
    <h1 className="text-center" style={{ fontFamily: "monospace" }}> ADD HOTEL FOOD </h1>
    <hr></hr>
      <form onSubmit={save}>
        <div className="form-group">
          <label for="inputEmail4">Hotel Name </label>
          <select ref={hotelIdfield} className="form-control" onChange={checkHotelMenu}>
            <option keyvalue="0">Select Hotel</option>
            {hotelList.map((item, index) => <option key={index} value={item._id}>
              {item.hotelName}
            </option>)}
          </select>
        </div>
        <div className="form-group">
          <label for="inputEmail4">Menu Title</label>
          <select ref={menuIdfield} className="form-control">
            {dummyHotelMenuList.map((item, index) => <option key={index} value={item._id}>
              {item.hotelMenuName}
              </option>)}
          </select>
        </div>
        <div className="form-group">
          <label>Choose Menu Title</label>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <label for=""> Dish Name</label>
              <input type="text" name="foodName" ref={foodNameField} className="form-control" placeholder="Dish Name" />
            </div>
            <div className="col-lg-6 col-md-6">
              <label for=""> Food Price</label>
              <input type="number" name="foodPrice" ref={foodPriceField} className="form-control" placeholder="Dish Price" />
            </div>
            <div className="col-lg-6 col-md-6">
              <label for=""> Food Description</label>
              <textarea name="foodDescription" ref={foodDescription} className="form-control" placeholder="Food Description"> </textarea>
            </div>
            <div className="col-lg-6 col-md-6">
              <label> Food Image</label>
              <input type="file" onChange={onFileChange} name="foodImage"className="form-control" />
            </div>
            <div className="text-center mt-5">
              <button className="btn btn-outline-dark" type="submit">Add Your Cusisne</button>
            </div>
          </div>
        </div>
      </form>
    </div>

  </>
}