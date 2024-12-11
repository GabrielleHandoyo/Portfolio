import React from 'react'
import styles from "./ProjectStyles.module.css";
import dragon from "../../assets/dragon.png";
import rabbit from "../../assets/RunRabbitRun.png";
import valorant from "../../assets/ValTumbnail.png";

import { Link } from 'react-router-dom';

function Project() {
    return (
        <section id="project" className={styles.Projects}>

            <h3 className={styles.heading}>Projects</h3>


            <p className={styles.subheading}>
                Bellow are some projects that I have made. <br />
                View more project under that section to check out more projects that I have made!
            </p>



            <div className={styles.ProjectContainer}>

                <div className={styles.ProjectCard}>
                    <a href="https://jpsingh10.github.io/ECS162-p2/arcade/index.html"></a>
                    <img className={styles.ProjectImages} src={rabbit} alt="Rabbit Drawing" />

                    <div className={styles.textAlign}>

                        <h3>Run Rabbit Run</h3>
                        <p>
                            Built a web arcade game for my school project with a partner
                        </p>

                        <Link to="/cs-projects">
                            <button className={styles.ProjectButton}>View More CS Projects →</button>
                        </Link>


                    </div>

                </div>


                <div className={styles.ProjectCard}>
                    <a href="https://www.instagram.com/p/CnvKpqRuwcq/"></a>
                    <img className={styles.ProjectImages} src={dragon} alt="Dragon Drawing" />


                    <div className={styles.textAlign}>
                        <h3>Dragon Design</h3>
                        <p>
                            Made a Jacket Embrodery Design for the Alpha Phi Omega F2K22 Iota Phi Chapter
                        </p>

                        <Link to="/art-projects">
                            <button className={styles.ProjectButton}>View More Art Projects →</button>
                        </Link>
                    </div>

                </div>


                <div className={styles.ProjectCard}>
                    <a href="https://youtu.be/JHHs3b37fTQ?si=Js0fgC44MqE6tmlC"></a>
                    <img className={styles.ProjectImages} src={valorant} alt="Valorant Thumbnail" />

                    <div className={styles.textAlign}>

                        <h3>Valorant Montage</h3>
                        <p>
                            Wanted to capture moments in my valorant games, so I learned how to video edit
                        </p>

                        <Link to="/other-projects">
                            <button className={styles.ProjectButton}>View More Other Projects →</button>
                        </Link>
                    </div>

                </div>


            </div>











        </section>
    )
}

export default Project
