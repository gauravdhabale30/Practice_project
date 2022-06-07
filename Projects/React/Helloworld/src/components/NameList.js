import React from "react";
import Person from "./Person";

// List rendering in funtional component
// also used props in Person component

function NameList() {
  const names = ["Ironman", "Spiderman", "Thor"];
  const nameList = names.map((name, index) => <h1 key={index}>{name}</h1>);
  return (
    <div>
      <div>{nameList}</div>
    </div>
  );
}

// function NameList() {
//   const person = [
//     {
//       name: "Ironman",
//       age: 30,
//       Skill: "React",
//     },
//     {
//       name: "Spiderman",
//       age: 35,
//       Skill: "Angular",
//     },
//     {
//       name: "Thor",
//       age: 40,
//       Skill: "Vue",
//     },
//   ];
// Person componet is added used in application
//   const personList = person.map((person) => (
//     // key is used as unique parameter not for us it is for react
//     <Person key={person.name} persons={person} />
//   ));
//   return (
//     <div>
//       <div>{personList}</div>
//     </div>
//   );
// }

export default NameList;
