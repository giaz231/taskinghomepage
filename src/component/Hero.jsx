import React from "react";
import usee from "../assets/usee.png";
import amazon from "../assets/Amazon2.png";
import atlassian from "../assets/Atlassian.png";
import google from "../assets/Google2.png";

const Hero = () => {
  return (
    <div className=" bg-white ">
      <div className="hero-content flex-col lg:flex-row-reverse mx-auto mt-20">
        <img src={usee} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-7xl font-bold text-usee-grey">User List</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the p rinting and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ips
          </p>
          <button className="btn bg-usee-blue">Get Started</button>
        </div>
      </div>
      <div className="py-10"></div>
      <div className="border-t-2 mt-20"></div>
      <div className="flex justify-center">
        <img src={amazon} className="w-1/6 " alt="" />
        <img src={atlassian} className="w-1/6 " alt="" />
        <img src={google} className="w-1/6 " alt="" />
      </div>
    </div>
  );
};

export default Hero;
