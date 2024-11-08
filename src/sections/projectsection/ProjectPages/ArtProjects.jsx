import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ArtProjectsStyles.module.css';

function ArtProjects() {
    return (
        <div className={styles.container}>
            {/* Navigation and Title in the same row */}
            <div className={styles.nav}>
                <div className={styles.leftLink}>
                    <Link to="/other-projects" className={styles.navButton}>
                        <span className={styles.arrow}>←</span>
                        <span className={styles.text}>Other</span>
                    </Link>
                </div>

                <h1 className={styles.title}>Art Projects</h1>

                <div className={styles.rightLink}>
                    <Link to="/cs-projects" className={styles.navButton}>
                        <span className={styles.text}>Computer Science</span>
                        <span className={styles.arrow}>→</span>
                    </Link>
                </div>

            </div>

            {/* Project cards */}
            <div className={styles.projectsGrid}>
                <div className={styles.projectCard}>
                    <div className={styles.imagePlaceholder}>
                        <p className={styles.description}>Detailed description of Jacket Embroidery.</p>
                    </div>
                    <h2 className={styles.projectTitle}>Jacket Embroidery</h2>
                </div>
                <div className={styles.projectCard}>
                    <div className={styles.imagePlaceholder}>
                        <p className={styles.description}>Detailed description of Instagram Border.</p>
                    </div>
                    <h2 className={styles.projectTitle}>Instagram Border</h2>
                </div>
                <div className={styles.projectCard}>
                    <div className={styles.imagePlaceholder}>
                        <p className={styles.description}>Detailed description of Personal Website.</p>
                    </div>
                    <h2 className={styles.projectTitle}>Personal Website</h2>
                </div>

            </div>

            {/* Back button */}
            <Link to="/#project" className={styles.backButton}>⬅ Back</Link>
        </div>
    );
}

export default ArtProjects;
