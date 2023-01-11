import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
export default function AddHotel() {
    const navigate =  useNavigate();
    const [hotelList, sethotelList] = useState([])
    const hotelNameField = useRef();
    const hotelAreaField = useRef();

    useEffect(() => {
        loadData();
      }, []);
      const loadData = async () => {
        const response = await axios.get("http://localhost:3000/hotel/hotel-list");
        if (response.status){
          sethotelList(response.data.hotelList);
        }
      };
    const save = async()=>{
        let hotelName =  hotelNameField.current.value;
        let hotelArea  = hotelAreaField.current.value

        const index =  hotelList.findIndex((item)=> item.hotelName == hotelName);
        if(index==-1){
            let data  = {
                hotelName :hotelName,
                hotelArea : hotelArea
            }
            console.log(data);
            await axios.post("http://localhost:3000/hotel/save",{data})
            .then(()=>{
                navigate("/HotelList")
            })   
        }
        else{
            alert("It is alrady in the system");   
        }
    }
    return <>
        <div class="content">
            <h1> ADD YOUR RESTURANT</h1>
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <input type="text" name="hotelName" ref={hotelNameField} class="form-control" placeholder="Hotel Name" />
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <input type="text" name="hotelArea" class="form-control" ref={hotelAreaField} placeholder="Hotel Address" />
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <button class="btn btn-outline-success" type="submit" onClick={save}>Add Hotel</button>
                        </div>
                    </div>
                </div>
        </div>
    </>
}
