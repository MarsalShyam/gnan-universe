// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FaArrowLeft, FaCalendar, FaBlog } from 'react-icons/fa';

// const Blog = () => {
//   const posts = [
//     {
//       id: 1,
//       title: 'Social Media Trends 2023',
//       excerpt: 'Discover the latest trends shaping social media...',
//       date: '2023-11-15',
//       category: 'Insights'
//     },
//     // Add more posts
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <section className="pt-32 pb-20 px-4">
//         <div className="max-w-7xl mx-auto">
//           <Link to="/" className="flex items-center text-primary hover:text-secondary mb-8">
//             <FaArrowLeft className="mr-2" /> Back to Home
//           </Link>

//           <div className="flex items-center gap-4 mb-12">
//             <FaBlog className="text-4xl text-accent" />
//             <h1 className="text-3xl md:text-4xl font-bold text-primary font-poppins">
//               Club Blog
//             </h1>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {posts.map((post) => (
//               <motion.article
//                 key={post.id}
//                 whileHover={{ y: -5 }}
//                 className="bg-white rounded-xl shadow-md overflow-hidden"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 mb-3 text-gray-500">
//                     <FaCalendar className="text-sm" />
//                     <span className="text-sm">
//                       {new Date(post.date).toLocaleDateString()}
//                     </span>
//                   </div>
//                   <h2 className="text-xl font-bold mb-2">{post.title}</h2>
//                   <p className="text-gray-600 mb-4">{post.excerpt}</p>
//                   <button className="text-primary hover:text-secondary flex items-center gap-1">
//                     Read More <FaArrowLeft className="rotate-180 text-sm" />
//                   </button>
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

import { motion } from 'framer-motion';
import { FiArrowLeft, FiCalendar, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Future of Social Media in Education',
      excerpt: 'Exploring the transformative power of digital platforms...',
      date: '2023-11-20',
      readTime: '5 min'
    },
    // Add more
  ];

  return (
    <div className="min-h-screen bg-light">
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link 
              to="/" 
              className="flex items-center gap-2 text-primary hover:text-accent mb-12 w-fit"
            >
              <FiArrowLeft className="text-xl" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6 font-inter">
              Insights & Updates
            </h1>
            <p className="text-dark/80 max-w-2xl">
              Dive into thought leadership and latest trends in digital social ecosystems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="h-48 bg-primary/10" /> {/* Replace with image */}
                <div className="p-8">
                  <div className="flex items-center gap-4 text-dark/60 mb-4">
                    <div className="flex items-center gap-2">
                      <FiCalendar />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiClock />
                      <span>{post.readTime} read</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-semibold text-dark mb-2">
                    {post.title}
                  </h2>
                  <p className="text-dark/70 mb-6">{post.excerpt}</p>
                  <button className="text-primary hover:text-accent font-medium flex items-center gap-2">
                    Read Article
                    <FiArrowLeft className="rotate-180" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;