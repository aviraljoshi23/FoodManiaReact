import axios from "axios";
import { useEffect, useState } from "react"
export default function GetFood() {
    const [foodList, setfoodList] = useState([])

    useEffect(() => {
        loadFoodList();
    })
    const loadFoodList = async () => {
        let res = await axios.get("http://localhost:3000/food/list")
        if (res.data.status) {
            setfoodList(res.data.foodList);
        }
    }
    return <>
        <div className="content">
            <h1 className="text-center" style={{ fontFamily: "monospace" }}> HOTEL DISHES </h1>
            <hr />
            <div class="card-deck">
                <div className="row">
                    {
                        foodList.map((item) =>
                            // <div class="card col md-4">
                            //     <img src={"http://localhost:3000/foodImages/"+item.foodImage} style={{width:'300px',height:'200px'}}/>
                            //     <div class="card-body">
                            //         <h5 class="card-title">{item.foodName}</h5>
                            //         <h5 class="card-title">Rs {item.foodPrice}</h5>
                            //         <p> {item.hotelId.hotelName}</p>
                            //         <hr/>
                            //         <button className="btn btn-dark mr-5"> Buy</button>
                            //         <button className="btn btn-danger"> Add To Cart</button>
                            //     </div>
                            // </div>
                            <div class="col-3">
                                <div class="card">
                                    <img src={"http://localhost:3000/foodImages/" + item.foodImage} style={{ width: '258px', height: '200px' }} />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.foodName}</h5>
                                        <h5 class="card-title">Rs {item.foodPrice}</h5>
                                        <p> {item.hotelId.hotelName}</p>
                                        <hr />
                                        <button className="btn btn-dark mr-5"> Buy</button>
                                        <button className="btn btn-danger"> Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </>
}