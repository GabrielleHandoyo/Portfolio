import React, { useState } from 'react';
import styles from "./ContactStyles.module.css";
import facebook from "../../assets/Facebook.png";
import linkedin from "../../assets/LinkedIn.png";
import instagram from "../../assets/Instagram.png";
import github from "../../assets/Github.png";

function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);
        formData.append("access_key", "e9ebcf4f-a1a0-43cc-9988-88878cb0ceb9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <section id="contact" className={styles.ContactSection}>
            <div className={styles.ContactCard}>
                <h3 className={styles.Heading}> Contact Me</h3>
                <div className={styles.SocialIcons}>
                    <a href="https://en-gb.facebook.com/people/Gabrielle-Handoyo/pfbid0XY5eXyQYooRxXLy2zK2Q1S2ySaJTe5uMWy8x1FazGYQQJqUzEbxXD9d5AFyKwt28l/" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" className={styles.IconImage} />
                    </a>
                    <a href="https://www.linkedin.com/in/gabriellehandoyo" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className={styles.IconImage} />
                    </a>
                    <a href="https://www.instagram.com/gabriellehandoyo/" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" className={styles.IconImage} />
                    </a>
                    <a href="https://github.com/GabrielleHandoyo" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className={styles.IconImage} />
                    </a>
                </div>

                <div className={styles.ContactForm}>
                    <form onSubmit={onSubmit}>
                        <div className={styles.TopRow}>
                            <div className={styles.InputGroup}>
                                <input type="text" name="name" placeholder="Name" required />
                            </div>
                            <div className={styles.InputGroup}>
                                <input type="email" name="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className={styles.InputGroup}>
                            <textarea name="message" rows="7" placeholder="Message" required></textarea>
                        </div>
                        <button type="submit" className={styles.SendButton}>Send</button>
                    </form>
                    <span className={styles.ResultMessage}>{result}</span>
                </div>
            </div>

            <footer className={styles.Footer}>
                <p className={styles.FooterText}>© 2024 Gabrielle Handoyo. All rights reserved.</p>
            </footer>
        </section>
    );
}

export default Contact;
