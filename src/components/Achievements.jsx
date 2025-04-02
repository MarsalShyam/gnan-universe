import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiGlobe, FiBriefcase, FiBook, FiStar } from 'react-icons/fi';

const Achievements = () => {
  const firstRowAchievements = [
    { title: 'National Social Media Champions', year: '2023', details: 'Recognized for innovative campus campaigns', image: '/images/achievement1.jpg' },
    { title: 'Best Student-Run Digital Platform', year: '2022', details: 'Awarded by Digital Education Foundation', image: '/images/achievement2.jpg' },
    { title: 'Excellence in Digital Marketing', year: '2021', details: 'Top-rated strategy for audience engagement', image: '/images/achievement3.jpg' },
    { title: 'Tech Innovation Award', year: '2020', details: 'Recognized for outstanding app development', image: '/images/achievement4.jpg' },
    { title: 'Outstanding Community Impact', year: '2019', details: 'For initiatives benefiting local communities', image: '/images/achievement5.jpg' },
    { title: 'Academic Excellence Recognition', year: '2018', details: 'Honored for academic contributions in technology', image: '/images/achievement6.jpg' },
  ];

  const secondRowAchievements = [
    { title: 'Global Coding Championship', year: '2023', details: 'Secured top 5 rank among 10,000 participants', image: '/images/achievement7.jpg' },
    { title: 'Innovative Research Grant', year: '2022', details: 'Received funding for AI-driven research', image: '/images/achievement8.jpg' },
    { title: 'Best UI/UX Design Award', year: '2021', details: 'Recognized for exceptional user experience', image: '/images/achievement9.jpg' },
    { title: 'Startup Pitch Winner', year: '2020', details: 'Won funding for entrepreneurial startup idea', image: '/images/achievement10.jpg' },
    { title: 'National Leadership Award', year: '2019', details: 'Acknowledged for leadership in student community', image: '/images/achievement11.jpg' },
    { title: 'Educational Contribution Award', year: '2018', details: 'For significant impact in technology education', image: '/images/achievement12.jpg' },
  ];

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
        <div className="relative w-full overflow-hidden py-4">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            {[...firstRowAchievements, ...firstRowAchievements].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="relative bg-white/10 p-6 rounded-2xl shadow-xl min-w-[320px] h-[350px] flex flex-col items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-black/50 p-6 rounded-2xl w-full h-full flex flex-col justify-center items-center">
                  <h3 className="font-medium text-lg text-center text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 text-center">{item.details}</p>
                  <span className="block mt-2 text-blue-300">{item.year}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Right to Left Continuous Loop */}
        <div className="relative w-full overflow-hidden py-4 mt-6">
          <motion.div
            className="flex space-x-8"
            animate={{ x: ['-100%', '0%'] }}
            transition={{ repeat: Infinity, duration: 15, ease: 'linear' }}
          >
            {[...secondRowAchievements, ...secondRowAchievements].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="relative bg-white/10 p-6 rounded-2xl shadow-xl min-w-[320px] h-[350px] flex flex-col items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="bg-black/50 p-6 rounded-2xl w-full h-full flex flex-col justify-center items-center">
                  <h3 className="font-medium text-lg text-center text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300 text-center">{item.details}</p>
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
