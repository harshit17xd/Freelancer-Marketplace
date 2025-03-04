// import React from "react";
// import Navbar from "./Navbar";

// const Home = () => {
//   return (
//     <div className="bg-gray-900 min-h-screen text-gray-100">
//       <Navbar />

//       {/* Hero Section */}
//       <header className="text-center bg-gradient-to-r from-gray-800 to-gray-900 py-32 px-6">
//         <h1 className="text-6xl font-bold tracking-wide">
//           Unlock Limitless Opportunities
//         </h1>
//         <p className="text-xl mt-6 font-medium opacity-90">
//           Trade skills, collaborate, and build your career—all in one place.
//         </p>
//         <div className="mt-8">
//           <input
//             type="text"
//             placeholder="Find services..."
//             className="w-96 px-6 py-3 rounded-l-full focus:outline-none bg-gray-700 text-gray-100 placeholder-gray-400"
//           />
//           <button className="bg-green-500 text-gray-900 font-semibold py-3 px-8 rounded-r-full text-lg shadow-md hover:bg-green-400 transition">
//             Search
//           </button>
//         </div>
//         <div className="mt-6 text-sm text-gray-400">
//           Popular: Graphic Design, Web Development, Content Writing, SEO
//         </div>
//       </header>

//       {/* Trusted By Section
//       <div className="max-w-6xl mx-auto py-12 text-center">
//         <h3 className="text-gray-400 text-sm uppercase tracking-wider">
//           Trusted by leading companies
//         </h3>
//         <div className="flex justify-center items-center gap-12 mt-6">
//           <img
//             src="/logo1.png"
//             alt="Company 1"
//             className="h-10 filter brightness-0 invert"
//           />
//           <img
//             src="/logo2.png"
//             alt="Company 2"
//             className="h-10 filter brightness-0 invert"
//           />
//           <img
//             src="/logo3.png"
//             alt="Company 3"
//             className="h-10 filter brightness-0 invert"
//           />
//           <img
//             src="/logo4.png"
//             alt="Company 4"
//             className="h-10 filter brightness-0 invert"
//           />
//         </div>
//       </div> */}

//       {/* Services Section */}
//       <section className="max-w-6xl mx-auto py-16">
//         <h2 className="text-3xl font-bold text-gray-100 text-center">
//           Explore the Marketplace
//         </h2>
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
//           <ServiceCard
//             icon="🎨"
//             title="Graphic Design"
//             description="Logos, banners, illustrations, and more."
//           />
//           <ServiceCard
//             icon="💻"
//             title="Web Development"
//             description="Build your website or app with experts."
//           />
//           <ServiceCard
//             icon="📝"
//             title="Content Writing"
//             description="Engaging content for your brand."
//           />
//           <ServiceCard
//             icon="🔍"
//             title="SEO & Marketing"
//             description="Boost your online presence."
//           />
//         </div>
//       </section>

//       {/* How It Works Section */}
//       <section className="bg-gray-800 py-16">
//         <div className="max-w-6xl mx-auto px-6">
//           <h2 className="text-3xl font-bold text-gray-100 text-center">
//             How It Works
//           </h2>
//           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <StepCard
//               step="1"
//               title="Find a Service"
//               description="Browse through thousands of services and find the perfect match."
//             />
//             <StepCard
//               step="2"
//               title="Place an Order"
//               description="Provide details and make a secure payment."
//             />
//             <StepCard
//               step="3"
//               title="Get Your Work Done"
//               description="Receive high-quality work and collaborate with professionals."
//             />
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section
//       <section className="max-w-6xl mx-auto py-16">
//         <h2 className="text-3xl font-bold text-gray-100 text-center">
//           What Our Users Say
//         </h2>
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <TestimonialCard
//             name="John Doe"
//             role="Entrepreneur"
//             review="This platform helped me find the perfect designer for my startup. Highly recommended!"
//           />
//           <TestimonialCard
//             name="Jane Smith"
//             role="Content Creator"
//             review="The writers here are amazing. They delivered exactly what I needed."
//           />
//           <TestimonialCard
//             name="Mike Johnson"
//             role="Small Business Owner"
//             review="Affordable and reliable services. I’ll definitely use it again!"
//           />
//         </div>
//       </section> */}

