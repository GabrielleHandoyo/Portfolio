import React from 'react';
import styles from "./ContactStyles.module.css";
import facebook from "../../assets/Facebook.png";
import linkedin from "../../assets/LinkedIn.png";
import instagram from "../../assets/Instagram.png";
import github from "../../assets/Github.png";


function Contact() {
    return (
        <section id="contact" className={styles.ContactSection}>
            <div className={styles.ContactCard}>
                <h3>Contact Me</h3>
                <div className={styles.SocialIcons}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" className={styles.IconImage} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className={styles.IconImage} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className={styles.IconImage} />
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className={styles.IconImage} />
                    </a>
                </div>

                <div className={styles.ContactForm}>
                    <div className={styles.TopRow}>
                        <div className={styles.InputGroup}>
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div className={styles.InputGroup}>
                            <input type="email" placeholder="Email" required />
                        </div>
                    </div>
                    <div className={styles.InputGroup}>
                        <textarea rows="4" placeholder="Message" required></textarea>
                    </div>
                    <button className={styles.SendButton}>Send</button>
                </div>
            </div>
        </section>
    );
}

export default Contact;