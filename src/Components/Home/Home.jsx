import React, {useState} from "react";
import { Cart } from "../Produt-List-Page/Card/Cart"
import { Header } from "../Produt-List-Page/Header/Header"


export const Home =()=>{
    
    return(
        <div>
            {/* <Header element={addingToCard}/> */}
            <Cart/>
        </div>
    )
}