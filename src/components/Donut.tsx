import './Donut.css'
import {DonutSummary} from "../data-models/donuts"
import {Link} from "react-router-dom"

interface Props {
    donut:DonutSummary
}

function Donut({donut}:Props) {
    return (
        <li>
            <Link to={`/donut/${donut.id}`}>{donut.name}</Link>
        </li>
    )
}

export default Donut
