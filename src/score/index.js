import reducer from "./reducers"

const initialState = {
    user: null,
    cart: [],
    products: [],
    other: "...",
    number: 0
}

export {
    initialState,
    reducer
}