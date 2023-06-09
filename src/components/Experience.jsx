import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  // w-full cyan-pink-gradient p-[1px] rounded-[12px] shadow-card
  <VerticalTimelineElement contentStyle={{ background: '#021117', color: '#ECFEFF', border: '1px cyan solid', borderRadius: '12px'}} contentArrowStyle={{ borderRight: '8px solid cyan'}} date={experience.date} iconStyle={{ background: experience.iconBg }} icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className="w-[75%] h-[75%] object-contain"
        />
      </div>
    }
  >
    <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>{experience.company_name}</p>

    <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My work
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Experience
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience,"work")