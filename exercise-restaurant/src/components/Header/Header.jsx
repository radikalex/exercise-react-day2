// -------------     Counter Functional Component     ---------------

// import React from 'react'
// import './Header.css'

// const Header = () => {
//   return (
//     <header>
//       <nav>
//         <span>Home</span>
//       </nav>
//     </header>
//   )
// }

// export default Header

// -------------     Counter Class Component     ---------------
import React, { Component } from 'react'
import './Header.css'

export class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <span>Home</span>
        </nav>
      </header>
    )
  }
}

export default Header
