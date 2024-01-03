import React, {useState, useEffect} from 'react';
import {projectsText} from '../projectsText.js';
import styles from './projectsMobile.module.css';
import { Turn as Hamburger } from 'hamburger-react';

export default function ProjectsIndividualMobile(){
    const [isClicked, setIsClicked] = useState(null);

    console.log(isClicked);

    function determineFontSize(project){
        if(project.length > 30){
            return '8px';
        }
        else{
            return '10px';
        }
    }

    const handleToggle = (index) => {
        if (isClicked !== null && isClicked.includes(index)) {
            setIsClicked(isClicked.filter(i => i !== index));
        } else if(isClicked === null){
            setIsClicked([index]);
        }
        else {
            setIsClicked([...isClicked, index]);
        }
    }

    return(
        <>
            {projectsText.map((project, index) => {
                const style = {
                    backgroundColor: project.backgroundColor,
                    display: 'flex',
                };

                if (index !== 0) {
                    style.marginTop = '5vh';
                }

                return( 
                    <React.Fragment key={index}>
                        <div 
                            className={styles.blankBox} 
                            style={style}
                        >
                            <div style={{width: '80%', fontSize: determineFontSize(project.title),}} >
                               <h1>{project.title}</h1>
                            </div>
                  <Hamburger size={40} toggled={isClicked !== null && isClicked.includes(index)} onToggle={() => handleToggle(index)}/>
                        </div>
                        {isClicked !== null && isClicked.includes(index) && (
                            <div className={styles.mobileDropdown}
                            style={{
                                backgroundColor: project.hoverBackgroundColor,
                            
                            }}>
                                <p>{project.hoverText}</p>
                                <h2>Languages: {project.languages}</h2>
                                <h2>Lines of Code: {project.linesOfCode}</h2>
                                <a href={project.githubLink} target='_blank' rel="noopener noreferrer">Github Link</a>
                            </div>
                        )}
                    </React.Fragment>
                );
            })}
        </>
    );
}