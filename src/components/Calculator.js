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
        const number = parseFloat(num.replace(',','.'));
        if(props === 'ac'){
            setNum((number*0).toLocaleString('pt-BR'))
            return num
        }else if(props === 'module'){
            if(num<0){
                setNum((Math.abs(number)).toLocaleString('pt-BR'))
            }else{
                setNum((number*-1).toLocaleString('pt-BR'))
            };
            
        }else if(props === 'percent'){
            setNum((number/100).toLocaleString('pt-BR'))  
            console.log(num)
            
        }else{
            return num
        }

    }
    function setOperation(props){
        setOperator(props)
        setOldNum(num)
        setNum(0)
    }
    function result(){
        const oldNumber = parseFloat(oldNum.replace(',','.'));
        const number = parseFloat(num.replace(',','.'));

        switch(operator){
            case 'divide':
                return setNum((oldNumber/number).toLocaleString('pt-BR'))
                
            case 'multi':
                return setNum((oldNumber*number).toLocaleString('pt-BR'))
                
            case 'sub':
                 return setNum((oldNumber-number).toLocaleString('pt-BR'))
                
            case 'plus':
                return setNum((oldNumber+number).toLocaleString('pt-BR'))  
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