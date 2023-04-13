import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github } from "../assets";
import { linkedin } from "../assets";
import { email } from "../assets";


const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden mb-20`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Can't wait to meet you</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <div className="mt-10 inline-block">
          <a className="flex items-center gap-4 hover:underline hover:text-cyan-400" href="https://github.com/jeddsoh" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className='w-8 h-8 rounded-sm object-cover' />
            <p>github.com/jeddsoh</p>
          </a>
          <a className="flex items-center gap-4 mt-4 hover:underline hover:text-cyan-400" href="https://www.linkedin.com/in/jeddsoh/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className='w-8 h-8 rounded-sm object-cover' />
            <p>linkedin.com/in/jeddsoh</p>
          </a>
          <a className="flex items-center gap-4 mt-4 hover:underline hover:text-cyan-400" href="mailto:jeddsoh@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={email} alt="email" className='w-8 h-8 rounded-sm object-cover' />
            <p>jeddsoh@gmail.com</p>
          </a>
        </div>

      
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");