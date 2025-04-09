import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { FiAward, FiUsers, FiGlobe, FiBriefcase, FiBook, FiStar } from 'react-icons/fi';
import f1 from '../assets/images/achievement/firstRow/1.jpg';
import f2 from '../assets/images/achievement/firstRow/2.jpg';
import f3 from '../assets/images/achievement/firstRow/4.jpeg';
import f4 from '../assets/images/achievement/firstRow/5.jpg';
import f5 from '../assets/images/achievement/firstRow/6.jpg';
import f6 from '../assets/images/achievement/firstRow/7.jpeg';
import f7 from '../assets/images/achievement/firstRow/8.jpeg';
import f8 from '../assets/images/achievement/firstRow/9.png';
import f9 from '../assets/images/achievement/firstRow/10.png';
import f10 from '../assets/images/achievement/firstRow/11.jpg';
import f11 from '../assets/images/achievement/firstRow/12.jpeg';
import f12 from '../assets/images/achievement/firstRow/13.png';
import f13 from '../assets/images/achievement/firstRow/14.png';
import f14 from '../assets/images/achievement/firstRow/15.png';
//second row
import s1 from '../assets/images/achievement/secondRow/1.jpg';
import s2 from '../assets/images/achievement/secondRow/5.jpg';
import s3 from '../assets/images/achievement/secondRow/4.jpg';
import s4 from '../assets/images/achievement/secondRow/9.jpg';
import s5 from '../assets/images/achievement/secondRow/11.jpg';
import s6 from '../assets/images/achievement/secondRow/12.jpg';
import s7 from '../assets/images/achievement/secondRow/19.jpg';
import s8 from '../assets/images/achievement/secondRow/16.jpg';
import s9 from '../assets/images/achievement/secondRow/21.jpg';
import s10 from '../assets/images/achievement/secondRow/23.jpg';
import s11 from '../assets/images/achievement/secondRow/24.jpg';
import s12 from '../assets/images/achievement/secondRow/26.jpg';
import s13 from '../assets/images/achievement/secondRow/31.jpg';


