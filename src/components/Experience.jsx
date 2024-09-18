import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css'
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";


const ExperienceCard = ({ experience }) => {
  const { t } = useTranslation();
  return (
    <VerticalTimelineElement
      contentStyle={{ backgroundColor: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="tex-white text-[24px] font-bold">{t(`experience.${experience.id}.title`)}</h3>
        <p style={{ margin: 0 }} className="text-secondary text-[16px] font-semibold">{experience.company_name}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {
            t(`experience.${experience.id}.points`).map((point, index) => (
              <li
                key={`experience-key-${index}`}
                className="text-white-100 text-[14px] pl-1 tracking-wider">
                {point}
              </li>
            ))
          }
        </ul>
      </div>
    </VerticalTimelineElement>)
}

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>{t('experience.headText')}</p>
        <h2 className={`${styles.heroHeadText}`}>{t('experience.subText')}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")