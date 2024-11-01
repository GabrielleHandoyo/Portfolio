import React from 'react'
import styles from "./ProjectStyles.module.css";
import dragon from "../../assets/dragon.png";
import rabbit from "../../assets/RunRabbitRun.png";
import valorant from "../../assets/ValTumbnail.png";

function Project() {
    return (
        <section id="project" className={styles.Projects}>

            <h3>Projects</h3>
            <p>
                Bellow are some projects that I have made. <br />
                View more project under that section o check out more projects that i have made!
            </p>

            <div className={styles.ProjectContainer}>

                <div className={styles.ProjectCard}>
                    <a href=""></a>
                    <img className={styles.ProjectImages} src={dragon} alt="Dragon Drawing" />

                    <h3>Dragon Design</h3>
                    <p>
                        For Embroidery
                    </p>

                    <a href="#">
                        <button class={styles.ProjectButton}>View More Art Projects</button>
                    </a>
                </div>


                <div className={styles.ProjectCard}>
                    <a href=""></a>
                    <img className={styles.ProjectImages} src={rabbit} alt="Rabbit Drawing" />

                    <h3>Run Rabbit Run</h3>
                    <p>
                        Arcade Game
                    </p>

                    <a href="#">
                        <button class={styles.ProjectButton}>View More CS Projects</button>
                    </a>
                </div>

                <div className={styles.ProjectCard}>
                    <a href=""></a>
                    <img className={styles.ProjectImages} src={valorant} alt="Valorant Thumbnail" />

                    <h3>Valorant Montage</h3>
                    <p>
                        Video edit of valorant clips
                    </p>

                    <a href="#">
                        <button class={styles.ProjectButton}>View More Others Projects</button>
                    </a>
                </div>


            </div>











        </section>
    )
}

export default Project
