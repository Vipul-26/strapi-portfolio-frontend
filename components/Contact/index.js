import React, { useContext } from "react";
import styles from "./contact.module.css";
import { JackInTheBox, Fade } from "react-awesome-reveal";
import ApplicationContext from "components/ApplicationContext";

const Contact = () => {
  const portfolioData = useContext(ApplicationContext);
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.contact}>
        <JackInTheBox>
          <h3 className={styles.headingCenter}>What's Next?</h3>
        </JackInTheBox>
        <Fade direction="left">
          <h4 className={styles.title}>{portfolioData?.contact_Title}</h4>
        </Fade>
        <Fade direction="right">
          <p className={styles.para}>{portfolioData?.contact_Description}</p>
        </Fade>
        <Fade direction="down">
          <div>
            <a
              href="mailto:vipulsinghssm1@gmail.com?subject=Get%20In%20Touch&body=Hello%20Vipul,"
              className={`${styles.bigButton} ${styles.sayHello}`}
            >
              {portfolioData?.contact_Btn_Text}
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
