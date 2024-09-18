import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { useTranslation } from 'react-i18next'
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='w-full xs:w-[250px]'>
      <motion.div
        key={true}
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max: 45,
          scale: 1,
          speed: 450
        }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div>
        <p className={`${styles.sectionSubText}`}>{t('work.headText')}</p>
        <h2 className={`${styles.heroHeadText}`}>{t('work.headText')}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
        dangerouslySetInnerHTML={{ __html: t('work.description') }}
      >
        
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");