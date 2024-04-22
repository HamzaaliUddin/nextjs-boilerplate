'use client'
import { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextApi = ({ children }) => {
    const [counter, setCounter] = useState(0);
    return (
        <AppContext.Provider value={{ counter, setCounter }}>
            {children}
        </AppContext.Provider>
    );
};


// uses
// const { counter, setCounter } = useContext(AppContext);
