import styles from "./HomeStyles.module.css";
import MyImage from "../../assets/MyImage.png";
import ThemePoint from "../../assets/ChangeThemeText.png";
import LightmodeIcon from "../../assets/Lightmode.png";
import DarkmodeIcon from "../../assets/Darkmode.png";
import Resume from "../../assets/Resume.pdf";
import { useTheme } from "../../common/ThemeManager";

function Home() {

  const { theme, toggleTheme } = useTheme();
  const ThemeIcon = theme === "dark" ? LightmodeIcon : DarkmodeIcon;





  return (



    <section id="home">

      <div className={styles.Navbar}>
        <h3>Portfolio</h3>

        <div className={styles.list}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#experience">Experience</a>
          <a href="#activity">Activity</a>
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

      <div className={styles.Info}>
        <h3>Hello I'm</h3>
        <h1>
          Gabrielle
          <br />
          Handoyo
        </h1>
        <h2>Full-stack Developer || Software Engineer</h2>

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



    </section>
  )
}

export default Home
