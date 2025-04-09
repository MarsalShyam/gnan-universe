// import React from 'react';
// import { motion } from 'framer-motion';
// import { 
//   FiAward, 
//   FiBook, 
//   FiUsers, 
//   FiBriefcase, 
//   FiDollarSign, 
//   FiUserCheck, 
//   FiTrendingUp,
//   FiStar,
//   FiGlobe
// } from 'react-icons/fi';
// import { SiMicrosoft, SiTesla, SiBosch, SiInfosys, SiTata } from 'react-icons/si';
// import f1 from '../assets/images/achievement/firstRow/1.jpg';
// import f2 from '../assets/images/achievement/firstRow/2.jpg';
// import f3 from '../assets/images/achievement/firstRow/4.jpeg';
// import f4 from '../assets/images/achievement/firstRow/5.jpg';
// import f5 from '../assets/images/achievement/firstRow/6.jpg';
// import f6 from '../assets/images/achievement/firstRow/7.jpeg';
// import f7 from '../assets/images/achievement/firstRow/8.jpeg';
// import f8 from '../assets/images/achievement/firstRow/9.png';
// import f9 from '../assets/images/achievement/firstRow/10.png';
// import f10 from '../assets/images/achievement/firstRow/11.jpg';
// import f11 from '../assets/images/achievement/firstRow/12.jpeg';
// import f12 from '../assets/images/achievement/firstRow/13.png';
// import f13 from '../assets/images/achievement/firstRow/14.png';
// import f14 from '../assets/images/achievement/firstRow/15.png';

// const Achievements = () => {
//   // Achievement Data
//   const achievements = {
//     institutional: [
//       { 
//         title: 'Top 100 Engineering Colleges in India', 
//         year: '2024', 
//         details: 'Recognized by Higher Education Review for excellence in education',
//         image: f1,
//         icon: <FiAward />
//       },
//       {
//         title: 'Best Infrastructure Award',
//         year: '2013',
//         details: 'Awarded for world-class campus facilities',
//         image: f9,
//         icon: <FiStar />
//       },
//     ],
//     academic: [
//       {
//         title: 'AA+ Ranking Recognition',
//         year: '2022',
//         details: 'Top rank by Career 360 magazine',
//         image: f8,
//         icon: <FiBook />
//       },
//     ],
//     studentSuccess: [
//       {
//         title: 'Global Coding Championship',
//         year: '2023',
//         details: 'Secured top 5 rank among 10,000 participants',
//         image: f12,
//         icon: <FiUsers />
//       },
//     ],
//     placements: [
//       { 
//         title: 'Campus Placement Record', 
//         year: '2024', 
//         details: 'Outstanding placement performance in core engineering sectors',
//         image: f3,
//         icon: <FiBriefcase />,
//         highlights: [
//           '₹6-10 LPA Average Package',
//           '90% Placement Rate',
//           '650+ Offers Received'
//         ],
//         companies: ['Microsoft', 'Tesla', 'Bosch', 'Infosys', 'TATA']
//       },
//     ]
//   };

//   // Statistics Data
//   const statistics = [
//     { value: '100+', label: 'National Awards', icon: <FiAward /> },
//     { value: '96%', label: 'Placement Rate', icon: <FiBriefcase /> },
//     { value: '50+', label: 'Global Partnerships', icon: <FiGlobe /> },
//     { value: '10K+', label: 'Alumni Network', icon: <FiUsers /> }
//   ];

//   // Components
//   const AchievementCard = ({ achievement }) => (
//     <motion.div 
//       className="relative bg-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-[400px]"
//       whileHover={{ y: -10 }}
//     >
//       <div className="relative h-60 overflow-hidden">
//         <img 
//           src={achievement.image} 
//           alt={achievement.title}
//           className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
//           <div className="flex items-center gap-3 text-blue-300">
//             {achievement.icon}
//             <span className="font-medium">{achievement.year}</span>
//           </div>
//           <h3 className="text-xl font-semibold text-white mt-2">{achievement.title}</h3>
//         </div>
//       </div>
//       <div className="p-6">
//         <p className="text-gray-300">{achievement.details}</p>
//       </div>
//     </motion.div>
//   );

