import {Navbar} from "react-bootstrap"
import './Header.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {productQty} from "../../../Data/ProductData";

export const Header =({item})=>{
    return(
        <div>
            <div>
       <Navbar bg="dark" variant="dark">
           
            <Navbar.Brand href="#home"><h2>Time 2 SHOP</h2> </Navbar.Brand>
            <a href="///">
            <ShoppingCartIcon className="icon" href=""  />
            </a>
            <p style={{color:"white"} }>{item}</p>
 
        </Navbar>
        </div>
        <div className="header-img">
        <img className="watch" src="./Assets/Images/header.jpg"height="400px" width="100%" alt="" />
        </div>

        </div>
    )
}