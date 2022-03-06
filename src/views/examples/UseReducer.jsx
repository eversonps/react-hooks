import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'

import {initialState, reducer} from "../../score/index"
import {numberAdd2, login} from "../../score/actions/index"

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? <span className='text'>{state.user.name}</span> : <span className='text'>Sem Usuário</span>}
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={()=> numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={()=> dispatch({type: "numberAdd", number: 6})}>+6</button>
                    <button className="btn" onClick={()=> login(dispatch, "João")}>Login</button>
                    <button className="btn" onClick={()=> dispatch({type: "multiplica7"})}>*7</button>
                    <button className="btn" onClick={()=> dispatch({type: "divide25"})}>/25</button>
                    <button className="btn" onClick={()=> dispatch({type: "parseInt"})}>Converte Inteiro</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
