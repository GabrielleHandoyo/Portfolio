import React from 'react'

function Navbar() {
    return (
        <section id="navbar">
            <div className={styles.Navbar}>
                <h3>Portfolio</h3>

                <div className={styles.list}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#project">Project</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>

        </section>
    )
}

export default Navbar
