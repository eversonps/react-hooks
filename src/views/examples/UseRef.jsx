import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(s1, s2) {
    let v1 = s1.split("")
    let v2 = s2.split("")
    let vResult = []
    let lengthFor

    if(v1.length > v2.length){
        lengthFor = v1.length
    }else{
        lengthFor = v2.length
    }

    for(let i=0; i <= lengthFor; i++){
        if(v1[i]){
            vResult.push(v1[i])
        }

        if(v2[i]){
            vResult.push(v2[i])
        }
    }

    return vResult.join("")
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    const [string, setString] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function(){
        count.current++
        myInput2.current.focus()
        setString(merge(myInput1.current.value, myInput2.current.value))
    }, [value1])

    useEffect(function(){
        count.current++
        myInput1.current.focus()
        setString(merge(myInput1.current.value, myInput2.current.value))
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{string} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                
                <input ref={myInput1} type="text" className="input" value={value1} onChange={e => setValue1(e.target.value)}/>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <input ref={myInput2} type="text" className="input" value={value2} onChange={e => setValue2(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
