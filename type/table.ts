export type Form ={
    id:number;
    day:string;
    name:string;
    amount:number;
    number:number;
    total:number;
};

export type DateGroup = {
    date: string;
    items: Form[];
}