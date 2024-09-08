import { useState, useEffect } from "react";
import ScrollContext from "./scroll_context";



// Proveedor del contexto
export const ScrollProvider = ({ children }) => {
    const [isVisible, setIsVisible] = useState(true);

    // Aquí puedes manejar el estado relacionado al scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY < 100); // Solo como ejemplo
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ScrollContext.Provider value={{ isVisible }}>
            {children}
        </ScrollContext.Provider>
    );
};

export default ScrollContext;
