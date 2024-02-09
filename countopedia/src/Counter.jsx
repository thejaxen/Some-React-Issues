import React from 'react';
import attack from "./attack.png";
import defend from "./defend.png";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence=this.handleDefence.bind(this);
        this.state = {
            count:0,
        };
    }
    handleAttack(){
        this.setState((previousState) => {
            return{
                count: previousState.count + 1,
            };
        });
    }
    handleDefence(){
     this.setState((previousState) => {
        return{count: this.state.count - 1,};
     });   
    }
    
    render(){
        return(
            <div className="row text-center">
                <h1>
                    Game Score:{this.state.count}
                </h1>
                <p>You win at +20 points and lose at -20 points</p>
                <p>Last Play :</p>
                <h3>Game Status :</h3>
                <div className="col-6 col-md-3 offset-md-3"> 
                <img style ={{
                    width:"100px",
                    cursor:"pointer",
                    border: "1px solid green",}}  className="p-4 rounded" src={attack} onClick={this.handleAttack}
                ></img>
                </div>
                <button onClick={this.handleAttack} style={{width:"200px"}}>+1</button>
                <p></p>
                <button onClick={this.handleDefence} style={{width:"200px"}}>-1</button>    
            </div>
        );
    }
}

export default Counter;