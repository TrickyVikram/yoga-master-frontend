import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import HeroContainer from "./hero/HeroContainer";
import Gallary from "./gallary/Gallary";
import PopularClasses from "./popularClasses/PopularClasses";
import TeachersSection from "./TeachersSection/TeachersSection";
import Banner from "../../layout/Banner";

const Home = () => {
  return (
    <>
      <div>

        <section>
          <HeroContainer />
          <div className="max-w-screen-xl mx-auto">
            <Gallary />
          </div>
          <div className="max-w-screen-xl mx-auto">
            <PopularClasses/>
          </div>

          <div className="mx-auto">
            <TeachersSection/>
          </div>

         <div>
         <Banner/>
         </div>

        </section>
  
           
         

      </div>
    </>
  );
};

export default Home;
