/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import attack from "./attack.png";
import defend from "./defend.png";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAttack = this.handleAttack.bind(this);
        this.handleDefence = this.handleDefence.bind(this);
        this.resetGame = this.resetGame.bind(this);
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
        return{count: previousState.count - 1,};
     });   
    }

    resetGame(){
        this.setState((previousState) => {
           return{count: previousState.count = 0,}; 
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
                    border: "4px solid red",}}  className="p-4 rounded" src={attack} onClick={this.handleAttack}
                ></img>
                </div> 
                <div className="col-6 col-md-3 offset-md-0">
                <img style ={{
                    width:"100px",
                    cursor:"pointer",
                    border: "4px solid blue",}}  className="p-4 rounded" src={defend} onClick={this.handleDefence}
                ></img>
                </div>
                <div className="col-12 col-md-4 offset-md-4">
                <button className="btn btn-secondary w-100 mt-2">Random Play</button>
                <br></br>
                <button className="btn btn-warning w-100 mt-2" onClick={this.resetGame}>Reset</button>
                </div>   
            </div>
        );
    }
}

export default Counter;