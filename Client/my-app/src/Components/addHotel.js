import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
export default function AddHotel() {
    const navigate = useNavigate();
    const [hotelList, sethotelList] = useState([])
    const hotelNameField = useRef();
    const hotelAreaField = useRef();

    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
        const response = await axios.get("http://localhost:3000/hotel/hotel-list");
        if (response.status) {
            sethotelList(response.data.hotelList);
        }
    };

    const save = async (e) => {
        e.preventDefault();

        let hotelName = hotelNameField.current.value;
        let hotelArea = hotelAreaField.current.value;

        if(hotelName!=""&&hotelArea!=""){
            const index = hotelList.findIndex((item) => item.hotelName == hotelName);
            if (index == -1) {
                let data = {
                    hotelName: hotelName,
                    hotelArea: hotelArea
                }
                console.log(data);
                await axios.post("http://localhost:3000/hotel/save", { data })
                    .then(() => {
                        navigate("/HotelList");
                    })
            }
            else {
                alert("It is alrady in the system");
            }
        }
        else{
            window.alert("No their  is no data");
        }
    }
    return <>
        <div class="content">
            <h1> ADD YOUR RESTURANT</h1>
            <form onSubmit={save} >
                <div class="form-group">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <input type="text" name="hotelName" ref={hotelNameField} class="form-control" placeholder="Hotel Name" />
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <input type="text" name="hotelArea" class="form-control" ref={hotelAreaField} placeholder="Hotel Address" />
                        </div>
                    </div>
                </div>
                <div class="text-center">
                            <button class="btn btn-outline-dark" type="submit" >Add Hotel</button>
                </div>
            </form>
        </div>
    </>
}
