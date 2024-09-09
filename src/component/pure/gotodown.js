import React, { useContext } from "react";
import ScrollContext from "../../utils/context/scroll_context";

function GoToDown() {
    const scrolling = useContext(ScrollContext);
    const isAtTop = scrolling.isAtTop ?? false;

    return (
        <>
            <span className={`scroll-down ${isAtTop ? 'visible' : 'hidden'}`}>
                <a href="#content">
                    Scroll down
                </a>
            </span>
        </>
    );
}

export default GoToDown;
