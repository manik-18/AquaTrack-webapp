import React, { useEffect, useRef } from "react";
import Monitoring from "../assets/monitoring.png";
import EasyToUse from "../assets/easyToUse.png";
import Alert from "../assets/alert.png";
import Aquarium from "../assets/aquarium.png";
import fish from "../assets/aquarium.gif";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Home = () => {
  const typedRef = useRef(null);
  useEffect(() => {
    let cleanupTyped;

    const initializeTyped = () => {
      if (typedRef.current) {
        const options = {
          strings: [
            "Monitor Aquarium Parameters",
            "Special Alerts to User",
            "Easy to Use",
          ],
          typeSpeed: 50,
          showCursor: false,
          loop: true,
        };

        const typed = new Typed(typedRef.current, options);

        cleanupTyped = () => {
          if (typed) {
            typed.destroy();
          }
        };
      }
    };

    initializeTyped();

    return cleanupTyped;
  }, []);

  const content = [
    {
      title: "Monitor Aquarium Parameters",
      description:
        "Track pH, hardness, temperature, and dissolved oxygen levels in your aquarium.",
      img: Monitoring,
    },
    {
      title: "Special Alerts to User",
      description:
        "Receive notifications if any fish is diseased or if aquarium parameters deviate from the ideal range.",
      img: Alert,
    },
    {
      title: "Easy to Use",
      description: "User-friendly interface for seamless aquarium management.",
      img: EasyToUse,
    },
  ];

  return (
    <div>
      <section className="body-font mt-16">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
              className="title-font sm:text-4xl text-3xl mb-4 font-medium text-accent"
              ref={typedRef}
            ></h1>
            <p className="mb-8 leading-relaxed text-primary">
              👋 Welcome to Aquarium Parameter Monitoring! 🐠🌊 Monitor crucial
              aspects of your aquarium, including pH levels, hardness,
              temperature, dissolved oxygen, and overall fish health
              effortlessly through our user-friendly website and app. Stay
              informed with timely notifications on any deviations in your
              aquarium parameters, ensuring the well-being of your aquatic
              companions. Dive into a seamless monitoring experience for a
              thriving aquarium environment! 🐟📊
            </p>
            <div className="flex justify-center">
              <Link to="/analysis" className="inline-flex text-black bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-[#39a365] rounded text-lg">
                Check Parameters now
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Aquarium}
            />
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center mt-8 px-8">
        <img src={fish} alt="fish" className="rounded-lg shadow-2xl shadow-accent"/>
      </div>
      <section className="body-font">
        <h1 className="text-center text-accent font-semibold text-4xl mt-32">
          Our Features
        </h1>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {content.map((item, index) => (
              <div key={index} className="p-4 md:w-1/3">
                <div className="h-full border-2 border-accent border-opacity-60 rounded-lg overflow-hidden">
                  <div className="flex justify-center items-center">
                    <img className="h-64" src={item.img} alt={item.title} />
                  </div>
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-accent mb-3">
                      {item.title}
                    </h1>
                    <p className="text-primary leading-relaxed mb-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
