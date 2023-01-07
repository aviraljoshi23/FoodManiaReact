import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AddMenu() {
    const hotelNameField =  useRef("");
    const hotelMenuField = useRef("");
    const hotelMenuTimingField = useRef("");
    const [hotelList, sethotelList] = useState([])

    useEffect(() => {
        loadHotelData();
    }, []);
    const loadHotelData = async () => {

        let res = await axios.get("http://localhost:3000/hotel/hotel-list");
        if (res.status) {
            sethotelList(res.data.hotelList);
            console.log(hotelList);
        }
    }
    
    return <>
        <div class="content">
            <h1 className="text-center" style={{fontFamily:"monospace"}}> ADD HOTEL MENU </h1>
            <hr />
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Hotel Name </label>
                        <select ref={hotelNameField} className="form-control">
                            <option value="0">Select category</option>
                            {hotelList.map((item,index)=><option value={item._id}>
                                {item.hotelName}
                            </option>)}
                            </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Hotel Menu Name </label>
                        <input type="password" class="form-control" id="inputPassword4" ref = {hotelMenuField} placeholder="Enter the Menu Title"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">Available From </label>
                        <input type="time" class="form-control" ref={hotelMenuTimingField} id="inputCity"/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputCity">Available Till </label>
                        <input type="time" class="form-control" ref={hotelMenuTimingField} id="inputCity"/>
                    </div>
                </div>
                <div className="text-center">
                <button type="submit" class="btn btn-dark">Add Menu </button>
                </div>
            </form>
        </div>
    </>
}