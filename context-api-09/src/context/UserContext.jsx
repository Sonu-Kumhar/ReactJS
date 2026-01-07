import React, { createContext } from 'react'

export const UserContextData = createContext();

const UserContext = (props) => {
    
    console.log(props.children)
    return (
        <div>
            <UserContextData.Provider value="Kim ji-won">
                {props.children}
            </UserContextData.Provider>
        </div>
    )
}

export default UserContext