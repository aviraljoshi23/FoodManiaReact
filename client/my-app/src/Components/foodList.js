import { useContext } from "react"
import MasterContext from "./MasterContext";
export default  function FoodList({setfoodlist}){
    const {foodList} = useContext(MasterContext);
    //const [foodList, setfoodList] = useState([])
    // useEffect(()=>{
    //     loadFoodList();
    // })
    // const loadFoodList = async () => {
    //     let res = await axios.get("http://localhost:3000/food/list")
    //     if (res.data.status) {
    //         setfoodList(res.data.foodList);
    //     }
    //   }
      const deleteFood = async(id,index)=>{
        let res =  await axios.get("http://localhost:3000/food/delete/"+id);
        if(res.data.status){
          alert("Deleted Successfully");
          foodList.splice(index, 1);
          setfoodlist([...foodList]);
        }
      }
    return  <>
    <div className="content">
    <table className="table table-hover">
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
          </table>
    </div>
    </>
}