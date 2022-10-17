import {useContext} from "react";
import CartContext from "../context/cart-context";
import NavBar from "./nav-bar";
import {DonutDetails} from "../data-models/donuts";

function ShoppingCart() {
    const {donuts,removeDonut} = useContext(CartContext)
    return (
        <div>
            <NavBar/>
            <h1>Shopping Cart</h1>
            <table>
                <tr>
                    <th>Donut</th>
                    <th>Calories</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                {donuts.map((donut)=>{
                   return( <tr>
                            <td>{donut.name}</td>
                            <td>{donut.calories}</td>
                            <td>$1.00</td>
                            <td><button onClick={()=>removeDonut(donut.id)}>Remove</button></td>
                   </tr>
                   )
                })}
            </table>
            <p>{`Total Calories: ${calculateTotalCalories(donuts)}`}
            </p>
            <p>{`Total Price: $${donuts.length}.00`}
            </p>
        </div>
    )
}

function calculateTotalCalories(donuts:DonutDetails[]):number{
    let total:number = 0
    donuts.forEach((donut)=>{
        total += donut.calories
    })
    return total
}

export default ShoppingCart
