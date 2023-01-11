import axios from 'axios';
import React, { useState } from 'react'

export default function ProductTable({ foodList, setFoodList }) {

    const deleteFood = async (id, index) => {
        const res = await axios.get("http://localhost:3000/food/delete/" + id);
        if (res.data.status) {
            alert("Data Deleted ");
            foodList.splice(index, 1);
            setFoodList([...foodList]);
        }
    };
    return (
        <div className='container'>
            {/* <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Hotel Name</th>
                <th scope="col">Menu Type</th>
                <th scope="col">Food Item Name</th>
                <th scope="col"> Food Image</th>
              </tr>
            </thead>
            <tbody>
                {
                    foodList.map((item,index)=>
                    <tr>
                        <td>{index+1}</td>
                        <td>{item.hotelId.hotelName}</td>
                        <td>{item.menuCategoryId.hotelMenuName}</td>
                        <td>{item.foodName}</td>
                        <td><img src={"http://localhost:3000/foodImages/"+item.foodImage}  style={{width:'100px',height:'100px'}}></img></td>
                        <td><button className="btn btn-outline-warning" > Edit</button></td>
                        <td><button className="btn btn-outline-danger"onClick={()=>{deleteFood(item._id,index)}}> Delete</button></td>
                    </tr>
                    )
                }
            </tbody>
          </table> */}
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    foodList.map((item) =>
                        <div class="col-6">
                            <div  class="card text-white bg-dark ">
                            <img src={"http://localhost:3000/foodImages/" + item.foodImage} style={{ width: '500px', height: '320px' }} />
                            <hr/>
                                <div class="card-body">
                                    <h5 class="card-title">{item.foodName}</h5>
                                    <p> {item.hotelId.hotelName}</p>
                                </div>
                                <button className="btn btn-warning"> Buy</button>
                                <button className="btn btn-danger"> Add To Cart</button>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}