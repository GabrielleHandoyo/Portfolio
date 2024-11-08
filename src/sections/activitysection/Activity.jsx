import React from 'react';
import styles from './ActivityStyles.module.css';

function Activities() {
    return (
        <section id="activities" className={styles.ActivitySection}>
            <h3 className={styles.heading}>Activities</h3>

            <div className={styles.ActivityEntry}>
                <p className={styles.Date}>Sept 2022 - May 2024</p>
                <p className={styles.Role}>
                    <span className={styles.Yellowed}>Alpha Phi Omega </span>
                    | Web Master, Pledge Retreat Chair, Design Chair, Sargent at Arms, Jacket Designer
                    <a href="https://www.iotaphi.org" className={styles.LinkIcon}>&#x2197;</a>
                </p>
                <div className={styles.Tags}>
                    <span>HTML</span>
                    <span>JavaScript</span>
                    <span>CSS</span>
                    <span>ProCreate</span>
                    <span>Leadership</span>
                    <span>Collaboration</span>
                    <span>Flexibility</span>
                </div>
            </div>

            <div className={styles.ActivityEntry}>
                <p className={styles.Date}>Jan 2021 - Sept 2022</p>
                <p className={styles.Role}>
                    <span className={styles.Yellowed}>Inter-Club Council </span>
                    | PRAC Committee Chair, Commissioner of Activities
                    <a href="https://www.dvc.edu/student-services/student-life/inter-club-council/index.html" className={styles.LinkIcon}>&#x2197;</a>
                </p>
                <div className={styles.Tags}>
                    <span>Leadership</span>
                    <span>Collaboration</span>
                </div>
            </div>

            <div className={styles.ActivityEntry}>
                <p className={styles.Date}>Jan 2021 - Sept 2022</p>
                <p className={styles.Role}>
                    <span className={styles.Yellowed}>Women In Computer Science </span>
                    | Activity Coordinator
                    <a href="https://wicsdvc.com" className={styles.LinkIcon}>&#x2197;</a>
                </p>
                <div className={styles.Tags}>
                    <span>Python</span>
                    <span>Java</span>
                    <span>Canva</span>
                    <span>Creative Thinking</span>
                </div>
            </div>

            <div className={styles.ActivityEntry}>
                <p className={styles.Date}>Dec 2019 - Jan 2020</p>
                <p className={styles.Role}>
                    <span className={styles.Yellowed}>CISV International </span>
                    | Singaporean Ambassador
                    <a href="https://cisv.org" className={styles.LinkIcon}>&#x2197;</a>
                </p>
                <div className={styles.Tags}>
                    <span>Leadership</span>
                    <span>Collaboration</span>
                    <span>Creative Thinking</span>
                </div>
            </div>

            <div className={styles.ActivityEntry}>
                <p className={styles.Date}>June 2015 - Dec 2019</p>
                <p className={styles.Role}>
                    <span className={styles.Yellowed}>Superteens/Smartkids Bootcamp </span>
                    | Almuni
                    <a href="https://www.instagram.com/superteen.id/" className={styles.LinkIcon}>&#x2197;</a>
                </p>
                <div className={styles.Tags}>
                    <span>Leadership</span>
                    <span>Collaboration</span>
                    <span>Time Management</span>
                    <span>Flexibility</span>
                </div>
            </div>

        </section>
    );
}

export default Activities;
