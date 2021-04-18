import React, { Component } from 'react'
import { useState } from "react"



function App() {

  const [searchValue, setSearchValue] = useState("")

  return (
    <div style={{ textAlign: "center" }}>
      <input 
        type="search" 
        name="find-movie"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  )
}



export default App




//   handleSubmit = (event) => {
//     event.preventDefault()

//   }

//   componentDidUpdate() {
//     console.log("co");
//   }


//   render() {
//     return (
//       <div style={{ textAlign: "center" }}>
//         <form onSubmit={this.handleSubmit}>
//           <input type="text" ref={this.input} />
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     )
//   }
// }










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