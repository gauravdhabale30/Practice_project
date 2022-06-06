import React from "react";

function Person({ persons }) {
  return (
    <div>
      <h2>
        I am {persons.name} my age is {persons.age} my skills are{" "}
        {persons.Skill}
      </h2>
    </div>
  );
}

export default Person;
