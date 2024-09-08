import React, { useState, useEffect } from 'react';
import projectsData from '../../data/project.json';

function CardProjects() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    setProjectList(projectsData);
  }, []);

  return (
    <section className='card-container'>
      {projectList.map((project, index) => (
        <a key={index} href={project.url} target="_blank" rel="noopener noreferrer">
          <div>
            <span>{project.nombre}</span>
          </div>
          <article className='card'>
            <picture>
              <img src={require(`../../assets/img/png/${project.imagen}`)} alt={project.nombre} />
            </picture>
          </article>
        </a>
      ))}
    </section>
  );
}

export default CardProjects;
