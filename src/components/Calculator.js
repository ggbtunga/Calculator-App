import React, { useState } from "react";
import Module from "./Module"
import Numbers from "./Numbers"
import Operations from "./Operations"



function Calculator(){

    const [num,setNum] = useState(0)
    const [oldNum,setOldNum] = useState(0)
    const [operator,setOperator] = useState()

    function newNum(props){
        if(num===0){
            setNum(props)
        } else{
            setNum(num+props)
        }     
    }
    function setOptions(props){
        switch(props){
            case 'ac':
                return setNum(0);
            case 'module':
                    if(num<0){
                        setNum(Math.abs(num))
                    }else{
                        setNum(num*-1)
                    };
                    break
            case 'percent':
                setNum(num/100) 
                break
            default:
                return num     
        }
    }
    function setOperation(props){
        let operatorSelect = props
        setOperator(operatorSelect)
        setOldNum(num)
        setNum(0)
    }
    function result(){
        const oldNumber = parseFloat(oldNum.replace(',','.'));
        const number = parseFloat(num.replace(',','.'));

        switch(operator){
            case 'divide':
                setNum((oldNumber/number).toLocaleString('pt-BR'))
                break;
            case 'multi':
                setNum((oldNumber*number).toLocaleString('pt-BR'))
                break;
            case 'sub':
                setNum((oldNumber-number).toLocaleString('pt-BR'))
                break;
            case 'plus':
                setNum((oldNumber+number).toLocaleString('pt-BR'))
                break
            default:
                return num;        
        }  
    }

    return(
        <div className="wrap">
            <p className="result">{num}</p>
            <div className="calc">
                <div className="left">
                    <Module setOptions={setOptions}/>
                    <Numbers newNum={newNum}/>
                </div>
                <div className="right">
                    <Operations setOperation={setOperation} result={result}/>
                </div>
            </div> 
        </div>
        
    )
}

export default Calculator;