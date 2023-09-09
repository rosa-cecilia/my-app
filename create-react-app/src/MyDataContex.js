// Create a context to hold your shared data
import { createContext, useContext, useState } from 'react';

const MyDataContext = createContext();

export function MyDataProvider({ children }) {
    const [sharedData, setSharedData] = useState({});

    return (
        <MyDataContext.Provider value={{ sharedData, setSharedData }}>
            {children}
        </MyDataContext.Provider>
    );
}

export function useMyData() {
    return useContext(MyDataContext);
}
