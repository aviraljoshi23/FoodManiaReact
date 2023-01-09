import axios from "axios";
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function AddMenu() {
    const hotelField = useRef("");
    const hotelMenuField = useRef("");


    const [hotelList, sethotelList] = useState([])
    const [hotelMenuList, setHotelMenuList] = useState([]);

    useEffect(() => {
        loadHotelData();
        loadMenuData();
    }, []);
    const loadHotelData = async () => {

        let res = await axios.get("http://localhost:3000/hotel/hotel-list");
        if (res.status) {
            sethotelList(res.data.hotelList);
        }
    }
    const loadMenuData = async (e) => {
        let res = await axios.get("http://localhost:3000/menu/list");
        if (res.status) {
            console.log(res.data.data);
            setHotelMenuList(res.data.data);
        }
    }
    const save = async (e) => {
        e.preventDefault();
        let menuName = hotelMenuField.current.value;
        // let index =  hotelMenuList.findIndex((item)=>console.log(item.categoryId.hotelName));
        let index =  hotelMenuList.filter((item)=> item.categoryId._id==hotelField.current.value&&item.hotelMenuName==menuName);
        if(index.length==0){
            let data = {
                hotelMenuName: menuName,
                categoryId: hotelField.current.value
            }
            console.log(data);
            const res = await axios.post("http://localhost:3000/menu/save", { data });
            if (res.data.status) {
                console.log(res.data.data)
                setHotelMenuList(res.data.data);
                alert("Hotel Menu Added");
            }
        }
        else{
            alert("Already Exist");
        }
    }

    return <>
        <div class="content">
            <h1 className="text-center" style={{ fontFamily: "monospace" }}> ADD HOTEL MENU </h1>
            <hr />
            <form onSubmit={save}>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Hotel Name </label>
                        <select ref={hotelField} className="form-control">
                            <option keyvalue="0">Select category</option>
                            {hotelList.map((item, index) => <option key={index} value={item._id}>
                                {item.hotelName}
                            </option>)}
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Hotel Menu Name </label>
                        <input  type="type" class="form-control"  ref={hotelMenuField} placeholder="Enter the Menu Title" />
                    </div>
                </div>
                <div className="text-center">
                    <button type="submit" class="btn btn-dark">Add Menu </button>
                </div>
            </form>
        </div>
    </>
}