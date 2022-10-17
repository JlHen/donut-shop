import {createContext} from "react";
import {DonutDetails} from "../data-models/donuts";

interface CartContextModel {
    donuts:DonutDetails[]
    addDonut: (donutToAdd:DonutDetails)=>void
    removeDonut: (donutId:number)=>void
}

const defaultCart: CartContextModel = {
    donuts: [],
    addDonut: ()=>{},
    removeDonut: ()=>{},
}

const CartContext = createContext(defaultCart)

export default CartContext