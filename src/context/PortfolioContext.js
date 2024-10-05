import { createContext, useState } from "react";

const PortfolioContext = createContext()

export const PortfolioProvider = ({children}) => {
    const [overlay,setOverlay] = useState(false)
    const [burgerIcon,setBurgerIcon] = useState(false)
    const [theme,setTheme] = useState(() => {
        // Retrieve the theme from localStorage when the app loads
        const savedTheme = localStorage.getItem('mode');
        return savedTheme === 'true' ? true : false;
    });


    const ContactOverlayHandler = () =>{
        setOverlay(true)
    }

    function burgerIconHandler() {
        setBurgerIcon(true)
    }

    const themeHandler = () =>{
        setTheme(prevTheme => {
            const newTheme = !prevTheme;
            localStorage.setItem('mode', newTheme);
            return newTheme;
        });
    }

    const stateData ={
        overlay,
        burgerIcon,
        theme,
        setOverlay,
        ContactOverlayHandler,
        themeHandler,
        setBurgerIcon,
        burgerIconHandler
    }

    return <PortfolioContext.Provider value={stateData}>
        {children}
    </PortfolioContext.Provider>
}

export default PortfolioContext;