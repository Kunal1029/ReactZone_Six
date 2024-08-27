/* eslint-disable react/prop-types */
import HiContext from "./Hi";
import { useState } from "react";

export const HiContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <HiContext.Provider value={{ user, setUser }}>
            {children}
        </HiContext.Provider>
    );
};





