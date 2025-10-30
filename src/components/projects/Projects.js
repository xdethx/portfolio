import React from "react";
import {
  workImgOne,
  workImgTwo,
  workImgThree,
  workImgFour,
  workImgFive,
  workImgSix,
  workImgSeven,
  workImgEight,
} from "../../assets";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lgl:gap-10">
        <div className="px-6">
          <ProjectsCard
            title="Responsive Website"
            category="Website"
            image={workImgThree}
            link="https://bostancihali.com.tr"
          />
       
       <ProjectsCard
            title="Responsive Website"
            category="Portfolio"
            image={workImgTwo}
            link="https://ghosthippo.com/"
          />
    
        </div>
        <div className="px-6">
        <ProjectsCard
            title="Responsive Website"
            category="Website"
            image={workImgOne}
            link="https://yildizhali.com/"
          />
      
      
        </div>
      </div>
    </div>
  );
};

export default Projects;