//   const PlacementCard = ({ achievement }) => (
//     <motion.div 
//       className="relative bg-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-[450px]"
//       whileHover={{ y: -10 }}
//     >
//       <div className="relative h-60 overflow-hidden">
//         <img 
//           src={achievement.image} 
//           alt={achievement.title}
//           className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
//           <div className="flex items-center gap-3 text-blue-300">
//             {achievement.icon}
//             <span className="font-medium">{achievement.year}</span>
//           </div>
//           <h3 className="text-xl font-semibold text-white mt-2">{achievement.title}</h3>
//         </div>
//       </div>
//       <div className="p-6">
//         <p className="text-gray-300 mb-4">{achievement.details}</p>
//         <div className="space-y-2">
//           {achievement.highlights.map((item, index) => (
//             <div key={index} className="flex items-center gap-2 text-blue-300">
//               <FiTrendingUp />
//               <span className="text-sm">{item}</span>
//             </div>
//           ))}
//         </div>
//         <div className="mt-4 border-t border-white/10 pt-4">
//           <h4 className="text-sm text-gray-300 mb-2">Top Recruiters:</h4>
//           <div className="flex flex-wrap gap-2">
//             {achievement.companies.map((company, index) => (
//               <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-sm">
//                 {company}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );

//   const StatisticBox = ({ stat }) => (
//     <motion.div 
//       className="bg-white/5 rounded-xl p-6 text-center backdrop-blur-sm"
//       whileHover={{ scale: 1.05 }}
//     >
//       <div className="text-blue-300 text-4xl mb-4 flex justify-center">
//         {stat.icon}
//       </div>
//       <div className="text-4xl font-bold mb-2">{stat.value}</div>
//       <div className="text-gray-300 uppercase text-sm">{stat.label}</div>
//     </motion.div>
//   );

//   const AchievementCategory = ({ title, items, icon }) => (
//     <section className="mb-16">
//       <motion.div 
//         className="flex items-center gap-4 mb-8"
//         initial={{ opacity: 0, x: -20 }}
//         whileInView={{ opacity: 1, x: 0 }}
//       >
//         <div className="text-blue-300 text-3xl">{icon}</div>
//         <h2 className="text-3xl font-bold">{title}</h2>
//       </motion.div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {items.map((item, index) => (
//           <AchievementCard key={index} achievement={item} />
//         ))}
//       </div>
//     </section>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
//       <section className="max-w-7xl mx-auto px-4 py-20">
//         {/* Hero Section */}
//         <motion.div 
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           <h1 className="text-5xl font-bold mb-6">Our Legacy of Excellence</h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Decades of academic distinction, innovation, and outstanding student success
//           </p>
//         </motion.div>

//         {/* Key Statistics */}
//         <motion.div 
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//         >
//           {statistics.map((stat, index) => (
//             <StatisticBox key={index} stat={stat} />
//           ))}
//         </motion.div>

//         {/* Placement Excellence Section */}
//         <section className="mb-20">
//           <motion.div 
//             className="flex items-center gap-4 mb-8"
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//           >
//             <FiBriefcase className="text-blue-300 text-3xl" />
//             <h2 className="text-3xl font-bold">Placement Excellence</h2>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {achievements.placements.map((achievement, index) => (
//               <PlacementCard key={index} achievement={achievement} />
//             ))}
//           </div>
//         </section>

//         {/* Institutional Achievements */}
//         <AchievementCategory 
//           title="Institutional Honors"
//           items={achievements.institutional}
//           icon={<FiAward />}
//         />

//         {/* Academic Excellence */}
//         <AchievementCategory 
//           title="Academic Excellence"
//           items={achievements.academic}
//           icon={<FiBook />}
//         />

//         {/* Student Success */}
//         <AchievementCategory 
//           title="Student Success Stories"
//           items={achievements.studentSuccess}
//           icon={<FiUsers />}
//         />

