// -------------     Counter Functional Component     ---------------

// import React from 'react'
// import './Home.css'

// const Home = (props) => {
//     const dishesList = props.dishes.map((dish) => {
//         return (
//             <div key={dish.id} className='dish-card'>
//                 <p><b>Name:</b> {dish.name}</p>
//                 <p><b>Description:</b> {dish.description}</p>
//                 <p><b>Price:</b> {dish.price}</p>
//             </div>
//         )
//     })
//     return (
//         <div className='home'>
//             <h1>Dishes</h1>
//             <div className='dishes-container'>
//                 { dishesList }
//             </div>
//         </div>
//     )
// }

// export default Home




// -------------     Counter Class Component     ---------------
import React, { Component } from 'react'
import './Home.css'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.dishesList = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className='dish-card'>
                    <p><b>Name:</b> {dish.name}</p>
                    <p><b>Description:</b> {dish.description}</p>
                    <p><b>Price:</b> {dish.price}</p>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='home'>
                <h1>Dishes</h1>
                <div className='dishes-container'>
                    { this.dishesList }
                </div>
            </div>
        )
    }
}

export default Home
