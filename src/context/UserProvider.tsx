import { createContext, useState, useContext, ReactNode } from "react";
import { User, EmptyUser} from "../models";

const userContext = createContext<User>(EmptyUser);
const setUserContext = createContext((user:User) => {console.log(user)});
const voidUserContext = createContext(()=>{});

export const useUserContext = () => useContext(userContext);
export const useSetUserContext = () => useContext(setUserContext);
export const useVoidUserContext = () => useContext(voidUserContext);

type PropsUserProvider = {
  children : ReactNode
}

const UserProvider = ({ children }: PropsUserProvider) => {
  const [user, setUser] = useState(EmptyUser);
  const voidFamily = () => {
    setUser(EmptyUser);
  }

  return (
    <userContext.Provider value={user}>
      <setUserContext.Provider value={setUser}>
          <voidUserContext.Provider value={voidFamily}>
          {children}
          </voidUserContext.Provider>
      </setUserContext.Provider>
    </userContext.Provider>
  );
};

export default UserProvider;