//         {/* Call to Action */}
//         <motion.div 
//           className="text-center mt-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//         >
//           <h2 className="text-3xl font-bold mb-6">Shape Your Future With Us</h2>
//           <motion.button 
//             className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-medium transition-all"
//             whileHover={{ scale: 1.05 }}
//           >
//             Start Your Journey Today
//           </motion.button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Achievements;



// import React from 'react';
// import { motion } from 'framer-motion';
// import { FiAward,FiBriefcase } from 'react-icons/fi';
// import { FiGlobe } from 'react-icons/fi';
// import { FiUsers } from 'react-icons/fi';
// import { FiTrendingUp } from 'react-icons/fi';
// import { 
//   SiMicrosoft, 
//   SiTesla, 
//   SiBosch, 
//   SiInfosys, 
//   SiGoogle, 
//   SiAmazon, 
//   SiIntel, 
//   SiSiemens, 
//   SiHonda 
// } from 'react-icons/si';
// import { SiTata } from 'react-icons/si';

// import f1 from '../assets/images/achievement/firstRow/1.jpg';
// import f2 from '../assets/images/achievement/firstRow/2.jpg';
// import f3 from '../assets/images/achievement/firstRow/7.jpeg';
// import f4 from '../assets/images/achievement/firstRow/5.jpg';
// import f5 from '../assets/images/achievement/firstRow/6.jpg';
// import f6 from '../assets/images/achievement/firstRow/7.jpeg';
// import f7 from '../assets/images/achievement/firstRow/8.jpeg';
// import f8 from '../assets/images/achievement/firstRow/9.png';
// import f9 from '../assets/images/achievement/firstRow/10.png';
// import f10 from '../assets/images/achievement/firstRow/11.jpg';
// import f11 from '../assets/images/achievement/firstRow/12.jpeg';
// import f12 from '../assets/images/achievement/firstRow/13.png';
// import f13 from '../assets/images/achievement/firstRow/14.png';
// import f14 from '../assets/images/achievement/firstRow/15.png';

// const Achievements = () => {
//   // Data
//   const statistics = [
//     { value: '100+', label: 'National Awards', icon: <FiAward /> },
//     { value: '96%', label: 'Placement Rate', icon: <FiBriefcase /> },
//     { value: '50+', label: 'Global Partnerships', icon: <FiGlobe /> },
//     { value: '10K+', label: 'Alumni Network', icon: <FiUsers /> }
//   ];

//   const achievements = {
//     placements: [
//       { 
//         title: 'Placement Milestone 2024', 
//         year: '2024', 
//         details: 'Record-breaking placements with 650+ offers in core engineering sectors',
//         image: f3,
//         highlights: [
//           '₹44 LPA Highest Package',
//           '120+ Recruiting Companies',
//           '85% Core Engineering Placements'
//         ]
//       }
//     ],
//     institutional: [
//       { 
//         title: 'Top 100 Engineering Colleges', 
//         year: '2024', 
//         details: 'Recognized by Higher Education Review',
//         image: f1,
//         icon: <FiAward />
//       }
//     ]
//   };

//   const topRecruiters = [
//     { name: 'Microsoft', icon: <SiMicrosoft className="text-5xl" /> },
//     { name: 'Tesla', icon: <SiTesla className="text-5xl" /> },
//     { name: 'Bosch', icon: <SiBosch className="text-5xl" /> },
//     { name: 'Infosys', icon: <SiInfosys className="text-5xl" /> },
//     { name: 'TATA', icon: <SiTata className="text-5xl" /> },
//     { name: 'Google', icon: <SiGoogle className="text-5xl" /> },
//     { name: 'Amazon', icon: <SiAmazon className="text-5xl" /> },
//     { name: 'Intel', icon: <SiIntel className="text-5xl" /> },
//     { name: 'Siemens', icon: <SiSiemens className="text-5xl" /> },
//     { name: 'Honda', icon: <SiHonda className="text-5xl" /> },
//   ];

