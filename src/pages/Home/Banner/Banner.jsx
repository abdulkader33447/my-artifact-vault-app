import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Banner = () => {
  const [activeItem, setActiveItem] = useState("item1");

  return (
    <div className="sm:p-0 p-1 my-25">
      <div className="space-y-5  mb-10">
        <>
          <motion.h1
            className="sm:text-5xl text-3xl font-bold text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              scale: { type: "spring", duration: 1 },
            }}
          >
            Discover the Past, Preserve the Legacy
          </motion.h1>
          <motion.p
            className="sm:w-[550px] mx-auto text-center sm:text-xl "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              scale: { type: "spring", duration: 1 },
            }}
          >
            Explore, collect, and safeguard history's most valuable treasures.
            ArtifactsVault is your gateway to discovering ancient relics,
            tracking their stories, and preserving cultural heritage in the
            digital age.
          </motion.p>
        </>
      </div>
      <div className="carousel w-full sm:h-[550px] rounded-2xl">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/RpXswS7P/freepik-upload-12271-1-1.png"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/9mwwB6tJ/freepik-upload-12272-1.png"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/CKhtfyrZ/freepik-upload-36578-1.png"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://i.ibb.co/gMhdd4RJ/freepik-upload-79151-1.png"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-center items-center gap-2 py-2 h-10">
        <a
          href="#item1"
          onClick={() => setActiveItem("item1")}
          className={
            activeItem === "item1"
              ? "text-xl text-success"
              : "text-sm text-success"
          }
        >
          <GoDotFill />
        </a>
        <a
          href="#item2"
          onClick={() => setActiveItem("item2")}
          className={
            activeItem === "item2"
              ? "text-xl text-success"
              : "text-sm text-success"
          }
        >
          <GoDotFill />
        </a>
        <a
          href="#item3"
          onClick={() => setActiveItem("item3")}
          className={
            activeItem === "item3"
              ? "text-xl text-success"
              : "text-sm text-success"
          }
        >
          <GoDotFill />
        </a>
        <a
          href="#item4"
          onClick={() => setActiveItem("item4")}
          className={
            activeItem === "item4"
              ? "text-xl text-success"
              : "text-sm text-success"
          }
        >
          <GoDotFill />
        </a>
      </div>
    </div>
  );
};

export default Banner;
