import React from 'react';
import {projectsText} from '../projectsText.js';
import styles from './projectsMobile.module.css';
import { Turn as Hamburger } from 'hamburger-react';

export default function ProjectsIndividualMobile(){

    return(
        <>
            {projectsText.map((project, index) => {
                const style = {
                    backgroundColor: project.backgroundColor,
                    display: 'flex',
                };

                if (index !== projectsText.length - 1) {
                    style.marginBottom = '5vh';
                }

                return( 
                    <div 
                        className={styles.blankBox} 
                        key={index}
                        style={style}
                    >
                        <div style={{width: '80%'}} >
                            {project.title}
                        </div>
                        <Hamburger size={40} />
                    </div>
                );
            })}
        </>
    );
}