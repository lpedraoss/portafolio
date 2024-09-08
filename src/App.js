import React from 'react';
import './App.css';

import introduction from './data/introduction.json';
import HeaderPort from './component/pure/header_portfolio';
import GoToDown from './component/pure/gotodown';
import CardProjects from './component/pure/card_project';
import { ScrollProvider } from './utils/context/scroll_provider';

function App() {
  return (
    <ScrollProvider>
      <div>
        <HeaderPort />
        <p className="intro-paragraph">
          {introduction.introText}
        </p>
        <section id="content">
          <h1>Contenido del portfolio</h1>
          {/* Resto del contenido */}
          <CardProjects />
        </section>
        <GoToDown />
      </div>
    </ScrollProvider>
  );
}

export default App;
