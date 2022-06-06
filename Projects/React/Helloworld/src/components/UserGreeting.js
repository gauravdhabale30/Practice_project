// import React, { Component } from "react";

// class UserGreeting extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { isLoggedIn: true };
//   }

//   old approch
//   render() {
//     if (this.state.isLoggedIn) {
//       return <div>Hello Gaurav</div>;
//     } else {
//       return <div>Hello Guest</div>;
//     }
//   }

//   element variable approch
//       render() {
//           let message
//     if (this.state.isLoggedIn) {
//      message=  <div>Hello Gaurav</div>;
//     } else {
//      message=  <div>Hello Guest</div>;
//     }
//      return <diV>{message}</div>
//
//   }
// }

// funtional component using ternary operator try to use this approch
import React, { useState } from "react";

// function UserGreeting() {
//   const [isLoggedIn, setLoggedIn] = useState(true);
//   return (
//     <div>
//       <div>
//         {isLoggedIn ? <div>Welcome Gaurav</div> : <div>Welcome Guest</div>}
//       </div>
//     </div>
//   );
// }

// funtional component using shortcircuit operator if true will display else will not display

function UserGreeting() {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <div>
      <div>{isLoggedIn && <div>Welcome Gaurav</div>}</div>
    </div>
  );
}

export default UserGreeting;
