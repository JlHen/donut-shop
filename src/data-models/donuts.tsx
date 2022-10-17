export interface DonutSummary {
    id: number
    ref: string
    photo: string
    photo_attribution: string
    name: string
}

export interface DonutDetails {
    id:number
    ref:string
    name:string
    calories:number
    extras:string[]
    photo: string
    photo_attribution: string
}
