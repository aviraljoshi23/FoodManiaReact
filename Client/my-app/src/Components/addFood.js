export default ()=>{
    return <>
    <div class="content">
  <h1> ADD YOUR FOOD</h1>
    <form action="/" method="post" enctype="multipart/form-data">

      <div class="form-group">
                <label>Choose Your Hotel Name</label>
                <select name="categoryId" class="form-control">
                    <option>Select category</option>
                </select>
          </div>
        <div class="form-group">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <label for=""> Dish Name</label>
                <input type="text" name="foodName" class="form-control" placeholder="Dish Name"/>
            </div>
            <div class="col-lg-6 col-md-6">
              <label for=""> Foo Price</label>
                <input type="number" name="foodPrice" class="form-control" placeholder="Dish Price"/>
            </div>
            <div class="col-lg-6 col-md-6">
              <label for=""> Food Quantity</label>
                <input type="number" name="foodQty" class="form-control" placeholder="Food Quanity"/>
            </div>
            <div class="col-lg-6 col-md-6">
              <label for=""> Food Description</label>
                <textarea  name="foodDescription" class="form-control" placeholder="Food Description"> </textarea>
            </div>
            <div class="col-lg-6 col-md-6">
              <label> Food Image</label>
                <input type="file" name="foodImage" class="form-control" />
            </div>
            <div class="col-lg-3 col-md-3">
              <button class="btn btn-outline-success" type="submit">Add Your Cusisne</button>
            </div>
          </div>
        </div>
      </form>
</div>
    
    </>
}