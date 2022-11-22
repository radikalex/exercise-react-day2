// -------------     Counter Functional Component     ---------------

// import React from 'react'
// import { useState } from "react";

// const Counter = (props) => {
//     const [counter, setCounter] = useState(props.initialValue);
//     const increment = () => {
//         setCounter(counter + props.incValue);
//     };
//     const decrement = () => {
//         setCounter(counter - props.incValue);
//     };
//     return (
//         <div className='container-counter'>
//             <button onClick={increment}>-</button>
//             <span>Counter: {counter}</span>
//             <button onClick={decrement}>+</button>
//         </div>
//     )
// }

// export default Counter


// -------------     Counter Class Component     ---------------
import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.initialValue
        }
    }
    increment = () => {
        this.setState({ counter: this.state.counter + this.props.incValue});
    };
    decrement = () => {
        this.setState({ counter: this.state.counter - this.props.incValue});
    };
    render() {
        return (
        <div>
            <div className='container-counter'>
                <button onClick={this.increment}>-</button>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.decrement}>+</button>
            </div>
        </div>
        )
    }
}

export default Counter
