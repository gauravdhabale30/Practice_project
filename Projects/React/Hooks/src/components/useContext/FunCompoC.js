import React, { useContext } from "react";
import { UserProvider } from "./UserContext";
import { useGolbalContext } from "./UserContext";

function FunCompoC() {
  const data = useGolbalContext();
  console.log(data);
  const user = UserProvider(UserProvider);
  return (
    <div>
      Functiona component C <div>Hello {data}</div>
    </div>
  );
}

export default FunCompoC;
