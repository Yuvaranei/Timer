import React, {Component} from 'react';
import './Timer.scss';

export default class TicTacToe extends Component{
    constructor(props){
        super(props);
        this.updateCounter = this.updateCounter.bind(this);
        this.state = {
            counter : 0,
            timerStatus : 'clear'
        }
    }

    updateTimer(status){
        if(status === 'pause-resume' && this.state.timerStatus === status){
            status = 'start';
        }
        this.setState({
            timerStatus : status
        })
        if(status === 'start'){
            clearInterval(this.timeInterval);
            this.timeInterval = setInterval(this.updateCounter,1000);
        }
        else if(status === 'clear'){
            this.setState({
                counter : 0
            })
            clearInterval(this.timeInterval);
        }
    }

    updateCounter(){
        if(this.state.timerStatus === 'start'){
            this.setState((state) => ({
                counter : state.counter + 1
            }))
        }
    }

    render(){
        const disableStartButton = this.state.counter ? true : false;
        return(
            <div className="timer-container">
               <div className = "timer-controllers">
                    <button onClick={this.updateTimer.bind(this,'start')} disable={disableStartButton}>Start</button>
                    <button onClick={this.updateTimer.bind(this,'pause-resume')}>Pause / Resume</button>
                    <button onClick={this.updateTimer.bind(this,'clear')}>Clear</button>
               </div>
               <div className="timer-counter">
                    Counter : {this.state.counter}
               </div>
            </div>            
        )
    }
}