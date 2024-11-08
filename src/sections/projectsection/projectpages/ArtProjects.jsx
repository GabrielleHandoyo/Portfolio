import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './ArtProjectsStyles.module.css';
import FigmaPortfolio from "../../../assets/FigmaPortfolio.png";
import InstagramBorder_1 from "../../../assets/InstagramBorder_1.png";
import dragon from "../../../assets/dragon.png";

const projects = [
    {
        title: "Jacket Embroidery",
        image: dragon,
        description: "Made a Jacket Embrodery Design for the Alpha Phi Omega F2K22 Iota Phi Chapter",
    },
    {
        title: "Instagram Border",
        image: InstagramBorder_1,
        description: "Designed the Alpha Phi Omega S2K23 Iota Phi Chapter Instagram Border",
    },
    {
        title: "Figma Personal Website",
        image: FigmaPortfolio,
        description: "Designed my Personal Website on Figma",
    }
];

function ArtProjects() {
    const [modalImage, setModalImage] = useState(null);

    const openModal = (image) => setModalImage(image);
    const closeModal = () => setModalImage(null);

    return (
        <div className={styles.container}>
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

            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.imagePlaceholder} onClick={() => project.image && openModal(project.image)}>
                            {project.image ? (
                                <img src={project.image} alt={`${project.title} preview`} className={styles.projectImage} />
                            ) : null}
                            <p className={styles.description}>{project.description}</p>
                        </div>
                        <h2 className={styles.projectTitle}>{project.title}</h2>
                    </div>
                ))}
            </div>

            <Link to="/#project" className={styles.backButton}>⬅ Back</Link>

            {modalImage && (
                <div className={styles.modal} onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <img src={modalImage} alt="Enlarged preview" className={styles.modalImage} />
                        <button className={styles.closeButton} onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ArtProjects;
