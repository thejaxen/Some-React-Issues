import React from 'react';

class Counter extends React.Component{
    handleAttack(){
        alert("Attack clicked");
    }
    defendAttack(){
        alert("Defend clicked");
    }
    render(){
        return(
            <div className="row">
                <h1>
                    Counter:
                </h1>
                <button onClick={this.handleAttack} style={{width:"200px"}}>+1</button>
                <p></p>
                <button onClicik={this.defendAttack} style={{width:"200px"}}>-1</button>
            </div>
        );
    }
}

export default Counter;