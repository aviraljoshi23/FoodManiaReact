import axios from "axios";
import { useEffect } from "react"

export default  function FoodList(){

    const [foodList, setfoodList] = useState([])

    useEffect(()=>{
        loadFoodList();
    })
    const loadFoodLis = async()=>{
        let res =   await axios.get("http://localhost:")
    }

    return  <>
    <div className="content">

    </div>
    </>
}