import axios from "axios";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditHotel() {
    const location = useLocation();
    const hotelNameField = useRef();
    const hotelAreaField = useRef();
    const navigate  = useNavigate();

    const updateHotel = async (e) => {
        e.preventDefault();
        let hotelObject = {
            _id: location.state.hotelDetailObject._id,
            hotelName: hotelNameField.current.value,
            hotelArea:hotelAreaField.current.value
        }
        let res =  await axios.post("http://localhost:3000/hotel/update",hotelObject);
        if(res.data.status){
            window.alert(res.data.mess);
            navigate("/hotelList"); 
        }
    }
    return <>
        <div className="content">
        <h1 className="text-center" style={{ fontFamily: "monospace" }}> EDIT HOTEL </h1>
            <form onSubmit={updateHotel} className="mt-5 mb-5">
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <input ref={hotelNameField} defaultValue={location.state.hotelDetailObject.hotelName} type="text" name="hotelName" class="form-control" placeholder="Hotel Name" />
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <input ref={hotelAreaField} defaultValue={location.state.hotelDetailObject.hotelArea} type="text" name="hotelArea" class="form-control" placeholder="Hotel Address" />
                        </div>
                        <div class="col-lg-3 col-md-3">
                            <button class="btn btn-outline-success" type="submit" >Update Hotel</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
}