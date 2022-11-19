import React from "react";

function Module(props){

    function moduleOptions(e){
        let action = e.target.value
        props.setOptions(action)
    }

    return(
        <div className="module">
            <button className="grey" value={"ac"} onClick={moduleOptions}>AC</button>
            <button className="grey" value={"module"} onClick={moduleOptions}>+/-</button>
            <button className="grey" value={"percent"} onClick={moduleOptions}>%</button>
        </div>
    )
}

export default Module;