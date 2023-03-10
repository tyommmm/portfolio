import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

interface ServiceCardType {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardType> = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain " />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(undefined)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        As a junior front end developer, I am constantly amazed by the endless possibilities of the
        web. I am passionate about creating intuitive and visually stunning websites and
        applications that not only look good, but are also a pleasure to use. I love the creativity
        that comes with my job, as well as the opportunity to use my technical skills to bring ideas
        to life. There is always something new to learn and explore in the world of web development,
        and I am excited to be a part of it.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service: any, i: number) => {
          return <ServiceCard key={service.title} index={i} {...service} />;
        })}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
