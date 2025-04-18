

// import { motion } from 'framer-motion';
// import { FiArrowLeft, FiCalendar, FiClock, FiExternalLink } from 'react-icons/fi';
// import { Link } from 'react-router-dom';

// const Blog = () => {
//   const posts = [
//     {
//       id: 1,
//       title: 'Future of Social Media in Education',
//       excerpt: 'Exploring the transformative power of digital platforms...',
//       date: '2023-11-20',
//       readTime: '5 min',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       socialLink: 'https://twitter.com/',
//       image: 'https://source.unsplash.com/400x250/?technology'
//     },
//     {
//       id: 2,
//       title: 'The Role of AI in Content Creation',
//       excerpt: 'How AI is reshaping the way we produce digital content...',
//       date: '2024-03-10',
//       readTime: '7 min',
//       videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
//       socialLink: 'https://www.linkedin.com/',
//       image: 'https://source.unsplash.com/400x250/?ai,content'
//     },
//     {
//       id: 3,
//       title: 'Cybersecurity in the Digital Age',
//       excerpt: 'Understanding the risks and preventive measures for online security...',
//       date: '2024-02-05',
//       readTime: '6 min',
//       videoUrl: 'https://www.youtube.com/embed/6fVz85JHTK0',
//       socialLink: 'https://facebook.com/',
//       image: 'https://source.unsplash.com/400x250/?cybersecurity'
//     },
//     {
//       id: 4,
//       title: 'Blockchain Revolution in Finance',
//       excerpt: 'How blockchain technology is transforming financial industries...',
//       date: '2024-01-15',
//       readTime: '8 min',
//       videoUrl: 'https://www.youtube.com/embed/Kp4Mvapo5kc',
//       socialLink: 'https://instagram.com/',
//       image: 'https://source.unsplash.com/400x250/?blockchain,finance'
//     },
//     {
//       id: 5,
//       title: 'Sustainable Tech Innovations',
//       excerpt: 'The latest advancements in sustainable technology and green energy...',
//       date: '2023-12-20',
//       readTime: '5 min',
//       videoUrl: 'https://www.youtube.com/embed/u2pKwYhFpxE',
//       socialLink: 'https://youtube.com/',
//       image: 'https://source.unsplash.com/400x250/?sustainability,technology'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <section className="pt-24 pb-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
//             <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-12">
//               <FiArrowLeft className="text-xl" />
//               <span className="font-medium">Back to Home</span>
//             </Link>
//           </motion.div>

//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Latest Blog Insights</h1>
//             <p className="text-gray-600 max-w-2xl">Dive into thought leadership and latest trends in digital social ecosystems</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {posts.map((post) => (
//               <motion.article
//                 key={post.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-lg shadow-md overflow-hidden"
//               >
//                 <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
//                 <div className="p-6">
//                   <div className="flex items-center gap-4 text-gray-500 mb-3">
//                     <div className="flex items-center gap-2">
//                       <FiCalendar />
//                       <span>{new Date(post.date).toLocaleDateString()}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <FiClock />
//                       <span>{post.readTime} read</span>
//                     </div>
//                   </div>
//                   <h2 className="text-2xl font-semibold text-gray-900 mb-3">{post.title}</h2>
//                   <p className="text-gray-700 mb-4">{post.excerpt}</p>
//                   <div className="flex items-center gap-4">
//                     <a href={post.socialLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center gap-2 font-medium">
//                       View on Social Media <FiExternalLink />
//                     </a>
//                   </div>
//                 </div>
//                 <div className="p-6 bg-gray-100">
//                   <h3 className="text-lg font-semibold mb-3">Student Opinion</h3>
//                   <div className="aspect-w-16 aspect-h-9">
//                     <iframe
//                       src={post.videoUrl}
//                       title="Student Opinion"
//                       className="w-full h-40 md:h-56 rounded-lg"
//                       allowFullScreen
//                     ></iframe>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;




