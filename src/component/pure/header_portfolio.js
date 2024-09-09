import React, { useContext } from "react";
import ScrollContext from "../../utils/context/scroll_context";
import imagen1 from '../../assets/img/png/character2.png';
import introduction from '../../data/introduction.json';
export default function HeaderPort() {
  const scrolling = useContext(ScrollContext);
  const isAtTop = scrolling.isAtTop ?? false;

  return (
    <header className={`header ${isAtTop ? 'visible' : ''}`}>
      <div className="personal-data">
        <p>Correo: luis@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/luis">linkedin.com/in/luis</a></p>
        <p>GitHub: <a href="https://github.com/luis">github.com/luis</a></p>
      </div>
      <picture className='header-picture'>
        <img src={imagen1} alt="Example" />
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
