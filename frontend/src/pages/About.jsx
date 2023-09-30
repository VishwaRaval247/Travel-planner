import React from 'react';

const About = () => {
  // Placeholder data
  const company = 'Travel Explorer';
  const mission = 'Our mission is to make your travel dreams come true.';
  const description = 'At Travel Explorer, we are passionate about creating unforgettable travel experiences for our clients. With years of expertise and a dedicated team of travel enthusiasts, we aim to provide you with the best adventures and memories that will last a lifetime.';

  const extendedDescription = `We believe that travel has the power to transform lives and open hearts to new horizons. Our team of seasoned travelers and experts in the field work tirelessly to curate exceptional journeys that cater to your interests and desires.

  Whether you seek the thrill of adventure in remote destinations, the serenity of a beachfront escape, or the cultural richness of historical cities, Travel Explorer has something for every wanderer. Our itineraries are thoughtfully designed to immerse you in the local culture, allowing you to forge connections with people from around the world.

  We understand that every traveler is unique, and so are their dreams. That's why we offer personalized trip planning services to create tailor-made experiences that reflect your passions and aspirations. Your journey begins with a conversation, where we listen intently to your desires, and it culminates in an adventure that exceeds your expectations.

  At Travel Explorer, we are committed to sustainability and responsible travel. We prioritize eco-friendly practices and support local communities in the places we visit. Together, we can make a positive impact on the destinations we explore.

  Join us on a voyage of discovery, where every moment is an opportunity to create cherished memories. Let us be your guide, and together, we'll explore the world's beauty and diversity.`;

  return (
    <section className="mb-8 ">
      <div className="h-20 relative">
        <img
          src={process.env.PUBLIC_URL + '/images/background.jpg'}
          alt="Image"
          className="object-cover w-full h-full"
          />
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-red-500 underline font-semibold text-center mt-6 mb-8">About Us</h2>
        <div className="text-gray-700 leading-relaxed">
          <p>
            Welcome to {company}! {mission} Our journey began with a love for exploration and a desire to share the world's wonders with others.
          </p>
          <p className="mt-4">
            {description}
          </p>
          <p className="mt-4">
            {extendedDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
