import React from "react";
import icon from "../assets/icons8-rabbit-64.png";

const Footer = () => {
  return (
    <div className="py-9 mt-7 bg-slate-800/50 flex space-x-3 pl-9">
      <a
        className="flex pr-8 cursor-pointer"
        href="https://www.linkedin.com/in/napatpimon-ponpathanapaisarn-162420243/"
        target="_blank"
      >
        <div className="w-[30px] h-[30px]">
          <img src={icon} />
        </div>
        <div className="text-white pl-3">LinkedIn</div>
      </a>
      <a
        className="flex cursor-pointer "
        href="https://drive.google.com/drive/u/0/folders/1I5mElksLahhSbT34HVthWn8RnOUXQ2_w?ths=true"
        target="_blank"
      >
        <div className="w-[30px] h-[30px]">
          <img src={icon} />
        </div>
        <div className="text-white pl-3">CV</div>
      </a>
    </div>
  );
};

export default Footer;
