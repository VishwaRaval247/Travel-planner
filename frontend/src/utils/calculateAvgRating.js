const calculateAvgRating = (reviews) => {
    // Check if there are reviews
    if (!reviews || reviews.length === 0) {
      return { totalRating: 0, avgRating: 0 };
    }
  
    // Calculate the total rating
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  
    // Calculate the average rating
    const avgRating = totalRating / reviews.length;
  
    return { totalRating, avgRating };
  }
  
  
//   const { totalRating, avgRating } = calculateAvgRating(reviews);
  
//   console.log(`Total Rating: ${totalRating}`);
//   console.log(`Average Rating: ${avgRating.toFixed(1)}`);
  
export default calculateAvgRating;