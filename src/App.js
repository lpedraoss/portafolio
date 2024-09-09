import React, { useState, useEffect } from "react";
import "./App.css";
import HeaderPort from "./component/pure/header_portfolio";
import GoToDown from "./component/pure/gotodown";
import CardProjects from "./component/pure/card_project";

import ScrollContext from "./utils/context/scroll_context";

function App() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ isAtTop }}>
      <HeaderPort />
      <GoToDown />
      <section id="content">
        <CardProjects />
      </section>
    </ScrollContext.Provider>
  );
}

export default App;
