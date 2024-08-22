// can use this line for proptype error disable/* eslint-disable react/prop-types */
import React from "react";
import UserContex from "./UserContext";
import PropTypes from "prop-types";

// function UserContextProvider({children}) {
//   const [user, setUser] = React.useState(null)
//   return (
//     <UserContext.Provider>
//    {children}
//     </UserContext.Provider>
//   )
// }
 
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  return (
    <>
      <UserContex.Provider value={{ user, setUser }}>
        {" "}
        {/* The 'value' prop provides the context data that can be accessed by any component consuming this context */}
        {children}
      </UserContex.Provider>
    </>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

//PropTypes.node: This indicates that children can be any renderable element, including a string, number, element, or an array of such items.
//children: PropTypes.string.isRequired, // `children` must be a string and is required
//children: PropTypes.number.isRequired

export default UserContextProvider;
