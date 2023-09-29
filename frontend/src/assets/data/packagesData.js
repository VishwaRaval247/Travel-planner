// Dummy data for destinations


const destinations = [
  {
    name: 'Goa, India',
    description: 'Explore the beautiful beaches and rich culture of Goa.',
    photo: 'https://example.com/goa.jpg',
  },
  {
    name: 'Kerala, India',
    description: 'Discover the lush green landscapes and serene backwaters of Kerala.',
    photo: 'https://example.com/kerala.jpg',
  },
  {
    name: 'Paris, France',
    description: 'Experience the romantic ambiance of Paris, the City of Love.',
    photo: 'https://example.com/paris.jpg',
  },
  {
    name: 'New York City, USA',
    description: 'Explore the bustling streets and iconic landmarks of NYC.',
    photo: 'https://example.com/nyc.jpg',
  },
];

// Dummy data for packages
const packages = [
  {
    _id: '1', // Simulated ID
    title: 'Goa Beach Retreat',
    description: 'Relax on the sunny beaches of Goa with this amazing.',
    price: 1500,
    photo: 'goaRetreatImage.jpg',
    destinations: [destinations[0]], // Reference to Goa destination
  },
  {
    _id: '2', // Simulated ID
    title: 'Kerala Backwaters',
    description: 'Experience the tranquility of Kerala backwaters.',
    price: 1800,
    photo: 'keralaImage.jpg',
    destinations: [destinations[1]], // Reference to Kerala destination
  },
  {
    _id: '3', // Simulated ID
    title: 'Romantic Getaway in Paris',
    description: 'Enjoy a romantic escape in the heart of Paris.',
    price: 2500,
    photo: 'parisGateway.jpg',
    destinations: [destinations[2]], // Reference to Paris destination
  },
  {
    _id: '4', // Simulated ID
    title: 'New York City Exploration',
    description: 'Discover the vibrant culture of NYC.',
    price: 2200,
    photo: 'newyorkExploration.jpg',
    destinations: [destinations[3]], // Reference to NYC destination
  },
];

// Rest of your code...


// Dummy data for reviews (assuming a Review model)
const reviews = [
  {
    package: packages[0], // Reference to the first package
    rating: 4.5,
    comment: 'Had a great time in Goa. Beautiful beaches!',
  },
  {
    package: packages[1], // Reference to the second package
    rating: 4.8,
    comment: 'Kerala backwaters are truly a gem.',
  },
  {
    package: packages[2], // Reference to the third package
    rating: 5.0,
    comment: 'Paris is indeed the city of love. Perfect for couples.',
  },
  {
    package: packages[3], // Reference to the fourth package
    rating: 4.9,
    comment: 'NYC is a bustling metropolis with so much to see.',
  },
];

// Calculate average rating for each package
packages.forEach((pkg, index) => { // Use 'pkg' instead of 'package'
  // Get all reviews for the package
  const packageReviews = reviews.filter((review) => review.package === packages[index]);

  // Calculate average rating
  const totalRating = packageReviews.reduce((total, review) => total + review.rating, 0);
  const averageRating = totalRating / packageReviews.length;

  // Add averageRating to the package
  packages[index].averageRating = averageRating;
  packages[index].reviews = packageReviews;
});


const packagesForTesting = packages;

// Export the packages data
export default packagesForTesting;

