import React, { useState } from 'react';
import {projectsText} from './projectsText.js';
import styles from './projects.module.css';
import file from './fileImage.png';
import image1 from './linearalgebra.jpg';
import image2 from './websiteAesthetic.jpg';

export default function ProjectsIndividual(){
    const [hoveredIndex, setHoveredIndex] = useState(null);
    projectsText[0].hoverImage = image1;
    projectsText[1].hoverImage = image2;

    return(
        <div>
            {projectsText.map((projectText, index) => {
                return (
                    <div>
                    <div 
                        className={styles.projectBox} 
                        style={{backgroundColor: projectText.backgroundColor}}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        key={index}
                    >
                        <img src={file} className={styles.fileImage} alt='file'/>
                        <a href={projectText.githubLink} target='_blank' rel="noopener noreferrer"> {projectText.title} </a>
                    </div>
                    {/* This function uses the hook from earlier to conditionally load a div that only exists while hovering over the div*/}
                    {hoveredIndex === index && (
                    <div className={styles.hoverDiv} style={{backgroundColor: projectText.hoverBackgroundColor}} onMouseEnter={() => setHoveredIndex(index)}  onMouseLeave={() => setHoveredIndex(null)}>
                        <div>
                            <img src = {projectText.hoverImage} alt={projectText.hoverImageAlt} className={styles.hoverImage} ></img>
                        </div>
                        <div className={styles.hoverText}>
                            <p>{projectText.hoverText}</p>
                            <p1>Languages: {projectText.languages}</p1>
                            <br></br>
                            <p1>{projectText.linesOfCode} lines of code</p1>
                        </div>
                    </div>
                    
                    )}
                    </div>
                );
            })}
        </div>
    );
}