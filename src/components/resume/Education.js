import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Elekse Elektronik Para ve Ödeme Kuruluşu"
          subTitle="Stajyer"
          des="
          Donanım, 
          Klavuz video hazırlama,
          Sunucu kurulumu(RAID yapıları), Wordpress kurulumu ve sanal pos
          eklentileri, Postman"
        />
      
       
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2017 - 2020"
          title="Piri Reis University"
          subTitle="Istanbul"
          des="To provide education and training at world quality and standards, to conduct research and in a global competitive environment; To create SYNERGY between vocational and academic education."
        />
   
      </div>
    </div>
  );
};

export default Education;
