import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Timer from './Timer';

const Index = () => {
    return(
        <div className="main">Hello !!!</div>
    )
}

ReactDOM.render(<Timer/>,document.getElementById('app'));