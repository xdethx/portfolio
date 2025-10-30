import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill} from "react-icons/bs";
import { FaGithub} from "react-icons/fa";

import {  FiSend } from "react-icons/fi";
import CV from "../../assets/furkanOzcan_CV.pdf";
import { bannerImg } from "../../assets/index";

const Left = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "Full Stack Developer", "UI Designer"],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
    const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "My_CV.pdf"; // indirilen dosya adı
    link.click();
  };
  return (
    <div className="w-full -z-10 lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow ">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={bannerImg}
          loading="priority"
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Furkan ÖZCAN</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking="false" cursorStyle="|" />
          </p>
          <div className="flex justify-center gap-2 mt-2">
          <a target='_blank'
            rel='noopener noreferrer' href="https://github.com/xdethx"> <span  className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaGithub />
            </span>
            </a>
            {/* <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FaLinkedin />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <SiYoutubemusic />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <BsFacebook />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiInstagram />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <AiFillTwitterCircle />
            </span>
            <span className="hover:text-designColor duration-300 cursor-pointer text-xl">
              <FiMail />
            </span> */}
          </div>
        </div>
        <div className="flex h-14">
   <button
      onClick={handleDownload}
      className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300 cursor-pointer"
    >
      Download CV <BsCloudLightningFill />
    </button>
          <button className="w-1/2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            Contact me <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
