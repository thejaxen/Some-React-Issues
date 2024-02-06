import React from 'react';

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
        
        this.setState({count: this.state.count + 1});
    }
    handleDefence(){
        
        this.setState({count: this.state.count - 1});
    }
    render(){
        return(
            <div className="row">
                <h1>
                    Counter:{this.state.count}
                </h1>
                <button onClick={this.handleAttack} style={{width:"200px"}}>+1</button>
                <p></p>
                <button onClick={this.handleDefence} style={{width:"200px"}}>-1</button>
            </div>
        );
    }
}

export default Counter;