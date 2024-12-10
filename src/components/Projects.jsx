import React from 'react';
import './Projects.css';
import projectweb from '../assets/projectweb.svg';
import bisnis from '../assets/bisnis.svg';
import pakaian from '../assets/pakaian.svg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      category: 'Web Design',
      title: 'AirCalling Landing Page Design',
      image: projectweb,
    },
    {
      id: 2,
      category: 'Web Design',
      title: 'Business Landing Page Design',
      image: bisnis,
    },
    {
      id: 3,
      category: 'Web Design',
      title: 'Ecom Web Page Design',
      image: pakaian,
    },
  ];

  return (
    <section className="projects-section" id='project'>
      <h2 className="projects-title">My Projects</h2><br />
      <p className="projects-description">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus<br /> lectus.
        Phasellus consequat urna tellus.
      </p>

      <div className="categories">
        <button className="category-button">All</button>
        <button className="category-button">UI/UX</button>
        <button className="category-button active">Web Design</button>
        <button className="category-button">App Design</button>
        <button className="category-button">Graphic Design</button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-category">{project.category}</h3>
            <h4 className="project-title">{project.title}</h4>
            <button className="project-detail-button">Detail</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;