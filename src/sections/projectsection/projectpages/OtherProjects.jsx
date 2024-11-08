import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OtherProjectsStyles.module.css';
import valorant from "../../../assets/ValTumbnail.png";

export default function OtherProjects() {

    const projects = [
        {
            title: 'Superpower Valorant Montage',
            tech: 'Adobe After Effects',
            context: 'Wanted to capture moments in my valorant games, so I learned how to video edit',
            projectLink: 'https://youtu.be/JHHs3b37fTQ?si=Js0fgC44MqE6tmlC',
            image: valorant // Reference the imported image here
        }
    ];


    return (
        <div className={styles.container}>
            {/* Navigation and Title in the same row */}
            <div className={styles.nav}>
                <div className={styles.leftLink}>
                    <Link to="/cs-projects" className={styles.navButton}>
                        <span className={styles.arrow}>←</span>
                        <span className={styles.text}>Computer Science</span>
                    </Link>
                </div>

                <h1 className={styles.title}>Other Projects</h1>

                <div className={styles.rightLink}>
                    <Link to="/art-projects" className={styles.navButton}>
                        <span className={styles.text}>Art</span>
                        <span className={styles.arrow}>→</span>
                    </Link>
                </div>
            </div>

            {/* Project cards */}
            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <a
                        key={index}
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectCardLink}
                    >
                        <div className={styles.projectCard}>
                            <div className={styles.imagePlaceholder}>
                                <img
                                    src={project.image}
                                    alt={`${project.title} preview`}
                                    className={styles.projectImage} // Add a class for styling the image
                                />
                            </div>
                            <div className={styles.projectInfo}>
                                <h2 className={styles.projectTitle}>{project.title} || {project.tech}</h2>
                                <p className={styles.projectContext}>{project.context}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Back button */}
            <Link to="/#project" className={styles.backButton}>⬅ Back</Link>
        </div>
    );
}