const Achievements = () => {
  const [isHoveredFirst, setIsHoveredFirst] = useState(false);
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const firstRowControls = useAnimationControls();
  const secondRowControls = useAnimationControls();
  const [firstRowWidth, setFirstRowWidth] = useState(0);
  const [secondRowWidth, setSecondRowWidth] = useState(0);
  const [firstRowItems, setFirstRowItems] = useState([]);
  const [secondRowItems, setSecondRowItems] = useState([]);
  const animationDuration = 20;

  const baseFirstRowAchievements = [
    { title: 'Top 100 Engineering Colleges in India', year: '2024', details: 'Recognized by Higher Education Review for excellence in education.', image: f1 },
    { title: 'Educational Excellence Award', year: '2017', details: 'Honored by Indus Foundation, USA', image: f2 },
    { title: 'Most Promising Engineering College', year: '2016', details: 'Awarded for top placements in Tamilnadu', image: f3 },
    { title: 'Best Overall CSR Excellence', year: '2016', details: 'Recognized for CSR initiatives nationwide', image: f4 },
    { title: 'Educational Excellence Award', year: '2016', details: 'Honored at Indo Global Summit', image: f5 },
    { title: 'India Education Excellence Award', year: '2014', details: 'Top engineering institute in Tamil Nadu', image: f6 },
    { title: 'National Anti-Corruption Rally Award', year: '2013-14', details: 'Best national youth rally event', image: f7 },
    { title: 'AA+ Ranking Recognition', year: '2022', details: 'Top rank by Career 360 magazine', image: f8 },
    { title: '203rd Rank by The Week', year: '—', details: 'Ranked among top colleges in India', image: f8 },
    { title: 'Best Infra Award 2013', year: '2013', details: 'Awarded for infrastructure and student support', image: f9 },
    { title: 'Global Edu Excellence', year: '—', details: 'Recognized by Indus Foundation and MHRD', image: f10 },
    { title: 'Academic Excellence Recognition', year: '2018', details: 'Honored for academic contributions in technology', image: f11 },
    { title: 'Tech Innovation Award', year: '2020', details: 'Recognized for outstanding app development', image: f12 },
    { title: 'Outstanding Community Impact', year: '2019', details: 'For initiatives benefiting local communities', image: f13 },
    { title: 'Academic Excellence Recognition', year: '2018', details: 'Honored for academic contributions in technology', image: f14 },
  ];

  const baseSecondRowAchievements = [
    { title: 'Team PloyVictory', year: '2025', details: 'A versatile group where each member showcased talent in a unique event — from coding to debates, they conquered every corner of the symposium world.', image: s1 },
    
    { title: 'Spectrum Squad', year: '2025', details: 'Like a prism of talents, each member of this group shined in their own hue—coding, robotics, design, quiz, you name it—they won it.', image: s2 },

    { title: 'The Eventeers', year: '2025', details: "Masters of multitasking! This team's strength was in diversity, with every member excelling in a completely different competition.", image: s3 },

    { title: 'VarieVictors', year: '2025', details: 'United in difference, this group grabbed golds across different domains. No two members entered the same battlefield—yet all came out champions.', image: s4 },
    { title: 'Multiverse Minds', year: '2025', details: 'Each member lived in a different universe of events—tech talks, AI challenges, web wars, and more—but together they ruled them all.', image: s5 },
    { title: 'PatchWork Prodigies', year: '2025', details: "Like a beautiful patchwork quilt, this group was stitched together with distinct skills. Each member left their mark in a different domain.", image: s6 },
    { title: 'Infinite Vibes', year: '2025', details: "Whether it was logic, art, hardware, or words—this team had infinite vibes and infinite wins from every event they entered individually.", image: s7 },
    { title: 'SkillStormers', year: '2025', details: "They brought a storm of skills to the symposiums, each member conquering their own niche—from solo coding to group battles.", image: s8 },
    { title: 'TrailMix Titans', year: '2025', details: "A trail mix of intellect, design, wit, and innovation. Every member brought a different flavor to the victory table.", image: s9 },
    { title: 'Diverge Dons', year: '2025', details: "They didn’t follow the same path—instead, they diverged. And on each unique path, they achieved excellence.", image: s10 },
    { title: 'Versatilions', year: '2025', details: "Roaring with versatility, this lion-hearted crew won across debates, software, hardware, and creative events.", image: s11 },
    { title: 'Quantum Unity', year: '2025', details: "Operating on different frequencies, but entangled in success—this group’s strength was in unique contributions and unified victories.", image: s12 },
  ];

  useEffect(() => {
    setFirstRowItems([...baseFirstRowAchievements, ...baseFirstRowAchievements, ...baseFirstRowAchievements]);
    setSecondRowItems([...baseSecondRowAchievements, ...baseSecondRowAchievements, ...baseSecondRowAchievements]);
  }, []);

  // --- First Row Logic ---
  useEffect(() => {
    const updateFirstRowWidth = () => {
      if (firstRowRef.current) {
        setFirstRowWidth(firstRowRef.current.scrollWidth);
      }
    };
    updateFirstRowWidth();
    window.addEventListener('resize', updateFirstRowWidth);
    return () => window.removeEventListener('resize', updateFirstRowWidth);
  }, [firstRowItems]);

  useEffect(() => {
    const scrollFirstRow = async () => {
      if (!isHoveredFirst && firstRowWidth > 0) {
        await firstRowControls.start({
          x: `-${firstRowWidth / 3}px`,
          transition: { duration: animationDuration, ease: 'linear', repeat: Infinity },
        });
      }
    };

    if (!isHoveredFirst && firstRowWidth > 0) {
      scrollFirstRow();
    } else {
      firstRowControls.stop();
    }
  }, [isHoveredFirst, firstRowWidth, firstRowControls, animationDuration]);

  useEffect(() => {
    if (isHoveredFirst) {
      firstRowControls.stop();
    } else if (firstRowWidth > 0) {
      firstRowControls.start({
        x: `-${firstRowWidth / 3}px`,
        transition: { duration: animationDuration, ease: 'linear', repeat: Infinity },
      });
    }
  }, [isHoveredFirst, firstRowControls, firstRowWidth, animationDuration]);

  // --- Second Row Logic ---
  useEffect(() => {
    const updateSecondRowWidth = () => {
      if (secondRowRef.current) {
        setSecondRowWidth(secondRowRef.current.scrollWidth);
      }
    };

    updateSecondRowWidth();
    window.addEventListener('resize', updateSecondRowWidth);
    return () => window.removeEventListener('resize', updateSecondRowWidth);
  }, [secondRowItems]);


  // Set initial position for second row
  useEffect(() => {
    if (secondRowWidth > 0) {
      secondRowControls.set({ x: -secondRowWidth / 3 });
    }
  }, [secondRowWidth, secondRowControls]);

  useEffect(() => {
    const scrollSecondRow = async () => {
      if (!isHoveredSecond && secondRowWidth > 0) {
        await secondRowControls.start({
          x: '0px',
          transition: {
            duration: animationDuration,
            ease: 'linear',
            repeat: Infinity,
          },
        });
        
      }
    };

    if (!isHoveredSecond && secondRowWidth > 0) {
      scrollSecondRow();
    } else {
      secondRowControls.stop();
    }
  }, [isHoveredSecond, secondRowWidth, secondRowControls, animationDuration]);

  useEffect(() => {
    if (isHoveredSecond) {
      secondRowControls.stop();
    } else if (secondRowWidth > 0) {
      secondRowControls.start({
        x: '0px',
        transition: {
          duration: animationDuration,
          ease: 'linear',
          repeat: Infinity,
        },
      });
      
    }
  }, [isHoveredSecond, secondRowControls, secondRowWidth, animationDuration]);

  return (
    <section id="achievements" className="py-20 px-4 bg-gradient-to-br from-blue-900 to-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Celebrating milestones in academic excellence, community impact, and student success.
          </p>
        </motion.div>

        {/* First Row - Left to Right Continuous Loop */}
        <div className="relative w-full overflow-hidden py-4" ref={firstRowRef}>
          <motion.div
            className="flex space-x-8"
            initial={{ x: 0 }}
            animate={firstRowControls}
            onHoverStart={() => setIsHoveredFirst(true)}
            onHoverEnd={() => setIsHoveredFirst(false)}
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
            }}
          >
            {firstRowItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="relative bg-white/10 rounded-2xl shadow-xl min-w-[300px] h-[320px] flex flex-col items-center justify-end bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-black/50 p-6 rounded-2xl w-full h-[40%] flex flex-col justify-center items-center">
                  <h3 className="font-medium text-lg text-center text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 text-center">{item.details}</p>
                  <span className="block mt-2 text-blue-300">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left Continuous Loop */}
        <div className="relative w-full overflow-hidden py-4 mt-6" ref={secondRowRef}>
          <motion.div
            className="flex space-x-8"
            initial={{ x: 0 }}
            animate={secondRowControls}
            onHoverStart={() => setIsHoveredSecond(true)}
            onHoverEnd={() => setIsHoveredSecond(false)}
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
            }}
          >
            {secondRowItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="relative bg-white/10 rounded-2xl shadow-xl min-w-[300px] max-w-[320px] h-[320px] flex flex-col items-center justify-end bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className=" bg-black/50 p-6 rounded-2xl w-full h-[35%] flex flex-col justify-center items-center">
                  <h3 className="font-medium text-lg text-center text-white">{item.title}</h3>
                  <p className="text-[10px] text-gray-300 text-center">{item.details}</p>
                  <span className="block mt-2 text-blue-300">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
