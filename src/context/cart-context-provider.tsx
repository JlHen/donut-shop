import {ReactNode, useState} from "react";
import {DonutDetails} from "../data-models/donuts";
import CartContext from "./cart-context";

interface Props {
    children: ReactNode
}

function CartContextProvider({children}:Props) {
    const [donuts, setDonutsInCart] = useState<DonutDetails[]>([])
    function addDonut(donutToAdd:DonutDetails): void {
        setDonutsInCart((previousState)=>[...previousState, donutToAdd])
    }
    function removeDonut(donutId:number):void {
        setDonutsInCart((previousState)=>{
            const index: number = previousState.findIndex((donut)=>donut.id === donutId)
            return [...previousState.slice(0,index), ...previousState.slice(index+1)]
        })
    }
    return (
        <CartContext.Provider value={{donuts, addDonut, removeDonut}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
