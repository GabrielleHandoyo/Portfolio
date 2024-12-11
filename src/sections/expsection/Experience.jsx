import React, { useState, useEffect } from 'react';
import styles from './ExperienceStyles.module.css';

function Experience() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 550);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="experience" className={styles.experienceContainer}>
            <h3 className={styles.heading}>Experience</h3>
            <p className={styles.subheading}>
                Here are some key aspects of computer science I’ve gained through my experience as a student in the field.
            </p>

            <div className={styles.cardsContainer}>
                {isMobile ? (
                    <div className={styles.mergedCard}>
                        <h3 className={styles.cardTitle}>Courses</h3>
                        <p className={styles.cardDetails}>
                            Computer Vision
                            <br /><br />
                            Web Programming
                            <br /><br />
                            Parallel Architecture
                            <br /><br />
                            Agent-Based Modeling
                        </p>
                    </div>
                ) : (
                    <>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Computer Vision</h3>
                            <p className={styles.cardDetails}>
                                Learned techniques for enabling computers to interpret and understand visual data.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Web Programming</h3>
                            <p className={styles.cardDetails}>
                                Focused on front-end development, creating responsive designs and user-friendly interfaces with modern frameworks.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Parallel Architecture</h3>
                            <p className={styles.cardDetails}>
                                Studied parallel computing architectures, including design and analysis techniques for optimized performance.
                            </p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.cardTitle}>Agent-Based Modeling</h3>
                            <p className={styles.cardDetails}>
                                Developed models that simulate complex systems with autonomous agents.
                            </p>
                        </div>
                    </>
                )}
            </div>

            <div className={styles.languagesContainer}>
                <h3 className={styles.languagesHeading}>Coding Languages</h3>
                <ul className={styles.languagesList}>
                    <li>C/C++ ★★★★★</li>
                    <li>HTML/JS/CSS ★★★★★</li>
                    <li>React ★★★★★</li>
                    <li>Node ★★☆☆☆</li>
                    <li>SQL ★☆☆☆☆</li>
                    <li>Express ★☆☆☆☆</li>
                    <li>MongoDB ★☆☆☆☆</li>
                    <li>Java ★★★☆☆</li>
                    <li>Python ★★☆☆☆</li>
                    <li>Golang/Lisp/Prolog ★☆☆☆☆</li>

                </ul>
            </div>
        </section>
    );
}

export default Experience;
