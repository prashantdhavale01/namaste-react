import { createContext } from "react";

const UserContext = createContext({
  loggedUser: "Dummy User",
});

export default UserContext;