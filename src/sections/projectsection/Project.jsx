import React from 'react';
import styles from "./ProjectStyles.module.css";
import { Link } from 'react-router-dom';
import codingIcon from "../../assets/projecticons/coding-icon.png"; // You'll need to add these icons
import artIcon from "../../assets/projecticons/art-icon.png";
import otherIcon from "../../assets/projecticons/other-icon.png";

function Project() {
    return (
        <section id="project" className={styles.Projects}>

            <h3 className={styles.heading}>Areas of Expertise</h3>

            <p className={styles.subheading}>
                I enjoy creating across multiple disciplines, from coding to design.
                Explore each section to see my diverse portfolio of work.
            </p>

            <div className={styles.CategoryContainer}>

                <div className={styles.CategoryCard}>
                    <div className={styles.CategoryIconCS}>
                        <img src={codingIcon} alt="Computer Science icon" />
                    </div>

                    <div className={styles.textAlign}>
                        <h3>Computer Science</h3>
                        <p>
                            Web development, game programming, and software engineering projects 
                            using React, HTML/CSS/JS, and C++.
                        </p>

                        <Link to="/cs-projects">
                            <button className={styles.CategoryButton}>View CS Projects →</button>
                        </Link>
                    </div>
                </div>

                <div className={styles.CategoryCard}>
                    <div className={styles.CategoryIconArt}>
                        <img src={artIcon} alt="Art icon" />
                    </div>

                    <div className={styles.textAlign}>
                        <h3>Art & Design</h3>
                        <p>
                            Digital artwork, UI/UX designs, logos, and graphics created for 
                            various organizations and personal projects.
                        </p>

                        <Link to="/art-projects">
                            <button className={styles.CategoryButton}>View Art Projects →</button>
                        </Link>
                    </div>
                </div>

                <div className={styles.CategoryCard}>
                    <div className={styles.CategoryIconOther}>
                        <img src={otherIcon} alt="Other Skills icon" />
                    </div>

                    <div className={styles.textAlign}>
                        <h3>Other Skills</h3>
                        <p>
                            Video editing, animations, and other creative projects that showcase
                            my diverse skillset.
                        </p>

                        <Link to="/other-projects">
                            <button className={styles.CategoryButton}>View Other Projects →</button>
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Project