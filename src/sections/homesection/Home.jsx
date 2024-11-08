import styles from "./HomeStyles.module.css";
import MyImage from "../../assets/MyImage.png";
import ThemePoint from "../../assets/ChangeThemeText.png";
import LightmodeIcon from "../../assets/Lightmode.png";
import DarkmodeIcon from "../../assets/Darkmode.png";
import Resume from "../../assets/Resume.pdf";
import { useTheme } from "../../common/ThemeManager";
import { useEffect, useState } from "react";


function Home() {

  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === "dark" ? LightmodeIcon : DarkmodeIcon;

  // State for scroll-up button visibility
  const [showScrollUp, setShowScrollUp] = useState(false);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 300); // Show button after scrolling down 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (



    <section id="home" className={styles.homesection}>


      <div className={styles.Navbar}>
        <h3>Portfolio</h3>

        <div className={styles.list}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#experience">Experience</a>
          <a href="#activities">Activities</a>
          <a href="#contact">Contact</a>
        </div>
      </div>



      <div className={styles.ThemeChanger}>
        <img
          className={styles.Theme}
          src={ThemeIcon}
          alt="Theme Icon"
          onClick={toggleTheme}
        />
        <img
          className={styles.ThemePointer}
          src={ThemePoint}
          alt="Theme Pointer"

        />
      </div>





      <div className={styles.MainContent}>

        <div className={styles.TextContent}>
          <h3 className={styles.Hello}>
            Hello I'm
          </h3>

          <h1 className={styles.FirstName}>
            Gabrielle
          </h1>
          <h1 className={styles.LastName}>
            Handoyo
          </h1>

          <h2>
            Full-stack Developer || Software Engineer
          </h2>
        </div>




        <div className={styles.ImageContent}>
          <img
            className={styles.MyPicture}
            src={MyImage}
            alt="Gabrielle Handoyo's Profile Picture"
          />
          <div className={styles.DownloadButton}>
            <a href={Resume} download="Gabrielle_Handoyo_Resume.pdf">
              <button className={styles.downloadButton}>Download Resume</button>
            </a>
          </div>
        </div>
      </div>

      {showScrollUp && (
        <button className={styles.scrollUp} onClick={scrollToTop}>
          ↑
        </button>
      )}

    </section>
  )
}

export default Home
