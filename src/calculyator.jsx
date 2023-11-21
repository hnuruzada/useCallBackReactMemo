import { useState } from "react"

const Calculator=()=>{
const [num1,setNum1]=useState(0)
const [num2,setNum2]=useState(0)
const [result,setResult]=useState(0)

const handleNum1=(e)=>{
    setNum1(e.target.value)
}
const handleNum2=(e)=>{
    setNum2(e.target.value)
}

const Topla=()=>{
    setResult(parseInt(num1)+parseInt(num2))
}
const Cixma=()=>{
    setResult(num1-num2)
}
const Vurma=()=>{
    setResult(num1*num2)
}
const Bolme=()=>{
    setResult(num2!==0 ? num1/num2 :alert("Sifira bolme yoxdur"))
}


    return{
        num1,
        num2,
        result,
        handleNum1,
        handleNum2,
        Topla,
        Cixma,
        Bolme,
        Vurma
    }
}

export default  Calculator;