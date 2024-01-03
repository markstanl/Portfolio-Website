import React from 'react';
import styles from './projects.module.css';
import ProjectsIndividual from './ProjectsIndividual.js';

export default function Projects(){

    return(
        <div>
            <div className={styles.barrier}></div>
            <div className={styles.outerProjectsBox}>
                <ProjectsIndividual />
            </div>
        </div>

    );
}