// import { motion } from 'framer-motion';
// import { FiArrowLeft, FiCalendar, FiClock, FiExternalLink } from 'react-icons/fi';
// import { FaLinkedin, FaInstagram, FaEnvelope, FaYoutube, FaFacebook } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const Blog = () => {
//   const posts = [
//     {
//       id: 1,
//       title: 'Future of Social Media in Education',
//       excerpt: 'Exploring the transformative power of digital platforms...',
//       date: '2023-11-20',
//       readTime: '5 min',
//       socialLink: 'https://twitter.com/',
//       image: 'https://source.unsplash.com/400x250/?technology',
//       platform: 'twitter'
//     },
//     {
//       id: 2,
//       title: 'The Role of AI in Content Creation',
//       excerpt: 'How AI is reshaping the way we produce digital content...',
//       date: '2024-03-10',
//       readTime: '7 min',
//       socialLink: 'https://www.linkedin.com/',
//       image: 'https://source.unsplash.com/400x250/?ai,content',
//       platform: 'linkedin'
//     },
//     {
//       id: 3,
//       title: 'Cybersecurity in the Digital Age',
//       excerpt: 'Understanding the risks and preventive measures for online security...',
//       date: '2024-02-05',
//       readTime: '6 min',
//       socialLink: 'https://facebook.com/',
//       image: 'https://source.unsplash.com/400x250/?cybersecurity',
//       platform: 'facebook'
//     }
//   ];

//   const studentOpinions = [
//     {
//       id: 1,
//       name: 'John Doe',
//       opinion: 'GnanUniverse has provided me with incredible opportunities to learn and grow in my field.',
//       videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//       linkedin: 'https://linkedin.com/in/johndoe',
//       instagram: 'https://instagram.com/johndoe',
//       email: 'mailto:johndoe@example.com'
//     },
//     {
//       id: 2,
//       name: 'Jane Smith',
//       opinion: 'The faculty and resources at GnanUniverse have helped me excel in my career.',
//       videoUrl: 'https://www.youtube.com/embed/3JZ_D3ELwOQ',
//       linkedin: 'https://linkedin.com/in/janesmith',
//       instagram: 'https://instagram.com/janesmith',
//       email: 'mailto:janesmith@example.com'
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white">
//       <section className="pt-24 pb-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
//             <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300 mb-12">
//               <FiArrowLeft className="text-xl" />
//               <span className="font-medium">Back to Home</span>
//             </Link>
//           </motion.div>

//           <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-center">
//             <h1 className="text-5xl font-bold text-blue-300 mb-6">GnanUniverse Blog</h1>
//             <p className="max-w-2xl mx-auto text-gray-300">Explore insights, trends, and student opinions from the digital world.</p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {posts.map((post) => (
//               <motion.article
//                 key={post.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 className={`bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden border-4 border-${post.platform}`}
//               >
//                 <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
//                 <div className="p-6">
//                   <div className="flex items-center gap-4 text-gray-400 mb-3">
//                     <div className="flex items-center gap-2">
//                       <FiCalendar />
//                       <span>{new Date(post.date).toLocaleDateString()}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <FiClock />
//                       <span>{post.readTime} read</span>
//                     </div>
//                   </div>
//                   <h2 className="text-2xl font-semibold text-blue-300 mb-3">{post.title}</h2>
//                   <p className="mb-4 text-gray-300">{post.excerpt}</p>
//                   <div className="flex items-center gap-4">
//                     <a href={post.socialLink} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 flex items-center gap-2 font-medium">
//                       View on Social Media <FiExternalLink />
//                     </a>
//                   </div>
//                 </div>
//               </motion.article>
//             ))}
//           </div>

