import React from "react";
import shreya from "../assets/shreya.png";
import sudeep from "../assets/sudeep.png";
import manik from "../assets/manik.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/logo.png";
import Vite from "../assets/vite.svg";
import ReactImg from "../assets/react.svg";
import firebase from "../assets/firebase.svg";
import tailwindcss from "../assets/tailwind.svg";
import pushprotocol from "../assets/push.png";
import nodejs from "../assets/nodejs.svg";

const About = () => {
  return (
    <div>
      <div className="mt-24">
        <section className="bg-background">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl lg:text-4xl text-accent">
              About AquaTracker
            </h1>
            <p className="text-center my-[30px] text-lg font-normal lg:text-xl sm:px-16 xl:px-38 text-primary">
              Welcome to Aqua Tracker, your go-to solution for aquarium
              enthusiasts seeking a seamless and efficient monitoring
              experience. Our platform offers real-time monitoring of essential
              parameters like temperature, pH levels, ammonia, nitrite, and
              nitrate, ensuring you stay well-informed about your aquarium's
              conditions at all times. What sets Aqua Tracker apart is its
              customizable alert system, allowing you to set personalized
              thresholds for each parameter. Receive instant notifications on
              your preferred device, empowering you to address any potential
              issues promptly and safeguard the health of your aquatic
              companions. With Aqua Tracker, maintaining an optimal environment
              for your aquarium has never been more convenient. Dive into the
              future of aquarium care with Aqua Tracker and elevate your aquatic
              hobby to new heights.
            </p>

            <div className="flex justify-center items-center mt-24 ">
              <img src={Logo} alt="videogame" className="w-96 h-96" />
            </div>

            <h1 className="mt-[100px] mb-[30px] text-2xl font-bold tracking-tight leading-none md:text-3xl lg:text-4xl text-accent">
              Developed by
            </h1>

            <div className="container mx-auto p-4">
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 hover:scale-105">
                  <div className="bg-background rounded-lg shadow-lg border-primary border-2 p-6">
                    <img
                      src={manik}
                      alt="Manik Gupta"
                      className="w-32 h-32 mx-auto rounded-full mb-4 border-primary border-2"
                    />
                    <h2 className="text-accent font-semibold">Manik Gupta</h2>
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/manik1810/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin size={32} color="white" />
                      </a>
                      <a
                        href="https://github.com/manik-18"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={32} color="white" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 hover:scale-105">
                  <div className="bg-background rounded-lg shadow-lg border-primary border-2 p-6">
                    <img
                      src={sudeep}
                      alt="Sudeep Arashingodi"
                      className="w-32 h-32 mx-auto rounded-full mb-4 border-primary border-2"
                    />
                    <h2 className="text-accent font-semibold">
                      Sudeep Arashingodi
                    </h2>
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <a
                        href="https://www.linkedin.com/in/sudeep-m-arashingodi-078518202/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin size={32} color="white" />
                      </a>
                      <a
                        href="https://github.com/Sudeep-code-it"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={32} color="white" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 hover:scale-105">
                  <div className="bg-background rounded-lg shadow-lg border-primary border-2 p-6">
                    <img
                      src={shreya}
                      alt="Shreya Acharya"
                      className="w-32 h-32 mx-auto rounded-full mb-4 border-primary border-2"
                    />
                    <h2 className="text-accent font-semibold">
                      Shreya Acharya
                    </h2>
                    <div className="mt-4 flex items-center justify-center gap-3">
                      <span>
                        <FaLinkedin size={32} color="white" />
                      </span>
                      <span>
                        <FaGithub size={32} color="white" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="mt-[100px] mb-[30px] text-2xl font-bold tracking-tight leading-none  md:text-3xl lg:text-4xl text-accent">
              Integrated Technologies
            </h1>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col items-center m-3">
                <img src={Vite} alt="vite" className="w-32 h-32" />
                <p className="mt-2  text-primary font-medium">Vite</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img src={ReactImg} alt="reactImg" className="w-32 h-32" />
                <p className="mt-2  text-primary font-medium">React</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img
                  src={tailwindcss}
                  alt="tailwindcss"
                  className="w-32 h-32"
                />
                <p className="mt-2  text-primary font-medium">Tailwind</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img src={firebase} alt="firebase" className="w-32 h-32" />
                <p className="mt-2  text-primary font-medium">Firebase</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img src={pushprotocol} alt="push" className="w-32 h-32" />
                <p className="mt-2  text-primary font-medium">Push Protocol</p>
              </div>
              <div className="flex flex-col items-center m-3">
                <img src={nodejs} alt="node" className="w-32 h-32" />
                <p className="mt-2  text-primary font-medium">Node</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
