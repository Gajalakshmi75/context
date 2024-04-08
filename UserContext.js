import React from 'react';

const intitalState={
    firstName:"Chinni",
    lastname:"gaja",
    email:"gaja@gmail.com",
};
export const UserContext=React.createContext();

const UserContextProvider=({Children})=>{
    return <UserContext.Provider value={intitalState}>
        {Children}
    </UserContext.Provider>
}