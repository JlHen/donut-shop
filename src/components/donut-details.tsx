import {DonutDetails} from "../data-models/donuts";
import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import {getDonut} from "../external-services/donut-api";
import CartContext from "../context/cart-context";
import NavBar from "./nav-bar";

function DonutDetailsPage() {
    const [donut, setDonut] = useState<DonutDetails>({name:"", calories:0, extras: [], id: 0, ref: "", photo: "", photo_attribution: ""})
    const donutId:string = useParams().id || ""
    const {addDonut} = useContext(CartContext)
    useEffect(()=>{
        getDonut(`https://grandcircusco.github.io/demo-apis/donuts/${donutId}.json`).then((response)=>{
            setDonut(response)
        })
    })
    return (
        <div className="DonutDetails">
            <NavBar/>
            <h1>Donut Details</h1><button onClick={()=>addDonut(donut)}>Add to Cart</button>
            <p>
                Name: {donut.name}<br/>
                Calories: {donut.calories}<br/>
                Extras:
                <ul>
                    {donut.extras.map((extra)=><li>{extra}</li>)}
                </ul>
                <img src={donut.photo} width='300' height='300' alt={donut.name}/><br/>
                Photo attribution: <a href={donut.photo_attribution}>{donut.photo_attribution}</a>
            </p>
        </div>
    )
}

export default DonutDetailsPage
