import React, { Component } from 'react'



export default class App extends Component {
  constructor(props) {
    super(props)

    this.input = React.createRef()

  }

  handleSubmit = (event) => {
    event.preventDefault()

  }


  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.input} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}










// import React from "react";



// const App = () => {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <Wrapper>
//         <Header />
//         <Body />
//         <Footer />
//       </Wrapper>
//     </div>
//   )
// }

// const Wrapper = (props) => {
//   // console.log(props);
//   return <>{props.children}</>
// }

// const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

// const Body = () => {
//   return (
//     <div>Body</div>
//   )
// }

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }



// export default App