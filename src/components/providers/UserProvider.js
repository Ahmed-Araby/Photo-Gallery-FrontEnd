import React, {createContext, useState} from "react";

export const userContext = createContext(null);

export function UserProvider(props)
{
    /** 
     * user will contain 
     * user personal info:
     * JWT_TOKEN for server authentication and authorization.
     */
    const [user, set_user] = useState(null);
    return (
        <userContext.Provider value={{user:user,
                                     set_user:set_user}}
        >
            {props.children}
        </userContext.Provider>
    )
}