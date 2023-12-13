import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Web development is the process of creating a website or web application. It includes everything from planning and design to coding and testing. A web developer is someone who specializes in this process."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="A web designer is responsible for the visual design of websites. They work with web developers to create a website that is easy to navigate and looks good. A good web designer understands the user experience and how to design a website that meets the needs of the user."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Optimized"
        subTitle="A mobile optimized web site is a site that is designed to be viewed on a mobile device. This can be accomplished by using a responsive design, which uses CSS media queries to adjust the layout of the site to fit the screen size of the device, or by using a dedicated mobile site that is designed specifically for mobile devices. Mobile optimized sites are important because they provide a better experience for mobile users and can help improve your search engine ranking."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Search Engine Optimization, or 'SEO' for short, is a technique that can be used on a website to improve site visibility amongst search engines. It is a means of optimizing a website so that it will rank higher in search engine results pages (SERPs). There are a number of methods that can be used to improve a website's SEO, including on-page optimization (such as keyword-rich titles and descriptions) and off-page optimization (such as link building and social media engagement). "
      />
    </div>
  );
};

export default MyServices;
