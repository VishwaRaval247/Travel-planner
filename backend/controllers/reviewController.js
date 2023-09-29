const Package = require('../models/Package');
const Review = require('../models/Review');

const createReview = async (req, res) => {
  console.log('Controller is called');
  const packageId = req.params.packageId
  const newReview = new Review({...req.body})
  try {
    const savedReview = await newReview.save();
    
    await Package.findByIdAndUpdate(packageId, {
      $push: { reviews: savedReview._id }
    })
    
    res.status(201).json({
      success: true,
      message: 'Review submitted successfully.',
      data: newReview,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit a new review.',
      error: error.message // Include the error message for debugging
    });
  }
};


// const getAllReviews = async (req, res) => {
//   try {
//     const reviews = await Review.find();
    
//     res.status(200).json({
//       success: true,
//       data: reviews,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: 'Internal Server Error',
//     });
//   }
// };

// const getReviewById = async (req, res) => {
//     try {
//       const review = await Review.findById(req.params.id);
      
//       if (!review) {
//         return res.status(404).json({
//           success: false,
//           message: 'Review not found.',
//         });
//       }
  
//       res.status(200).json({
//         success: true,
//         data: review,
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         success: false,
//         message: 'Internal Server Error',
//       });
//     }
//   };

//   const updateReviewById = async (req, res) => {
//     try {
//       const updatedReview = await Review.findByIdAndUpdate(
//         req.params.id,
//         {
//           name: req.body.name,
//           rating: req.body.rating,
//           comment: req.body.comment,
//           // Add other review properties to update here
//         },
//         { new: true }
//       );
      
//       if (!updatedReview) {
//         return res.status(404).json({
//           success: false,
//           message: 'Review not found.',
//         });
//       }
  
//       res.status(200).json({
//         success: true,
//         message: 'Review updated successfully.',
//         data: updatedReview,
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         success: false,
//         message: 'Internal Server Error',
//       });
//     }
//   };

//   const deleteReviewById = async (req, res) => {
//     try {
//       const deletedReview = await Review.findByIdAndRemove(req.params.id);
      
//       if (!deletedReview) {
//         return res.status(404).json({
//           success: false,
//           message: 'Review not found.',
//         });
//       }
  
//       res.status(200).json({
//         success: true,
//         message: 'Review deleted successfully.',
//         data: deletedReview,
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         success: false,
//         message: 'Internal Server Error',
//       });
//     }
//   };
  
  
  

module.exports = {
  createReview,
  // getAllReviews,
  // getReviewById,
  // updateReviewById,
  // deleteReviewById,

};
