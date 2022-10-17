import './Home.css'
import DonutsList from "./DonutsList";
import {useEffect, useState} from "react";
import {DonutSummary} from "../data-models/donuts";
import getDonutList from "../external-services/donut-api";
import NavBar from "./nav-bar";

function Home() {
    const [donuts, setDonuts] = useState<DonutSummary[]>([])
    useEffect(()=>{
        getDonutList().then((response)=>{
            setDonuts(response.results)
        })
    })
    return (
        <div className="Home">
            <NavBar/>
            <DonutsList donuts={donuts}/>
        </div>
    )
}

export default Home
