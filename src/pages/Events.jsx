import { motion } from 'framer-motion';
import { FiCalendar, FiArrowUpRight,FiArrowLeft, FiClock } from 'react-icons/fi';
import techimg from '../assets/images/slider1.jpg';
import { Link } from 'react-router-dom';
import placimg from '../assets/images/eventspic/pl2.jpg'
import gnyanfest from '../assets/images/eventspic/gnyanfest1.jpg'
import graduation from '../assets/images/eventspic/graduation.jpg'
import { Helmet } from 'react-helmet';

const Events = () => {
  <Helmet>
  <title>GCT Events | Gnyan Media Universe</title>
  <meta name="description" content="Check out all past and upcoming events happening at Gnanamani College of Technology, hosted by various student teams." />
</Helmet>

  const allEvents = [
    { 
          id: 1, 
          title: 'Placement Day 2025',
          date: '2025-04-10',
          type: 'Placement Event',
          status: 'upcoming',
          image:placimg,
          venue:'GCT,A.K.Samuthiram Pachal,Namakkal'
        },
    { 
          id: 2, 
          title: 'Gnyan Fest 2025',
          date: '2025-04-11',
          type: 'College Fest',
          status: 'upcoming',
          image:gnyanfest,
          venue:'GCT,A.K.Samuthiram Pachal,Namakkal'
        },
    { 
          id: 3, 
          title: "14'th Graduation Day 2025",
          date: '2025-04-12',
          type: 'Graduation Day',
          status: 'upcoming',
          image:graduation,
          venue:'GCT,A.K.Samuthiram Pachal,Namakkal'
        },
    { 
      id: 4, 
      title: 'Robotics Workshop',
      date: '2025-03-25',
      type: 'Workshop',
      status: 'past',
      image: "https://media.istockphoto.com/id/1395428816/photo/group-of-young-people-in-technical-vocational-training-with-teacher.webp?a=1&b=1&s=612x612&w=0&k=20&c=XAjp6spzGLLVXmATSnCfPvNN9uwgKh9nj7q6pEEMXLw=",
      venue: 'Innovation Lab'
    },
  ];

  // Categorize events
  const upcomingEvents = allEvents.filter(event => 
    new Date(event.date) > new Date()
  );
  const pastEvents = allEvents.filter(event => 
    new Date(event.date) <= new Date()
  );

  const EventCard = ({ event }) => (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white/10 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all h-full flex flex-col"
    >
      <div className="relative h-48">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm flex items-center gap-2">
          <FiClock className="text-blue-300" />
          <span className="text-white">{event.status.toUpperCase()}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 rounded-lg bg-blue-500/30">
            <FiCalendar className="text-3xl text-blue-300" />
          </div>
          <div>
            <span className="text-sm text-gray-300 uppercase">{event.type}</span>
            <h3 className="text-2xl font-semibold text-white mt-1">{event.title}</h3>
          </div>
        </div>

        <div className="mt-auto">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm text-gray-300">Event Date</p>
              <p className="font-medium text-white">
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
          
          <div className="border-t border-white/10 pt-4">
            <p className="text-sm text-gray-300">
              Venue: <span className="text-white">{event.venue}</span>
            </p>
            {event.status === 'upcoming' && (
              <p className="text-sm text-blue-300 mt-2">
                {Math.ceil((new Date(event.date) - new Date()) / (1000 * 3600 * 24))} days left
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/" className="flex items-center gap-2 text-white hover:text-gray-300 mb-12">
              <FiArrowLeft className="text-xl" />
              <span className="font-medium">Back to Home</span>
            </Link>
          </motion.div>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold mb-4">College Events Hub</h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Discover, engage, and participate in our vibrant campus activities
          </p>
        </motion.div>

        {/* Upcoming Events Section */}
        {upcomingEvents.length > 0 && (
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-blue-300">Upcoming Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </motion.div>
        )}

        {/* Past Events Section */}
        {pastEvents.length > 0 && (
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-blue-300">Past Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </motion.div>
        )}

        {/* No Events Fallback */}
        {allEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-300">No events scheduled currently</p>
          </div>
        )}
      </div>
      <p>Check out our <Link to="/gallery2024" className="text-blue-500 underline">2024 gallery</Link> to relive amazing moments.</p>

    </section>
  );
};

export default Events;