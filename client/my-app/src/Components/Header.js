import { Link } from "react-router-dom"
export default () => {

    return <>
        <nav className="navbar sticky-top navbar-expand-lg" style={{ backgroundColor: "black" }}>
            <Link className="navbar-brand" to="#"><h3>Food Mania</h3></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="#">Action</Link>
                            <Link className="dropdown-item" to="#">Another action</Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="#">Something else here</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link disabled" to="#">Disabled</Link>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <div className="sidebar">
            <Link to="/">Home</Link>
            <Link to="./addHotel">Add Hotel</Link>
            <Link to="./AddFood">Add Food</Link>
            <Link to="./HotelList">Hotel List</Link>
            <Link to="./HotelMenu">Add Hotel Menu</Link>
            <Link to="./MenuList">Menu List</Link>
            <Link to="/food/foodItems">Food Details</Link>
            <Link to="/food/foodList">Your Food Listing</Link>
        </div>

    </>
}