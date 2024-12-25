import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Skeleton,
} from '@mui/material';
import Rating from '@mui/material/Rating';
import Navbar from './Navbar';

export default function SingleTourPage() {
  const { id } = useParams(); 
  const [tour, setTour] = useState(null); 
  const [reviews, setReviews] = useState([]); 
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' }); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTourAndReviews = async () => {
      try {
        const tourResponse = await axios.get(`https://travel-website-backend-btfr.onrender.com/api/tours/${id}`);
        setTour(tourResponse.data);

        const reviewResponse = await axios.get(`https://travel-website-backend-btfr.onrender.com/api/reviews/tour/${id}`);
        setReviews(reviewResponse.data);
      } catch (error) {
        console.error('Error fetching tour details or reviews:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTourAndReviews();
  }, [id]);

  const handleReviewChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleReviewSubmit = async () => {
    try {
      const response = await axios.post(
        `https://travel-website-backend-btfr.onrender.com/api/reviews`,
        { tour: id, ...newReview },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        }
      );
      setReviews((prevReviews) => [response.data.review, ...prevReviews]);
      setNewReview({ rating: 0, comment: '' }); 
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  if (loading) {
    return (
      <Box sx={{ padding: '40px' }}>
        <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: '10px' }} />
        <Skeleton variant="text" sx={{ marginTop: '20px', fontSize: '2rem' }} />
      </Box>
    );
  }

  if (!tour) {
    return <Typography variant="h5" align="center">Tour not found!</Typography>;
  }

  return (
    <>
      <Navbar />
      <Box sx={{ padding: '100px' }}>
        <Grid container spacing={4}>
          {/* Left Section */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                width: '100%',
                height: '400px',
                backgroundImage: `url(${tour.images})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
              }}
            ></Box>
            <Box sx={{ marginTop: '20px' }}>
              <Typography variant="h4" fontWeight="bold">
                {tour.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <Rating value={tour.rating || 4.5} precision={0.5} readOnly />
                <Typography sx={{ marginLeft: '10px' }}>
                  ({tour.reviewsCount || 0} Reviews)
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ marginTop: '20px', lineHeight: '1.8' }}>
                {tour.description}
              </Typography>
            </Box>

            {/* Reviews Section */}
            <Box sx={{ marginTop: '40px' }}>
              <Typography variant="h5" fontWeight="bold">
                Reviews
              </Typography>
              <Box sx={{ marginTop: '20px' }}>
                {reviews.map((review) => (
                  <Card key={review._id} sx={{ marginBottom: '20px' }}>
                    <CardContent>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {review.user.name}
                      </Typography>
                      <Rating value={review.rating} readOnly />
                      <Typography variant="body2" sx={{ marginTop: '10px' }}>
                        {review.comment}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>

              {/* Add Review Form */}
              <Box sx={{ marginTop: '40px' }}>
                <Typography variant="h6" fontWeight="bold">
                  Add a Review
                </Typography>
                <Rating
                  name="rating"
                  value={newReview.rating}
                  onChange={(e, value) => setNewReview({ ...newReview, rating: value })}
                  sx={{ marginTop: '10px' }}
                />
                <TextField
                  name="comment"
                  value={newReview.comment}
                  onChange={handleReviewChange}
                  label="Comment"
                  multiline
                  rows={4}
                  fullWidth
                  sx={{ marginTop: '20px' }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: '20px' }}
                  onClick={handleReviewSubmit}
                >
                  Submit Review
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={4}>
            <Card variant="outlined" sx={{ borderRadius: '10px', padding: '20px' }}>
              <CardContent>
                
                <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
                  ${tour.price} / person
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: '10px' }}>
                  {tour.priceDetails || 'Price includes accommodation, meals, and activities.'}
                </Typography>
                <Divider sx={{ marginY: '20px' }} />

                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Select Date
                </Typography>
                <TextField
                  fullWidth
                  type="date"
                  sx={{ marginBottom: '20px' }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Divider sx={{ marginY: '20px' }} />

                {/* Price Breakdown */}
                <Box sx={{ marginBottom: '20px' }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    Payment Details
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <Typography>Base Price:</Typography>
                    <Typography>${tour.price}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <Typography>Service Charge:</Typography>
                    <Typography>${tour.serviceCharge || 50}</Typography>
                  </Box>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginTop: '10px' }}
                  >
                    <Typography>Total:</Typography>
                    <Typography>${(tour.price + (tour.serviceCharge || 50)).toFixed(2)}</Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ padding: '10px', fontWeight: 'bold', fontSize: '16px' }}
                  component={Link} to={`/booking/${id}`}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
