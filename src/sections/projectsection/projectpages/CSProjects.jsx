import React from "react";
import { Link } from "react-router-dom";
import styles from "./CSProjectsStyles.module.css";
import rabbit from "../../../assets/RunRabbitRun.png";
import PortfolioImage from "../../../assets/PortfolioImage.png";
import APOapppic from "../../../assets/APOapppic.png";

const projects = [
    {
        title: "Kids Arcade",
        tech: "HTML, JS, CSS",
        context: "Built a web arcade game for my school project with a partner",
        githubLink: "https://github.com/jpsingh10/ECS162-p2",
        projectLink: "https://jpsingh10.github.io/ECS162-p2/arcade/index.html",
        image: rabbit,
    },
    {
        title: "Personal Portfolio Website",
        tech: "HTML, JS, CSS, React.js",
        context: "Built My own Personal Website",
        githubLink: "https://github.com/GabrielleHandoyo/Portfolio",
        projectLink: "https://gabriellehandoyo.netlify.app",
        image: PortfolioImage,
    },
    {
        title: "APO iotaphi website",
        tech: "MERN stack",
        context: "Currently building a website for APO iotaphi chapter",
        githubLink: "https://github.com/GabrielleHandoyo/APOFrontend",
        projectLink: "https://iotaphifrontend.netlify.app",
        image: APOapppic,
    },
];

export default function CSProjects() {
    return (
        <div className={styles.container}>
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

            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.imagePlaceholder}>
                            <img
                                src={project.image}
                                alt={`${project.title} preview`}
                                className={styles.projectImage}
                            />
                            <div className={styles.buttonContainer}>
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.button}
                                >
                                    GitHub
                                </a>
                                <a
                                    href={project.projectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.button}
                                >
                                    View Project
                                </a>
                            </div>
                        </div>
                        <div className={styles.projectInfo}>
                            <h2 className={styles.projectTitle}>
                                {project.title} || {project.tech}
                            </h2>
                            <p className={styles.projectContext}>
                                {project.context}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <Link to="/#project" className={styles.backButton}>
                ⬅ Back
            </Link>
        </div>
    );
}
