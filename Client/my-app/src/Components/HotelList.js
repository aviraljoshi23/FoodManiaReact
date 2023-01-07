import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
export default function HotelList(){
  const [hotelList, sethotelList] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    const response = await axios.get("http://localhost:3000/hotel/hotel-list");
    if (response.status) {
      sethotelList(response.data.hotelList);
    }
  };
  const deleteHotel = async (id, index) => {
    const res = await axios.get("http://localhost:3000/hotel/delete/"+id);
    if (res.data.status) {
      hotelList.splice(index, 1);
      sethotelList([...hotelList]);
    }
  };
  const updateHotel = async(item)=>{
    navigate("/EditHotel",{state:{hotelDetailObject:item}});

  }
  return <>
    <div className="content">
      <div className="container-fluid">
        <form>
          <label>Hotel Name</label>
          <input type="text" placeholder="Hotel Name" name="search" />
          <button type="submit" value="Search" className="btn btn-primary">Search Here</button>
        </form>
        <main className="tm-main">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Hotel Name</th>
                <th scope="col">Hotel Address</th>
                <th scope="col">Edit It</th>
                <th scope="col"> Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                hotelList.map((item, index) =>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.hotelName}</td>
                    <td>{item.hotelArea}</td>
                    <td>
                        <button className="btn btn-primary" onClick={()=>{updateHotel(item)}}><i className="bi bi-credit-card"></i>Edit</button>
                    </td>
                    <td>
                      <button onClick={()=>{ deleteHotel(item._id, index) }} className="btn btn-outline-danger"><i className="bi bi-trash3"></i>Delete</button>
                    </td>
                  </tr>
                )
              }

            </tbody>
          </table>
        </main>
      </div>
    </div>
  </>
}