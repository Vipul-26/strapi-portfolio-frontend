import React, { useState, useEffect, useContext } from "react";
import styles from "./experience.module.css";
import { Fade } from "react-awesome-reveal";
import ApplicationContext from "components/ApplicationContext";

const Experience = () => {
  const portfolioData = useContext(ApplicationContext);

  const TabList = portfolioData?.work_TabList;

  const list = portfolioData?.work_Details_List;

  const [finalData, setFinal] = useState([]);
  const [selectedTab, selectTab] = useState(1);
  const myTabList = TabList?.[selectedTab - 1];

  useEffect(() => {
    const selectedList = selectedTab === 1 ? list?.[0] : list?.[1];
    setFinal(selectedList);
  }, [selectedTab, portfolioData]);

  return (
    <section id="experience" className={styles.section}>
      <Fade direction="right">
        <h3 className={`${styles.heading}`}>Where I've Worked</h3>
      </Fade>
      <div className={styles.jobTabs}>
        <ul className={styles.tablist}>
          {TabList?.map((tab, i) => (
            <li key={i}>
              <button
                onClick={() => selectTab(i + 1)}
                type="button"
                className={selectedTab === i + 1 ? styles.buttonActive : ""}
              >
                {i === 0 ? tab?.company : "TCS"}
              </button>
            </li>
          ))}
        </ul>
        <div className={styles.jobContent}>
          <div className={styles.jobTabContent}>
            <h4 className={styles.jobTitle}>
              <span>{myTabList?.title}</span>
              <span className={styles.jobCompany}>
                <span>&nbsp;@</span>
                <a
                  href={myTabList?.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {myTabList?.company}
                </a>
              </span>
            </h4>
            <h5 className={styles.jobDetail}>
              <span>{myTabList?.range}</span>
            </h5>
            <div>
              <ul>
                {finalData?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
