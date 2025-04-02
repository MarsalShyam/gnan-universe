// import { motion } from 'framer-motion';
// import { FaUserTie, FaLinkedin, FaEnvelope } from 'react-icons/fa';

// const Organizers = () => {
//   const team = [
//     { 
//       name: 'Dr. John Smith',
//       role: 'Principal',
//       contact: 'principal@college.edu'
//     },
//     {
//       name: 'Jane Doe',
//       role: 'Vice Principal',
//       contact: 'vprincipal@college.edu'
//     },
//     {
//       name: 'Mike Johnson',
//       role: 'CEO',
//       contact: 'ceo@college.edu'
//     }
//   ];

//   return (
//     <section id="organizers" className="py-20 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center font-poppins">
//           Our Leadership
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {team.map((member, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
//             >
//               <div className="text-center">
//                 <div className="mb-4 flex justify-center">
//                   <FaUserTie className="text-6xl text-primary/80" />
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{member.name}</h3>
//                 <p className="text-accent font-medium mb-4">{member.role}</p>
//                 <div className="flex justify-center space-x-4">
//                   <a href={`mailto:${member.contact}`} className="text-gray-600 hover:text-primary">
//                     <FaEnvelope className="text-2xl" />
//                   </a>
//                   <a href="#" className="text-gray-600 hover:text-primary">
//                     <FaLinkedin className="text-2xl" />
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Organizers;

import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiUser } from 'react-icons/fi';

const Organizers = () => {
  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'College Principal',
      contact: 'principal@college.edu',
      linkedin: '#'
    },
    // Add more
  ];

  return (
    <section id="organizers" className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold text-light mb-4 font-inter">
            Guiding Visionaries
          </h2>
          <p className="text-light/80 max-w-xl mx-auto">
            Meet the leadership driving our digital excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-light rounded-2xl p-6 text-center shadow-xl"
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center">
                <FiUser className="text-3xl text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-dark mb-2">{member.name}</h3>
              <p className="text-accent font-medium mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a href={`mailto:${member.contact}`} className="text-dark hover:text-primary">
                  <FiMail className="text-2xl" />
                </a>
                <a href={member.linkedin} className="text-dark hover:text-primary">
                  <FiLinkedin className="text-2xl" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;