import axios from 'axios';
import React, {useEffect, useState } from 'react'
import PaginatedItems from './PaginatedItems';


export default function AllFood() {
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
  return (
    <div className='container mt-5 text-center'>
        <h1 className='mt-5 mb-5'>All Food</h1>

        <PaginatedItems itemsPerPage={3} items={foodList} setFoodList={setfoodList}></PaginatedItems>
    </div>
  )
}