//   // Components
//   const StatisticBox = ({ stat }) => (
//     <motion.div 
//       className="bg-white/5 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-all"
//       whileHover={{ scale: 1.05 }}
//     >
//       <div className="text-blue-300 text-4xl mb-4">{stat.icon}</div>
//       <div className="text-4xl font-bold mb-2">{stat.value}</div>
//       <div className="text-gray-300 text-sm uppercase">{stat.label}</div>
//     </motion.div>
//   );

//   const AchievementCard = ({ achievement }) => (
//     <motion.div 
//       className="relative bg-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all"
//       whileHover={{ y: -10 }}
//     >
//       <div className="relative h-60 overflow-hidden">
//         <img 
//           src={achievement.image} 
//           alt={achievement.title}
//           className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
//           <div className="flex items-center gap-3 text-blue-300">
//             {achievement.icon}
//             <span className="font-medium">{achievement.year}</span>
//           </div>
//           <h3 className="text-xl font-semibold text-white mt-2">{achievement.title}</h3>
//         </div>
//       </div>
//       <div className="p-6">
//         <p className="text-gray-300">{achievement.details}</p>
//       </div>
//     </motion.div>
//   );

//   const PlacementHighlight = () => (
//     <motion.div 
//       className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//     >
//       <h3 className="text-2xl font-bold mb-6">Placement Highlights</h3>
//       <div className="grid gap-4">
//         {achievements.placements[0].highlights.map((item, index) => (
//           <div key={index} className="flex items-center gap-3">
//             <FiTrendingUp className="text-xl text-blue-200" />
//             <span className="font-medium">{item}</span>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
//       <section className="max-w-7xl mx-auto px-4 py-20">
//         {/* Hero Section */}
//         <motion.div 
//           className="text-center mb-20"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//         >
//           <h1 className="text-5xl font-bold mb-6">Our Legacy of Excellence</h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Celebrating decades of academic distinction and student success
//           </p>
//         </motion.div>

//         {/* Key Statistics */}
//         <motion.div 
//           className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//         >
//           {statistics.map((stat, index) => (
//             <StatisticBox key={index} stat={stat} />
//           ))}
//         </motion.div>

//         {/* Placement Section */}
//         <section className="mb-20">
//           <motion.div 
//             className="grid lg:grid-cols-2 gap-12 mb-16"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//           >
//             <div className="space-y-8">
//               <motion.h2 
//                 className="text-4xl font-bold text-blue-300"
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//               >
//                 Placement Excellence
//               </motion.h2>
//               <PlacementHighlight />
//             </div>
            
//             <AchievementCard achievement={achievements.placements[0]} />
//           </motion.div>

//           {/* Top Recruiters */}
//           <motion.section 
//             className="py-12 bg-white/5 backdrop-blur-sm rounded-2xl"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//           >
//             <h3 className="text-2xl font-bold text-center mb-8 text-blue-300">
//               Our Esteemed Recruiters
//             </h3>
//             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
//               {topRecruiters.map((recruiter, index) => (
//                 <motion.div
//                   key={index}
//                   className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <span className="text-5xl text-white">{recruiter.icon}</span>
//                   <p className="text-gray-300 text-center font-medium">
//                     {recruiter.name}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>
//         </section>

//         {/* Institutional Achievements */}
//         <motion.section 
//           className="mb-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//         >
//           <h2 className="text-3xl font-bold text-blue-300 mb-8">Institutional Honors</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {achievements.institutional.map((achievement, index) => (
//               <AchievementCard key={index} achievement={achievement} />
//             ))}
//           </div>
//         </motion.section>

