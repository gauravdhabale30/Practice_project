import React from "react";

// function Greet() {
//   return <h1>Hello Gaurav</h1>;
// }

// need to include props in function component externaly

//structuring
// const Greet = (props) => {
//   return (
//     <div>
//       <h1>
//         Hello {props.name} {props.surname}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

//destructuring
// 1st Type externaly taking fields
// const Greet = ({ name, surname }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name}
//         {surname}
//       </h1>
//     </div>
//   );
// };

//destructuring
//2nd type taking all field in props

const Greet = (props) => {
  const { name, surname } = props;
  return (
    <div>
      <h1>
        Hello{name}
        {surname}
      </h1>
    </div>
  );
};
export default Greet;
