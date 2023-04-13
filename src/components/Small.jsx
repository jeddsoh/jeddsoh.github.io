import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { smallProjects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { chevronright } from '../assets';

const SmallCard = ({
  index,
  name,
  description,
  tags,
  link_name,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-cyan-950 rounded-xl sm:w-[360px] w-full'
      >
        <div className='relative w-full sm:h-[230px] h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-t-xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          </div>
        </div>

        <div className='p-5'>
        <div className='mb-2 flex flex-wrap gap-2 '>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`font-semibold tracking-wide text-cyan-300 text-[13px] uppercase`}
            >
              {tag.name}
            </p>
          ))}
        </div>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 leading-relaxed text-white text-[14px]'>{description}</p>
          <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='inline-flex items-center gap-2 align-middle text-cyan-300 cursor-pointer hover:underline rounded-md mt-4'
            >
              <p>{link_name}</p>
              <img
            src={chevronright}
            alt='chevron_right'
            className='text-cyan-300 w-[16px] h-[16px] object-cover rounded-t-md'
          />
            </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Small = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Other</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {smallProjects.map((smallProject, index) => (
          <SmallCard key={`smallProject-${index}`} index={index} {...smallProject} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Small, "");