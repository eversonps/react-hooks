import React, { useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useState } from 'react'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n){
    if(n < 0) return -1

    if(n === 0) return 1

    return calcFatorial(n - 1) * n
}

function isParOrImpar(n){
    if(n % 2 === 0){
        return "Par"
    }else{
        return "Impar"
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    const [number2, setNumber2] = useState(1)
    const [status, setStatus] = useState("Impar")

    useEffect(function(){
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        if(fatorial > 2000000){
            document.title = fatorial
        }else{
            document.title = "React App"
        }
    }, [fatorial])

    useEffect(function(){
        setStatus(isParOrImpar(number2))
    }, [number2])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className='center'>
                <div>
                    <span className="text"> Fatorial: </span>
                    <span className="text red"> {(fatorial === -1) ? "Não Existe!" : fatorial} </span>
                </div>
                <input type="number" className="input" value={number} onChange={e => {setNumber(+e.target.value)}}/>
            </div>
           
            <SectionTitle title="Exercício #02"></SectionTitle>
            <div className="center">
            <div>
                    <span className="text"> Status: </span>
                    <span className="text red"> {status} </span>
                </div>
                <input type="number" className="input" value={number2} onChange={e => {setNumber2(+e.target.value)}}/>    
            </div>
            
        </div>
    )
}

export default UseEffect
