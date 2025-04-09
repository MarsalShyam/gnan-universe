import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiUser } from 'react-icons/fi';
import { useEffect, useRef, useState } from 'react';
import ganpat from '../assets/images/teamheader/ganpat.jpg'
import naveen from '../assets/images/teamheader/Naveen.jpg'
import rahul from '../assets/images/teamheader/Rahul.jpg'

const organizers = [
  { name: 'Dr. T. Arangannal', role: 'Chairman', linkedin: '#', email: '#',image:'' },
  { name: 'Mrs. P. Malaleena', role: 'Chairperson', linkedin: '#', email: '#',image:'' },
  { name: 'Ms. Madhuvanthinie Arangannal', role: 'Vice-Chairperson', linkedin: '#', email: '#',image:'' },
  { name: 'eamims Kumar', role: 'Faculty Coordinator', linkedin: '#', email: '#',image:'' }
];

const socialClubMembers = [
  { name: 'Himanshu Raj, President',work:'Himanshu Raj', linkedin: '#', email: '#', big: true,image:'' },
  { name: 'Divya VT, Vice-President',work:'Divya VT', linkedin: '#', email: '#', big: true,image:'' },
  { name: 'Gokulnath s, VideoGraphy',work:'Gokulnath s', linkedin: '#', email: '#',image:rahul },
  { name: 'Naveen P, Editing',work:'Naveen prakash', linkedin: '#', email: '#',image:naveen },
  { name: 'Ganpat Kr, Vlog/Blog',work:'Ganpat Kumar', linkedin: '#', email: '#',image:ganpat },
  { name: 'S. Elakkiyan, Short Film',work:'S.P.Tamil Elakkiyan', linkedin: '#', email: '#',image:'' },
  { name: 'Vinoth, Content Creator',work:'Vinoth V', linkedin: '#', email: '#',image:'' },
  { name: 'Navasri .S, Engagement H',work:'Navasri .S', linkedin: '#', email: '#',image:'' },
  { name: 'Mitra SK, Strategist',work:'Mitra SK', linkedin: '#', email: '#',image:'' }
];

const Organizers = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const newIndex = (activeIndex + 1) % socialClubMembers.length;
        scrollRef.current.scrollTo({ left: newIndex * 160, behavior: 'smooth' });
        setActiveIndex(newIndex);
      }
    };
    const interval = setInterval(scroll, 2000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="organizers" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold mb-4">Guiding Visionaries</h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Meet the leadership driving our digital excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {organizers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-gray-700 rounded-2xl p-6 text-center shadow-xl"
            >
              <div className="w-24 h-24 rounded-full bg-gray-600 mx-auto mb-6 flex items-center justify-center">
                <FiUser className="text-3xl text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-400 font-medium mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                <a href={member.email} className="text-gray-300 hover:text-blue-400">
                  <FiMail className="text-2xl" />
                </a>
                <a href={member.linkedin} className="text-gray-300 hover:text-blue-400">
                  <FiLinkedin className="text-2xl" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>


        <motion.div className="text-center mt-20 mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-3xl font-bold">Team Head Of Social Media Club</h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex overflow-y-hidden gap-6 overflow-x-hidden px-4 py-6 no-scrollbar">
            {socialClubMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className={`rounded-2xl p-5 text-center shadow-xl bg-gray-700 flex-shrink-0 ${member.big ? 'w-52 h-52' : 'w-36 h-36'}`}
              >
                <div className="w-full h-full flex items-center justify-center bg-gray-600 rounded-full">
                  <img className='w-full h-full rounded-full ' src={member.image?member.image:'https://media.istockphoto.com/id/2197572485/photo/neon-user-profile-icon-glowing-neon-line-blue-color-user-profile-or-people-icon-on-the-black.webp?a=1&b=1&s=612x612&w=0&k=20&c=-KytgoTnbHoI6ULud6SanIvo2euK11udwAPSOvSn5fU='}/>
                  {/* <FiUser className="text-3xl text-gray-300" /> */}
                </div>
                <h3 className="text-sm font-semibold mt-6">{member.name}</h3>
                <div className="flex justify-center gap-2 mt-2">
                  <a href={member.email} className="text-gray-300 hover:text-blue-400">
                    <FiMail className="text-xl" />
                  </a>
                  <a href={member.linkedin} className="text-gray-300 hover:text-blue-400">
                    <FiLinkedin className="text-xl" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {socialClubMembers.map((_, index) => (
              <div key={index} className={`h-2 w-2 mx-1 rounded-full ${activeIndex === index ? 'bg-blue-400' : 'bg-gray-500'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizers;