//           <div className="mt-16">
//             <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Student Opinions</h2>
//             {studentOpinions.map((student) => (
//               <div key={student.id} className="flex flex-col md:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
//                 <div className="p-6 md:w-1/2 text-center md:text-left">
//                   <h3 className="text-2xl font-semibold text-blue-300 mb-3">{student.name}</h3>
//                   <p className="text-gray-300">{student.opinion}</p>
//                   <div className="flex gap-4 mt-4">
//                     <a href={student.linkedin} target="_blank" className="text-blue-400 hover:text-blue-600"><FaLinkedin size={24} /></a>
//                     <a href={student.instagram} target="_blank" className="text-pink-400 hover:text-pink-600"><FaInstagram size={24} /></a>
//                     <a href={student.email} className="text-gray-400 hover:text-gray-600"><FaEnvelope size={24} /></a>
//                   </div>
//                 </div>
//                 <div className="md:w-1/2">
//                   <iframe
//                     src={student.videoUrl}
//                     title={student.name}
//                     className="w-full h-56 md:h-64 rounded-lg"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;
// const platformThumbnails = {
//   twitter: 'https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg',
//   linkedin: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
//   facebook: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
//   youtube: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg',
//   instagram: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'
// };
import { motion } from 'framer-motion';
import { FiArrowLeft,FiArrowUpRight, FiCalendar, FiClock } from 'react-icons/fi';
import { FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import pdf from '../assets/BlogContent/pdf/harrisgnanprice.pdf'
import gnanmlogo from '../assets/images/unilogo.png'
import placeimg from '../assets/BlogContent/images/placeimage.jpg'
import { Helmet } from "react-helmet";
const platformThumbnails = {
  twitter: 'https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg',
  linkedin: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
  facebook: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg',
  gnanmedia:gnanmlogo,
};

const Blog = () => {
 

<Helmet>
  <title>Campus Blogs | Gnyan Media Universe - GCT Voices</title>
  <meta name="description" content="Dive into student blogs sharing thoughts, experiences, college life stories, and more from Gnanamani College of Technology." />
  <meta property="og:title" content="Student Blogs - Gnyan Media Universe" />
  <meta property="og:description" content="Read insightful blogs by GCT students and faculty." />
  <meta property="og:image" content="https://gnyanmediauniverse.vercel.app/unilogo.png" />
  <meta property="og:url" content="https://gnyanmediauniverse.vercel.app/blog" />
</Helmet>

  const hoverEffect = {
    scale: 1.05,
    boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.5)'
  };

  const posts = [
    {
      id: 1,
      title: 'Harris - King of Hearts 💘 | Live in Salem - Apr 13',
      excerpt: 'Dear students , special discount has been announced for our college students. If you want make use of it...',
      date: '2025-04-5',
      readTime: '2 min',
      socialLink: pdf,
      platform: 'gnanmedia'
    },
    {
      id: 2,
      title: '🎉Parithabangal Live at GnyanFest 2025!',
      excerpt: 'Gopi & Sudhakar are coming to #GnyanFest! Join us on April 11 for culturals, fun, and epic vibes—open to all college students!...',
      date: '2025-03-5',
      readTime: '1 min',
      socialLink: 'https://www.facebook.com/share/v/12LJNB89jRz/',
      platform: 'facebook'
    },
    {
      id: 3,
      title: '🏷️Placement Day 2K25 - Dream Jobs Begin Here!',
      excerpt: "🎓 Join us on April 10 for Placement Day 2K25 at Gnyanamani College! 116 ranks, 567 offers, and a special appearance by 🎤 Vijay TV's Thiru. Gopinath!...",
      date: '2025-03-05',
      readTime: '2 min',
      socialLink: placeimg,
      platform: 'gnanmedia'
    }
  ];

  const studentOpinions = [
    {
      id: 1,
      name: 'Akshaya',
      opinion: "Hi, I'm Akshaya. At Gnyanamani College of Technology, everything—from the modern hostels and advanced lab facilities to the variety of tasty food—makes student life really enjoyable. It's a place where we feel comfortable, supported, and inspired to learn. And the best part? We get all of this with a focus on affordable, quality education.",
      videoUrl: 'https://www.youtube.com/embed/UpLPH9NxmSM?si=Mh6i0kIWNJkaQsD',
      linkedin: 'https://linkedin.com/in/johndoe',
      instagram: '#',
      email: 'mailto:johndoe@example.com'
    },
    {
      id: 2,
      name: 'K Mahaboob Begam',
      opinion: "Hi, I'm K. Mahaboob Begam. My journey at Gnyanamani Educational Institutions has been truly transformative. The support, growth, and opportunities I've received here have shaped my future in the best way. If you're looking for a place that values excellence and personal growth, this is it. Admissions are open—don't miss your chance to be part of something great!",
      videoUrl: 'https://www.youtube.com/embed/1CSiAMP6f_E?si=grngvhXGY81ETu71',
      linkedin: 'https://linkedin.com/in/janesmith',
      instagram: '#',
      email: 'mailto:janesmith@example.com'
    },
    {
      id: 3,
      name: 'Arzal Razai',
      opinion: "Hi, I'm Arzal Razai. At Gnyanamani College Of Technology, the support from our faculty is truly amazing. The staff here are so friendly and always go the extra mile to help us feel at home. No matter where you're from, you'll fell valued and guided every step of the way.",
      videoUrl: 'https://www.youtube.com/embed/pyZaBpf7r7k?si=1wjxEuuWqpb8g6MJ',
      linkedin: 'https://linkedin.com/in/janesmith',
      instagram: '#',
      email: 'mailto:janesmith@example.com'
    },
    {
      id: 4,
      name: 'Latika Sri',
      opinion: "Hi, I'm Latika Sri. Being a part of Gnyanamani Educational Institutions has been a life-changing experience for me. The encouragement and quality education here helped me grow both personally and academically. If you're looking for a place where your dreams truly take flight, this is it. Admissions are open—come join us and shape your future with Gnyanamani!",
      videoUrl: 'https://www.youtube.com/embed/w_9dgsyUR_8',
      linkedin: 'https://linkedin.com/in/janesmith',
      instagram: '#',
      email: 'mailto:janesmith@example.com'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white">
      <section className="pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300 mb-12">
              <FiArrowLeft className="text-xl" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-16 text-center">
            <h1 className="text-5xl font-bold text-blue-300 mb-6">GnanUniverse Blog</h1>
            <p className="max-w-2xl mx-auto text-gray-300">Explore insights, trends, and student opinions from the digital world.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={hoverEffect}
                viewport={{ once: true }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <a href={post.socialLink} target="_blank" rel="noopener noreferrer" className="block">
                  <img src={platformThumbnails[post.platform]} alt={post.title} className="w-full h-56 object-cover" />
                  <div className="p-6 bg-gray-900">
                    <div className="flex items-center gap-4 text-gray-400 mb-3">
                      <div className="flex items-center gap-2">
                        <FiCalendar />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiClock />
                        <span>{post.readTime} read</span>
                      </div>
                      <div className='flex items-center gap-2 text-blue-400 hover:text-blue-300 transition'>
                        <span>Details</span><FiArrowUpRight className="text-xl" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-semibold text-blue-300 mb-3">{post.title}</h2>
                    <p className="mb-4 text-gray-300">{post.excerpt}</p>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-4xl font-bold text-blue-300 mb-8 text-center">Student Opinions</h2>
            {studentOpinions.map((student) => (
              <motion.div
                key={student.id}
                whileHover={hoverEffect}
                className="flex flex-col md:flex-row items-center bg-gray-900 rounded-lg shadow-lg overflow-hidden mb-8 p-2 md:p-8 md:justify-between"
              >
                <div className="p-6 md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-blue-300 mb-3">{student.name}</h3>
                  <p className="text-gray-300">{student.opinion}</p>
                  <div className="flex justify-center md:justify-start gap-4 mt-4">
                    <a href={student.linkedin} target="_blank" className="text-blue-400 hover:text-blue-600"><FaLinkedin size={24} /></a>
                    <a href={student.instagram} target="_blank" className="text-pink-400 hover:text-pink-600"><FaInstagram size={24} /></a>
                    <a href={student.email} className="text-gray-400 hover:text-gray-600"><FaEnvelope size={24} /></a>
                  </div>
                </div>
                <div className="md:w-[40%]">
                  <iframe src={student.videoUrl} title={student.name} className="w-full h-56 md:h-68 rounded-lg" allowFullScreen></iframe>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <p>Want to know more about our student creators? Visit the <Link to="/achievements" className="text-purple-500 underline">Campus Pulse</Link> section!</p>

    </div>
  );
};

export default Blog;
