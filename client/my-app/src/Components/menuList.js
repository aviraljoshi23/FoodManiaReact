import axios from "axios";
import { useEffect, useState } from "react"

export default function MenuList(){

    const [hotelMenuList,setHotelMenuList] = useState([]);
    useEffect(() => {
        loadMenuData();
    }, []);
    const loadMenuData = async (e) => {
        let res = await axios.get("http://localhost:3000/menu/list");
        if (res.data.status) {
            console.log(res.data.data);
            setHotelMenuList(res.data.data);
        }
    }
    const deleteMenu = async(id,index)=>{
        let confirm =  window.confirm("Are you sure?");
        if(confirm){
            const res = await axios.get("http://localhost:3000/menu/delete/"+id);
            if (res.data.status) {
              hotelMenuList.splice(index, 1);
              setHotelMenuList([...hotelMenuList]);
            }
        }
    }
    return <>
    <div className="content">
    <div className="text-center">
    <h2> Menu List</h2>
    </div>
    <table class="table table-hover">
        <thead>
            <tr>
            <th scope="col">S.No</th>
            <th scope="col">Hotel Name</th>
            <th scope="col">Hotel Area</th>
            <th scope="col">HoteL Menu</th>
            </tr>
        </thead>
        <tbody>
            {hotelMenuList.map((item,index)=>
                        <tr>
                        <th scope="row">{index+1}</th>
                        <td>{item.categoryId.hotelName}</td>
                        <td>{item.categoryId.hotelArea}</td>
                        <td>{item.hotelMenuName}</td>
                        <td> <button onClick={()=>{ deleteMenu(item._id, index) }} className="btn btn-outline-danger"><i className="bi bi-trash3"></i>Delete</button></td>
                        </tr>
            )}
        </tbody>
    </table>
    </div>

    </>
}