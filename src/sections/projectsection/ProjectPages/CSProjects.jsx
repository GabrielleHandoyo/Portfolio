import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CSProjectsStyles.module.css';

const projects = [
    {
        title: 'Kids Arcade',
        tech: 'HTML/JS/CSS',
        context: 'CONTEXT'
    },
    {
        title: 'Personal Portfolio',
        tech: 'NODE.js, React.js',
        context: 'CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT CONTEXT'
    }
];

export default function CSProjects() {
    return (
        <div className={styles.container}>
            {/* Navigation and Title in the same row */}
            <div className={styles.nav}>
                <div className={styles.leftLink}>
                    <Link to="/art-projects" className={styles.navButton}>
                        <span className={styles.arrow}>←</span>
                        <span className={styles.text}>Art</span>
                    </Link>
                </div>

                <h1 className={styles.title}>Computer Science Projects</h1>

                <div className={styles.rightLink}>
                    <Link to="/other-projects" className={styles.navButton}>
                        <span className={styles.text}>Others</span>
                        <span className={styles.arrow}>→</span>
                    </Link>
                </div>
            </div>

            {/* Project cards */}
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.imagePlaceholder}></div>
                        <div className={styles.projectInfo}>
                            <h2 className={styles.projectTitle}>{project.title} || {project.tech}</h2>
                            <p className={styles.projectContext}>{project.context}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Back button */}
            <Link to="/#project" className={styles.backButton}>⬅ Back</Link>
        </div>
    );
}
