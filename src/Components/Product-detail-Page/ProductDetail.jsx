import React,{useState, useEffect} from "react"
import {Link, useLocation} from "react-router-dom";
import { Card,Button} from "react-bootstrap";
import {productData} from "../../Data/ProductData"
import './ProductDetail.css';
import * as QueryString from "query-string";


export const ProductDetail =()=>{
    console.log("productData=>",productData);

    const [product,setProduct]=useState(0);
    const params = QueryString.parse(useLocation().search);

    // const handleAddProduct =()=>{
    //         setProduct(product+1);
    // }

    useEffect(()=>{
        console.log("productData===>", productData, "--", params.productId)
        const filteredProd=productData.product.filter(item=>item.id==params.productId); 
        setProduct(filteredProd);
    },[productData])
    return(
        <div>
            {product && product.map((item)=>(
                           <Card >
                           <img className="card_style" src={item.productImage} alt="" />
                           <Card.Body className="card_details">
                             <Card.Title>{item.productName}</Card.Title>
                             <Card.Text>
                             {item.productDiscription}
                             </Card.Text>
                             <Card.Text>
                             ₹{item.productPrice}
                             </Card.Text>
                        </Card.Body>
                        <div className="buttons">
                     <Button variant="danger" onClick="handleAddProduct" className="add_button">Add To Cart </Button>
                     <Link to="/"> <Button variant="secondary" className="back_button" >Back To Home </Button></Link>
                     </div>
                     </Card>
            ))}
 
        </div>
    )
}