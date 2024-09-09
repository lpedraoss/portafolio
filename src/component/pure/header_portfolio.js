import React, { useContext } from "react";
import ScrollContext from "../../utils/context/scroll_context";
import imagen1 from '../../assets/img/png/character2.png';
import introduction from '../../data/introduction.json';

export default function HeaderPort() {
  const scrolling = useContext(ScrollContext);
  const isAtTop = scrolling.isAtTop ?? false;

  return (
    <header className={`header ${isAtTop ? 'visible' : 'scrolled'}`}>
      <div className="personal-data">
        <p>Correo: luigix17@duck.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/alfonso-dev/">linkedin.com/in/alfonso-dev</a></p>
        <p>GitHub: <a href="https://github.com/lpedraoss">github.com/lpedraoss</a></p>
        <p>Universidad: Universidad Nacional de Colombia, sede Bogotá</p>
        <p>Estudiante de: Ingeniería de Sistemas y Computación</p>
      </div>
      <picture className='header-picture'>
        <img src={imagen1} alt="luis" />
      </picture>
      <h1 className='header-title'>Hola, soy Luis</h1>
      <div>
        <p className='intro-paragraph'>
          <strong>Mi Portafolio</strong>: {introduction.introText}
        </p>
      </div>
    </header>
  );
}
