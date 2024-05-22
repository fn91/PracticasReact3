import React, {createContext, useState} from "react";


export const ThemeContext = createContext ();

    // eslint-disable-next-line react/prop-types
    export const ThemeProvider = ({children}) =>{

        const [theme,setTheme] =useState("light")

        const toggleTheme =() =>{

            setTheme ((prevTheme) =>(prevTheme==="light" ? "dark" : "light"))
        }

        const ThemeContextValues= {
            theme,
            toggleTheme
        }
    



    return(

        <ThemeContext.Provider value={ThemeContextValues}>
            {children}
        </ThemeContext.Provider>
    )




};

