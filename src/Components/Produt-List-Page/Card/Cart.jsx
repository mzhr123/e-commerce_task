import  {Card,Button,Row}  from "react-bootstrap";
import {productData, productQty} from "../../../Data/ProductData";
import {Link} from "react-router-dom";
import './Cart.css';

export const Cart = () =>{
    return(
      
        <div className="main">
          <Row>
          {productData.product.map((item)=>(
              
              <Card style={{ width: '18rem' }} className="cart">
              <Card.Body>
              <Card.Img className="product_image" src={item.productImage} />
              <Card.Title>{item.productName}</Card.Title>
              <Card.Text>
              ₹{item.productPrice}
              </Card.Text>
              <Link to={`/productdetails?productId=${item.id}`}><Button className="cart_button" variant="secondary">More Details</Button></Link>
              <Button className="cart_button" variant="danger" >Add To Cart</Button>
              </Card.Body>
              </Card>
              
        ))}
          </Row>
        </div>
    )
}