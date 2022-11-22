// ------------     Greeting Functional Component     -----------------

// import React, { useState, useEffect } from 'react'

// const Greeting = (props) => {
//     const [name, setName] = useState(props.name);
//     useEffect(() => {
//         setTimeout(() => {
//             setName("Alfonsina");
//         }, 3000);
//     }, []);
//     return (
//         <div>
//             <p>Hola {name}</p>
//         </div>
//     )
// }

// export default Greeting


// ------------     Greeting Class Component     -----------------
import React, { Component } from 'react'

export class Greeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.name
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "Alfonsina" });
        }, 3000);
    }
    render() {
        return (
            <div>
               <p>Hola {this.state.name}</p>
           </div>
        )
    }
}

export default Greeting