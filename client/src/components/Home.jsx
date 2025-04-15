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
          <button className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-12 rounded-full hover:bg-blue-700 transition-all shadow-lg">
            Get Started
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