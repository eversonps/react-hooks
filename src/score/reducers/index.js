import { reducerNumber } from "./number";
import { reducerUser } from "./user";

export default function reducer(state, action){
    if(action.type == "login"){
        return reducerUser(state, action)
    }else{
        return reducerNumber(state, action)
    }
}