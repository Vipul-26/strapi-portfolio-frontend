import Layout from "components/Layout";
import Main from "components/Main";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ApplicationContext from "components/ApplicationContext";
import myData from "../public/myData.json";
import { RotatingLines } from "react-loader-spinner";

export default function Home() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const configForJsonBin = {
      headers: {
        "X-Master-Key": `$2b$10$${process.env.NEXT_PUBLIC_JSON_BIN_MASTER_KEY}`,
      },
    };
    axios
      .get(
        "https://api.jsonbin.io/v3/b/646edf50b89b1e2299a45f35",
        configForJsonBin
      )
      .then((response) => {
        if (
          response &&
          response?.data?.record?.data &&
          response?.status === 200
        ) {
          if (response?.data?.record?.data?.[0]?.isStrapi) {
            let reqInstance = axios.create({
              headers: {
                Authorization: response?.data?.record?.data?.[0]?.strapiApiKey,
              },
            });
            reqInstance
              .get("https://strapi-portfolio-oto5.onrender.com/api/portfolios")
              .then((response) => {
                if (response && response?.data && response?.status === 200) {
                  setPortfolioData(response?.data?.data?.[0]?.attributes);
                  setIsLoading(false);
                } else {
                  setPortfolioData(myData?.data?.[0]?.attributes);
                  setIsLoading(false);
                }
              })
              .catch((e) => {
                console.log("Strapi Error:-", e);
                setPortfolioData(myData?.data?.[0]?.attributes);
                setIsLoading(false);
              });
          } else {
            setPortfolioData(myData?.data?.[0]?.attributes);
            setIsLoading(false);
          }
        }
      })
      .catch((e) => {
        console.log("Json Bin Error:-", e);
        setPortfolioData(myData?.data?.[0]?.attributes);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <ApplicationContext.Provider value={portfolioData}>
        {isLoading === true ? (
          <div className="rotatingLines">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="129"
              visible={true}
            />
          </div>
        ) : (
          <Layout>
            <Main />
          </Layout>
        )}
      </ApplicationContext.Provider>
    </div>
  );
}
