import React, { useState, useEffect } from 'react';
import { useTheme } from "../../common/ThemeManager";
import styles from "./AboutStyles.module.css";
import UCD from "../../assets/UCDavisCow.gif";
import ArtandTech from "../../assets/ArtandTech.gif";
import Language from "../../assets/image3.png";
import EducationLight from "../../assets/EducationLight.png";
import EducationDark from "../../assets/EducationDark.png";

function About() {
    const { theme, toggleTheme } = useTheme();
    const Education = theme === 'light' ? EducationDark : EducationLight;






    const [isMobileView, setIsMobileView] = useState(false);

    // Track screen width to toggle content based on viewport size
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
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
                <div className={styles.AboutTextContainer}>
                    {isMobileView ? (
                        <p>
                            <img className={styles.MobileImage} src={Education} alt="graduating cow" />
                            <h2 className={styles.BoldColoredText}> Education </h2>
                            <p className={styles.MobileText}>
                                UC Davis 2024
                                <br />
                                B.S. in Computer Science
                            </p>
                        </p>
                    ) : (
                        <p>
                            I graduated from <span className={styles.BoldColoredText}> UC Davis </span>
                            with a bachelor’s degree in <span className={styles.BoldColoredText}> Computer Science</span>.
                            <br />
                            My unique artistic perspective enhances my ability to solve problems creatively, <br />
                            while my coding skills enable me to turn those ideas into reality. I enjoy <br />
                            designing websites, creating games, and developing software, combining my <br />
                            passion for both art and technology.
                        </p>
                    )}
                </div>
                {!isMobileView && (
                    <img className={styles.UCDavisPic} src={UCD} alt="Cow with UC DAVIS on it" />
                )}
            </div>

            {/* Section 2 */}
            <div className={styles.AboutMe_02}>
                {!isMobileView && (
                    <img className={styles.ArtandTechPic} src={ArtandTech} alt="Art and Tech in a picture" />
                )}
                <div className={styles.AboutTextContainer}>
                    {isMobileView ? (
                        <p>
                            <img className={styles.MobileImage} src={Education} alt="graduating cow" />
                            <h2 className={styles.BoldColoredText}> Passion </h2>
                            <p className={styles.MobileText}>
                                Art && Technology
                                <br />
                                Creativity
                            </p>
                        </p>
                    ) : (
                        <p>
                            I’m passionate about blending <span className={styles.BoldColoredText}> art and technology </span>
                            to create unique <br />
                            and innovative solutions. Whether it’s through design or code, I <br />
                            tackle challenges with <span className={styles.BoldColoredText}> creativity</span>,
                            always striving to push <br />
                            boundaries and transform concepts from sketches into fully <br />
                            realized products.
                        </p>
                    )}
                </div>
            </div>

            {/* Section 3 */}
            <div className={styles.AboutMe_03}>
                <div className={styles.AboutTextContainer}>
                    {isMobileView ? (
                        <p>
                            <img className={styles.MobileImage} src={Education} alt="graduating cow" />
                            <h2 className={styles.BoldColoredText}> Coding Languages </h2>
                            <p className={styles.MobileText}>
                                C/C++
                                <br />
                                Java, Python, HTML/JS/CSS
                            </p>
                        </p>
                    ) : (
                        <p>
                            My primary programming language is <span className={styles.BoldColoredText}> C++</span>,
                            followed by Java, C, and Python. <br />
                            I also have experience with HTML, JavaScript, CSS, Node.js, React.js, <br />
                            and more. I am proficient in using various IDEs, including Visual <br />
                            Studio Code and Eclipse.
                        </p>
                    )}
                </div>
                {!isMobileView && (
                    <img className={styles.LanguagePic} src={Language} alt="Coding language" />
                )}
            </div>

            <div className={styles.ExtraContent}>
                <p> From a young age, I've always had a deep sense of creativity, experimenting with different art
                    techniques to bring unique ideas to life. To me, coding is just another form of art, with many
                    ways to create and innovate. The ability to experiment and build something entirely new is what
                    inspired me to major in computer science. It lets me turn the ideas in my head into reality.
                </p>
            </div>
        </section>
    );
}

export default About;
