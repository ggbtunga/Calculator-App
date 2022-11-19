import React from "react";

function Numbers(props){


    function inputNum(e){
        console.log(e.target.value)
        props.newNum(e.target.value)
    }

    return(
        <div>
            <div className="numbers">
                <button value={7} onClick={inputNum}>7</button>
                <button value={8} onClick={inputNum}>8</button>
                <button value={9} onClick={inputNum}>9</button>
            </div>
            <div className="numbers">
                <button value={4} onClick={inputNum}>4</button>
                <button value={5} onClick={inputNum}>5</button>
                <button value={6} onClick={inputNum}>6</button> 
            </div>
            <div className="numbers">
                <button value={1} onClick={inputNum}>1</button>
                <button value={2} onClick={inputNum}>2</button>
                <button value={3} onClick={inputNum}>3</button>
            </div>
            <div className="numbers">
                <button id="zero" value={0} onClick={inputNum}>0</button>
                <button value={","} onClick={inputNum}>,</button>
            </div>
        </div>
     
        
    )
}

export default Numbers;