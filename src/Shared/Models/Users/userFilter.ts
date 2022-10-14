import {baseFilter} from "../baseFilter"

export interface userFilter extends baseFilter  {
    userName?:string,
    gender?:string,
    lastActive?:boolean,
    createDate?:boolean,
    minAge?:number
    maxAge?:number
}
