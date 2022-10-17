import './DonutsList.css'
import {DonutSummary} from "../data-models/donuts";
import Donut from "./Donut";

interface Props {
    donuts:DonutSummary[]
}

function DonutsList({donuts}:Props) {
    return (
        <ul>
            {donuts.map((donut)=><Donut key={donut.id} donut={donut}/>)}
        </ul>
    )
}

export default DonutsList
