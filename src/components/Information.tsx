"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import { Yeseva_One } from "next/font/google";
import { cn } from "@/lib/utils";

const YesevaOne = Yeseva_One({ subsets: ["latin"], weight: ["400"] });

const Information = () => {
  return (
    <MaxWidthWrapper className="py-5 flex flex-col justify-center items-center gap-y-2">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-3xl md:text-4xl lg:text-6xl text-center lg:text-start font-bold px-5 md:py-2 text-[#5148fc]"
        )}
      >
        What I Do?
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" flex flex-col-reverse justify-center items-center lg:flex-row"
      >
        {/* left-section  */}
        <div className="flex flex-1 items-center justify-center p-4">
          <img
            src="/svg7.svg"
            alt="svg7.svg"
            className="w-[300px] sm:w-[600px]"
          />
        </div>

        {/* right-section  */}
        <div className="flex flex-1 flex-col justify-center items-center lg:items-start lg:justify-start px-8 py-4 gap-y-5">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-bold px-5 py-2 w-full">
            Fullstack Development
          </h1>
          <div className="flex flex-row flex-wrap justify-center items-center gap-4 my-3">
            <Image
              className="hidden dark:inline-block h-7 mr-3 lg:h-10 lg:mr-8"
              src="/nextjs.svg"
              alt="dark-mode-image"
              width={40}
              height={40}
            />
            <Image
              className="inline-block dark:hidden h-7 mr-3 lg:h-10 lg:mr-8"
              src="/nextjs-dark.svg"
              alt="light-mode-image"
              width={40}
              height={40}
            />

            <img
              src="/react.svg"
              className="h-7 mr-3 lg:h-10 lg:mr-8"
              alt="react"
            />
            <img src="/ts.svg" className="h-7 mr-3 lg:h-10 lg:mr-8" alt="ts" />
            <img src="/js.png" className="h-7 mr-3 lg:h-10 lg:mr-8" alt="js" />
            <img
              src="/nodejs.png"
              className="h-7 mr-3 lg:h-10 lg:mr-8"
              alt="nodejs"
            />
            <img
              src="/mongodb.svg"
              className="h-7 mr-3 lg:h-10 lg:mr-8"
              alt="mongodb"
            />
            <img
              src="/github.png"
              className="h-7 mr-3 lg:h-10 lg:mr-8"
              alt="github"
            />
            <img
              src="/html5.png"
              className="h-7 mr-3 lg:h-10 lg:mr-8"
              alt="html"
            />
            <img
              src="/css3.png"
              className="h-7 mr-3 lg:h-10 lg:mr-8"
              alt="css"
            />

            <img
              src="/tailwind.svg"
              className="h-5 mr-3 lg:h-8 lg:mr-8s"
              alt="tailwind"
            />
          </div>
          <div className="flex flex-col gap-4 text-sm lg:text-xl lg:gap-7">
            <p>
              📍 Proficient in <span className="font-bold">Next.js</span> for
              building scalable and performant web applications with server-side
              rendering.
            </p>
            <p>
              📍 Proficient in <span className="font-bold">ReactJS</span> for
              dynamic and responsive web front-ends, with a strong grasp of core
              principles.
            </p>
            <p>
              📍 Skilled in <span className="font-bold">Tailwind & Sass</span>{" "}
              for efficient and aesthetic styling in web applications.
            </p>
            <p>
              📍 Experienced in building responsive{" "}
              <span className="font-bold">React-Redux websites</span>, ensuring
              optimal user experiences.
            </p>
          </div>
        </div>
      </motion.div>
    </MaxWidthWrapper>
  );
};

export default Information;
