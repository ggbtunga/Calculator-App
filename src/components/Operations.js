import React from "react";

function Operations(props){

    function operationsAction(e){
        let operation = e.target.value
        props.setOperation(operation);
    }

    function calculate(){
      props.result()  
    }

    return(
        <div className="operations">
            <button className="orange" value={"divide"} onClick={operationsAction}>/</button>
            <button className="orange" value={"multi"} onClick={operationsAction}>x</button>
            <button className="orange" value={"sub"} onClick={operationsAction}>-</button>
            <button className="orange" value={"plus"} onClick={operationsAction}>+</button>
            <button className="orange" value={"equal"} onClick={calculate}>=</button>
        </div>
    )
}

export default Operations;