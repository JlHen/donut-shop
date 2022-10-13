import './Home.css'
import DonutsList from "./DonutsList";
import {useEffect, useState} from "react";
import {DonutSummary} from "../data-models/donuts";

function Home() {
    useEffect()
    const [donutSummary, setDonutSummary] = useState<DonutSummary[]>([])
    return (
        <div className="Home">
            <DonutsList/>
        </div>
    )
}

export default Home
