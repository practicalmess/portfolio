/**
 * Gallery.tsx
 *
 * Hero display section
 * Sid Hackney 2019
 */

import React from 'react';
import { Element } from 'react-scroll';
import '../processed-styles/App.css';

class Project {
  imgSrc: string;
  imgAltText: string;
  caption: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  console.log(project.imgSrc);
  return (
    <div className="Card-wrapper">
      <img src={project.imgSrc} alt={project.imgAltText} />
      <div className="Card-caption">{project.caption}</div>
    </div>
  );
};
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

interface GalleryProps {
  projects: Project[];
}

const Gallery = (props: GalleryProps) => {
  console.log(props.projects);
  return (
    <Element name="Gallery" className="element">
      <div className="App-section">
        <h1>Past Work</h1>
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