//       {/* Call to Action */}
//       <div className="text-center py-20 bg-gradient-to-r from-gray-800 to-gray-900">
//         <h2 className="text-4xl font-bold text-gray-100">
//           Start Trading Your Skills Today
//         </h2>
//         <p className="text-xl mt-4 opacity-90 text-gray-400">
//           Join thousands of professionals in a skill-driven marketplace.
//         </p>
//         <button className="mt-8 bg-green-500 text-gray-900 font-semibold py-3 px-12 rounded-full text-lg shadow-md hover:bg-green-400 transition">
//           Join Now
//         </button>
//       </div>
//     </div>
//   );
// };

// // Reusable Components
// const ServiceCard = ({ icon, title, description }) => {
//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
//       <div className="text-4xl">{icon}</div>
//       <h2 className="text-xl font-semibold text-gray-100 mt-4">{title}</h2>
//       <p className="mt-2 text-gray-400">{description}</p>
//     </div>
//   );
// };

// const StepCard = ({ step, title, description }) => {
//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
//       <div className="text-2xl font-bold text-green-500">Step {step}</div>
//       <h2 className="text-xl font-semibold text-gray-100 mt-4">{title}</h2>
//       <p className="mt-2 text-gray-400">{description}</p>
//     </div>
//   );
// };

// const TestimonialCard = ({ name, role, review }) => {
//   return (
//     <div className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
//       <p className="text-gray-400 italic">"{review}"</p>
//       <div className="mt-4">
//         <h3 className="text-lg font-semibold text-gray-100">{name}</h3>
//         <p className="text-sm text-gray-500">{role}</p>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <header className="text-center py-20 px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Build Your Future <br />
          <span className="text-blue-600">With Us</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join a community of professionals to trade skills, collaborate, and grow your career.
        </p>
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full md:w-96 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700 transition-all shadow-lg">
            Search
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🚀"
            title="Fast Delivery"
            description="Get your projects completed quickly and efficiently."
          />
          <FeatureCard
            icon="💡"
            title="Creative Solutions"
            description="Innovative ideas tailored to your needs."
          />
          <FeatureCard
            icon="🤝"
            title="Collaborative Community"
            description="Work with skilled professionals worldwide."
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 shadow-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon="🎨"
              title="Graphic Design"
              description="Create stunning visuals for your brand."
            />
            <ServiceCard
              icon="💻"
              title="Web Development"
              description="Build modern, responsive websites."
            />
            <ServiceCard
              icon="📝"
              title="Content Writing"
              description="Engaging content tailored to your needs."
            />
            <ServiceCard
              icon="🔍"
              title="SEO & Marketing"
              description="Boost your online visibility."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          What People Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TestimonialCard
            name="John Doe"
            role="Entrepreneur"
            review="This platform helped me find the perfect designer for my startup. Highly recommended!"
          />
          <TestimonialCard
            name="Jane Smith"
            role="Content Creator"
            review="The writers here are amazing. They delivered exactly what I needed."
          />
          <TestimonialCard
            name="Mike Johnson"
            role="Small Business Owner"
            review="Affordable and reliable services. I’ll definitely use it again!"
          />
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of professionals and grow your career today.
        </p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-12 rounded-full hover:bg-blue-700 transition-all shadow-lg">
          Join Now
        </button>
      </div>
    </div>
  );
};

// Reusable Components
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
      <div className="text-5xl mb-6">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-all">
      <div className="text-5xl mb-6">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ name, role, review }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
      <p className="text-gray-600 italic">"{review}"</p>
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

export default Home;