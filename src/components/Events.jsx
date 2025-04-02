// import { motion } from 'framer-motion';
// import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

// const Events = () => {
//   const events = [
//     { id: 1, title: 'Digital Marketing Workshop', date: '2023-12-15' },
//     { id: 2, title: 'Content Creation Contest', date: '2024-01-10' },
//     // Add more events
//   ];

//   return (
//     <section id="events" className="py-20 px-4 bg-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center font-poppins">
//           Upcoming Events
//         </h2>

//         {/* Upcoming Event Card */}
//         <motion.div 
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="bg-white rounded-xl shadow-lg p-6 mb-12"
//         >
//           <div className="flex items-center gap-4 mb-4">
//             <FaCalendarAlt className="text-accent text-2xl" />
//             <h3 className="text-xl font-semibold">Next Event: Social Media Conference</h3>
//           </div>
//           <p className="text-gray-600 mb-4">Join us for an exciting conference featuring industry experts...</p>
//           <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors flex items-center gap-2">
//             Prepare Now <FaArrowRight />
//           </button>
//         </motion.div>

//         {/* Past Events Grid */}
//         <h3 className="text-2xl font-bold text-primary mb-8 text-center">Past Events</h3>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <motion.div
//               key={event.id}
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-xl shadow-md overflow-hidden"
//             >
//               <div className="p-6">
//                 <div className="flex items-center gap-2 mb-2">
//                   <FaCalendarAlt className="text-accent" />
//                   <span className="text-gray-500">{new Date(event.date).toDateString()}</span>
//                 </div>
//                 <h4 className="text-lg font-semibold">{event.title}</h4>
//                 <button className="mt-4 text-primary hover:text-secondary flex items-center gap-1">
//                   View Details <FaArrowRight className="text-sm" />
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;

// import { motion } from 'framer-motion';
// import { FiCalendar, FiArrowUpRight } from 'react-icons/fi';

// const Events = () => {
//   const events = [
//     { 
//       id: 1, 
//       title: 'Digital Content Masterclass',
//       date: '2023-12-15',
//       type: 'workshop',
//       status: 'upcoming'
//     },
//     // Add more events
//   ];

//   return (
//     <section id="events" className="py-20 px-4 bg-light">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <motion.h2 
//             className="text-4xl font-bold text-dark mb-4 font-inter"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//           >
//             Upcoming Experiences
//           </motion.h2>
//           <p className="text-dark/80 max-w-xl mx-auto">
//             Immerse yourself in our cutting-edge social media events
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {events.map((event) => (
//             <motion.div 
//               key={event.id}
//               whileHover={{ y: -5 }}
//               className="bg-white rounded-2xl shadow-xl overflow-hidden group"
//             >
//               <div className="p-8">
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className={`p-3 rounded-lg ${event.status === 'upcoming' ? 'bg-accent/10' : 'bg-primary/10'}`}>
//                     <FiCalendar className={`text-2xl ${event.status === 'upcoming' ? 'text-accent' : 'text-primary'}`} />
//                   </div>
//                   <div>
//                     <span className="text-sm text-dark/60">{event.type}</span>
//                     <h3 className="text-xl font-semibold text-dark">{event.title}</h3>
//                   </div>
//                 </div>
                
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-sm text-dark/60">Event Date</p>
//                     <p className="font-medium text-dark">
//                       {new Date(event.date).toLocaleDateString('en-US', {
//                         weekday: 'long', 
//                         year: 'numeric', 
//                         month: 'long', 
//                         day: 'numeric'
//                       })}
//                     </p>
//                   </div>
//                   <button className="flex items-center gap-2 text-primary hover:text-accent transition-colors">
//                     Details <FiArrowUpRight className="text-xl" />
//                   </button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Events;

import { motion } from 'framer-motion'; 
import { FiCalendar, FiArrowUpRight } from 'react-icons/fi';

const Events = () => {
  const events = [
    { 
      id: 1, 
      title: 'Digital Content Masterclass',
      date: '2023-12-15',
      type: 'Workshop',
      status: 'upcoming'
    },
    { 
      id: 2, 
      title: 'AI & Future Tech Summit',
      date: '2024-01-20',
      type: 'Conference',
      status: 'upcoming'
    },
    { 
      id: 3, 
      title: 'Creative UI/UX Hackathon',
      date: '2024-02-10',
      type: 'Competition',
      status: 'upcoming'
    },

  ];

  return (
    <section id="events" className="py-20 px-6 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Exciting Upcoming Events
          </motion.h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Stay ahead with our dynamic and innovative workshops, conferences, and hackathons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <motion.div 
              key={event.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 rounded-2xl shadow-xl p-8 transition-all hover:shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-blue-500/30">
                  <FiCalendar className="text-3xl text-blue-300" />
                </div>
                <div>
                  <span className="text-sm text-gray-300 uppercase">{event.type}</span>
                  <h3 className="text-2xl font-semibold text-white">{event.title}</h3>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-300">Event Date</p>
                  <p className="font-medium text-lg text-white">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <motion.button 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                >
                  Details <FiArrowUpRight className="text-xl" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
