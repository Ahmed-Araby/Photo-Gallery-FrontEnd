import React, {createContext, useState} from "react";

export const userContext = createContext(null);

export function UserProvider(props)
{
    const [user, set_user] = useState({});
    return (
        <userContext.Provider value={{user:user,
                                     set_user:set_user}}
        >
            {props.children}
        </userContext.Provider>
    )
}