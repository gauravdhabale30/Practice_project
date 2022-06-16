import React, { useContext } from "react";
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  return <UserContext.Provider value="Gaurav">{children}</UserContext.Provider>;
};
export const useGolbalContext = () => {
  return useContext(UserContext);
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserContext, UserConsumer };
