import {DonutSummary} from "../data-models/donuts";
import {DonutDetails} from "../data-models/donuts";
import axios from "axios";

export default function getDonutList():Promise<DonutListResponse> {
    return axios.get("https://grandcircusco.github.io/demo-apis/donuts.json").then((response)=>response.data)
}

export function getDonut(url:string):Promise<DonutDetails> {
     return axios.get(url).then((response)=>{
         return response.data
     })
}

export interface DonutListResponse {
    count:number
    results:DonutSummary[]
}

export interface DonutDetailsResponse {
    donut:DonutDetails
}