//         {/* CTA Section */}
//         <motion.div 
//           className="text-center mt-20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//         >
//           <h2 className="text-3xl font-bold mb-6">Join Our Success Story</h2>
//           <motion.button 
//             className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-medium transition-all"
//             whileHover={{ scale: 1.05 }}
//           >
//             Start Your Journey Today
//           </motion.button>
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Achievements;

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiAward, FiBook, FiUsers, FiBriefcase, FiDollarSign, 
  FiTrendingUp, FiStar, FiGlobe 
} from 'react-icons/fi';
import { 
  SiMicrosoft, SiTesla, SiBosch, SiInfosys, SiTata,
  SiGoogle, SiAmazon, SiIntel, SiSiemens, SiHonda 
} from 'react-icons/si';
import f1 from '../assets/images/achievement/firstRow/1.jpg';
import f3 from '../assets/images/achievement/firstRow/7.jpeg';
import f8 from '../assets/images/achievement/firstRow/9.png';
import f9 from '../assets/images/achievement/firstRow/10.png';
import f12 from '../assets/images/achievement/firstRow/13.png';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../assets/images/companyLogo/logos.jpg'

import st1 from '../assets/images/achievement/startup/1.jpg'
import st2 from '../assets/images/achievement/startup/2.jpg'
import st3 from '../assets/images/achievement/startup/3.jpg'
import st4 from '../assets/images/achievement/startup/4.jpg'
import st5 from '../assets/images/achievement/startup/5.jpg'
import st6 from '../assets/images/achievement/startup/6.jpg'


