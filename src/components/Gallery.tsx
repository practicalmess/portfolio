/**
 * Gallery.tsx
 *
 * Hero display section
 * Sid Hackney 2019
 */

import React, { useState } from 'react';
import { Element } from 'react-scroll';
import '../processed-styles/App.css';
import beatbox from './../images/screenshot-bb.png';
import pmrp from './../images/screenshot-pmrp.png';

class Project {
  imgSrc: string;
  imgAltText: string;
  caption: string;
  title: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  let src = '';
  switch (project.imgSrc) {
    case 'pmrp':
      src = pmrp;
      break;
    case 'bb':
      src = beatbox;
      break;
    default:
      src = '';
  }
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const classNames = modalOpen ? 'modal' : '';
  return (
    <div className={`Card-wrapper ${classNames}`} onClick={toggleModal}>
      <img src={src} alt={project.imgAltText} />
      <div className="Card-overlay">
        <span>Read more...</span>
      </div>
      <div className="Card-caption">{project.caption}</div>
      {modalOpen && <span onClick={toggleModal}>X</span>}
    </div>
  );
};

interface GalleryProps {
  projects: Project[];
}

const Gallery = (props: GalleryProps) => {
  return (
    <Element name="projects" className="element">
      <div className="App-section">
        <h1>Projects</h1>
        <div className="Gallery-wrapper">
          {props.projects.map((project, index) => (
            <div key={index}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Gallery;

// const ProjectPreview = (props) => {
//   const { projectName, projectDesc, projectImg, projectSrc } = props;
//   return (
//     <div className="Modal">
//       <h1>{projectName}</h1>
//       <img src={props.imgSrc} alt={props.imgAltText} />
//       <p>{projectDesc}</p>
//       <div className="Links">
//         <button>View Live</button>
//         <button className={!!projectSrc ? "" : "noSource"}>Source Code</button>
//       </div>
//     </div>
//   );
// };
