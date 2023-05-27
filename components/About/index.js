import React, { useContext } from "react";
import styles from "./about.module.css";
import Image from "next/image";
import { Fade, Zoom } from "react-awesome-reveal";
import ApplicationContext from "components/ApplicationContext";

const About = () => {
  const portfolioData = useContext(ApplicationContext);

  const skills = portfolioData?.tech_List;
  return (
    <section id="about" className={styles.section}>
      <Zoom>
        <h3 className={`${styles.heading}`}>About Me</h3>
      </Zoom>
      <div className={styles.aboutFlexContainer}>
        <Fade direction="left">
          <div className={styles.aboutContent}>
            <p className="mb-3">{portfolioData?.about_Desc1}</p>
            <div
              dangerouslySetInnerHTML={{ __html: portfolioData?.about_Desc2 }}
            />
            <div
              dangerouslySetInnerHTML={{ __html: portfolioData?.about_Desc3 }}
            />
            <ul>
              {skills?.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div
              dangerouslySetInnerHTML={{ __html: portfolioData?.about_Desc4 }}
            />
          </div>
        </Fade>
        <Fade direction="right">
          <div className={styles.aboutPic}>
            <Image
              className={styles.aboutPicImage}
              src="/Vipul.jpg"
              alt={portfolioData?.name}
              width={300}
              height={300}
              title={portfolioData?.name}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default About;
