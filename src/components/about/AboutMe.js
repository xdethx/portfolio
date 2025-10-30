import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Furkan</h2>
          <p className="text-base leading-6 ">
            I offer freelance web design and development services to businesses of all sizes.
           4 years of experience in web development, I get into C#, .NET Core, AJAX, React, and Next.js.
           i am committed to providing the clients with the best possible service. I take pride in my work,
            and i guarantee that you will be satisfied with the results.
            If you have any questions, please don't hesitate to contact me.
             I would be happy to help you with your web design needs.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Age:</span>
            24
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            TR
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Istanbul, TR
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
