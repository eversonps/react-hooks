export function reducerNumber(state, action){
    switch(action.type){
        case "numberAdd":
            return {...state, number: state.number + action.number}
        case "numberAdd2":
            return {...state, number: state.number + 2}
        case "multiplica7":
            return {...state, number: state.number * 7}
        case "divide25":
            return {...state, number: state.number / 25}
        case "parseInt":
            return {...state, number: parseInt(state.number)}
    }   
}