const Achievements = () => {
  // Data
  const statistics = [
    { value: '100+', label: 'National Awards', icon: <FiAward /> },
    { value: '90%', label: 'Placement Rate', icon: <FiBriefcase /> },
    { value: '50+', label: 'Global Partnerships', icon: <FiGlobe /> },
    { value: '10K+', label: 'Alumni Network', icon: <FiUsers /> }
  ];

  const achievements = {
    institutional: [
      { 
        title: 'Top 100 Engineering Colleges in India', 
        year: '2024', 
        details: 'Recognized by Higher Education Review for excellence in education',
        image: f1,
        icon: <FiAward />
      },
      {
        title: 'Best Infrastructure Award',
        year: '2013',
        details: 'Awarded for world-class campus facilities',
        image: f9,
        icon: <FiStar />
      }
    ],
    academic: [
      {
        title: 'AA+ Ranking Recognition',
        year: '2022',
        details: 'Top rank by Career 360 magazine',
        image: f8,
        icon: <FiBook />
      }
    ],
    studentSuccess: [
      {
        title: 'MBA',
        year: '2024',
        details: 'Divya Desserts and K.R.V Event Management & Photography',
        image: st1,
        icon: <FiUsers />
      },
      {
        title: 'MCA',
        year: '2025',
        details: 'Learning Entrepreneurship with Expert Mentoring',
        image: st2,
        icon: <FiUsers />
      },
      {
        title: 'EEE',
        year: '2025',
        details: 'Innovate, Structure & Pitch',
        image: st3,
        icon: <FiUsers />
      },
      {
        title: 'AI & DS',
        year: '2025',
        details: 'HCTMM MEDTECH: Transforming Healthcare with 24/7 Smart Medical Kiosks for Instant Health Checkup, Telemedicine and Automated Medicine Dispensing',
        image: st5,
        icon: <FiUsers />
      },
      {
        title: 'BME',
        year: '2025',
        details: 'Light Blue Medical Clinic Presentation & Smart Inhaler Health System',
        image: st6,
        icon: <FiUsers />
      },
      


    ],
    placements: [
      { 
        title: 'Campus Placement Record', 
        year: '2024', 
        details: 'Outstanding placement performance in core engineering sectors',
        image: f3,
        icon: <FiBriefcase />,
        highlights: [
          '₹6-10 LPA Average Package',
          '90% Placement Rate',
          '650+ Offers Received'
        ],
        companies: ['Microsoft', 'Tesla', 'Bosch', 'Infosys', 'TATA']
      }
    ]
  };

  const topRecruiters = [
    { name: 'Microsoft', icon: <SiMicrosoft className="text-5xl" /> },
    { name: 'Tesla', icon: <SiTesla className="text-5xl" /> },
    { name: 'Bosch', icon: <SiBosch className="text-5xl" /> },
    { name: 'Infosys', icon: <SiInfosys className="text-5xl" /> },
    { name: 'TATA', icon: <SiTata className="text-5xl" /> },
    { name: 'Google', icon: <SiGoogle className="text-5xl" /> },
    { name: 'Amazon', icon: <SiAmazon className="text-5xl" /> },
    { name: 'Intel', icon: <SiIntel className="text-5xl" /> },
    { name: 'Siemens', icon: <SiSiemens className="text-5xl" /> },
    { name: 'Honda', icon: <SiHonda className="text-5xl" /> },
  ];

  // Components
  const StatisticBox = ({ stat }) => (
    <motion.div 
      className="bg-white/5 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-white/10 transition-all"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-blue-300 text-4xl mb-4">{stat.icon}</div>
      <div className="text-4xl font-bold mb-2">{stat.value}</div>
      <div className="text-gray-300 text-sm uppercase">{stat.label}</div>
    </motion.div>
  );

  const AchievementCard = ({ achievement }) => (
    <motion.div 
      className="relative bg-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-[400px]"
      whileHover={{ y: -10 }}
    >
      <div className="relative h-70 overflow-hidden">
        <img 
          src={achievement.image} 
          alt={achievement.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 p-4">
          <div className="flex items-center gap-3 text-blue-300">
            {achievement.icon}
            <span className="font-medium">{achievement.year}</span>
          </div>
          <h3 className="text-xl font-semibold text-white mt-2">{achievement.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-300">{achievement.details}</p>
        {achievement.highlights && (
          <div className="mt-4 space-y-2">
            {achievement.highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-blue-300">
                <FiTrendingUp className="text-lg" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        )}
        {achievement.companies && (
          <div className="mt-4 border-t border-white/10 pt-4">
            <h4 className="text-sm text-gray-300 mb-2">Top Recruiters:</h4>
            <div className="flex flex-wrap gap-2">
              {achievement.companies.map((company, index) => (
                <span key={index} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                  {company}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );

  const AchievementCategory = ({ title, items, icon }) => (
    <section className="mb-16">
      <motion.div 
        className="flex items-center gap-4 mb-8"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="text-blue-300 text-3xl">{icon}</div>
        <h2 className="text-3xl font-bold">{title}</h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <AchievementCard key={index} achievement={item} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <section className="max-w-7xl mx-auto px-4 py-20">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300 mb-12">
              <FiArrowLeft className="text-xl" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-6">Our Legacy of Excellence</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Celebrating decades of academic distinction and student success
          </p>
        </motion.div>

        {/* Key Statistics */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {statistics.map((stat, index) => (
            <StatisticBox key={index} stat={stat} />
          ))}
        </motion.div>

        {/* Placement Section */}
        <section className="mb-20">
          <motion.div 
            className="flex items-center gap-4 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <FiBriefcase className="text-blue-300 text-3xl" />
            <h2 className="text-3xl font-bold">Placement Excellence</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {achievements.placements.map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>

          {/* Top Recruiters */}
          <motion.section 
            className="py-8 bg-white/5 backdrop-blur-sm rounded-2xl mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-300">
              2024-25 PLACEMENT RECORDS
            </h3>
            <div className='px-4'>
              <img className='rounded-2xl' src={logo}/>
            </div>
            {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
              {topRecruiters.map((recruiter, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-5xl text-white">{recruiter.icon}</span>
                  <p className="text-gray-300 text-center font-medium">
                    {recruiter.name}
                  </p>
                </motion.div>
              ))}
            </div> */}

          </motion.section>
        </section>

        {/* Achievement Categories */}
        <AchievementCategory 
          title="Institutional Honors"
          items={achievements.institutional}
          icon={<FiAward />}
        />

        <AchievementCategory 
          title="Academic Excellence"
          items={achievements.academic}
          icon={<FiBook />}
        />

        <AchievementCategory 
          title="Student Success Stories"
          items={achievements.studentSuccess}
          icon={<FiUsers />}
        />

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-3xl font-bold mb-6">Join Our Success Story</h2>
          <a href='https://gct.org.in/register.html'>
          <motion.button 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-medium transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Start Your Journey Today
          </motion.button>
          </a>
          
        </motion.div>
      </section>
    </div>
  );
};

export default Achievements;