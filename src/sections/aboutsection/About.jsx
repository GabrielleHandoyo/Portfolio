import React, { useState, useEffect } from 'react';
import styles from "./AboutStyles.module.css";
import UCD from "../../assets/UCDavisCow.gif";
import ArtandTech from "../../assets/image2.png";
import Language from "../../assets/image3.png";

function About() {
    const [isMobileView, setIsMobileView] = useState(false);

    // Track screen width to toggle content based on viewport size
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 500);
        };

        handleResize(); // Check initial screen size
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section id="about" className={styles.AboutMe}>
            <h3>About me</h3>

            {/* Section 1 */}
            <div className={styles.AboutMe_01}>
                <p className={styles.AboutTextContainer}>
                    {isMobileView ? "Education: UC Davis" : (
                        <>
                            I graduated from <span className={styles.BoldColoredText}> UC Davis </span>
                            with a bachelor’s degree in <span className={styles.BoldColoredText}> Computer Science</span>.
                            <br />
                            My unique artistic perspective enhances my ability to solve problems creatively, <br />
                            while my coding skills enable me to turn those ideas into reality. I enjoy <br />
                            designing websites, creating games, and developing software, combining my <br />
                            passion for both art and technology.
                        </>
                    )}
                </p>
                {!isMobileView && (
                    <img className={styles.UCDavisPic} src={UCD} alt="Cow with UC DAVIS on it" />
                )}
            </div>

            {/* Section 2 */}
            <div className={styles.AboutMe_02}>
                {!isMobileView && (
                    <img className={styles.ArtandTechPic} src={ArtandTech} alt="Art and Tech in a picture" />
                )}
                <p className={styles.AboutTextContainer}>
                    {isMobileView ? "Art and Tech" : (
                        <>
                            I’m passionate about blending <span className={styles.BoldColoredText}> art and technology </span>
                            to create unique <br />
                            and innovative solutions. Whether it’s through design or code, I <br />
                            tackle challenges with <span className={styles.BoldColoredText}> creativity</span>,
                            always striving to push <br />
                            boundaries and transform concepts from sketches into fully <br />
                            realized products.
                        </>
                    )}
                </p>
            </div>

            {/* Section 3 */}
            <div className={styles.AboutMe_03}>
                <p className={styles.AboutTextContainer}>
                    {isMobileView ? "Languages" : (
                        <>
                            My primary programming language is <span className={styles.BoldColoredText}> C++</span>,
                            followed by Java, C, and Python. <br />
                            I also have experience with HTML, JavaScript, CSS, Node.js, React.js, <br />
                            and more. I am proficient in using various IDEs, including Visual <br />
                            Studio Code and Eclipse.
                        </>
                    )}
                </p>
                {!isMobileView && (
                    <img className={styles.LanguagePic} src={Language} alt="Coding language" />
                )}
            </div>
        </section>
    );
}

export default About;
