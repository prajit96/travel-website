import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SiGooglemaps } from "react-icons/si";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function MediaCard() {
  const { id } = useParams();
  const [travels, setTravels] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch travel data from the backend
  useEffect(() => {
    const fetchTravels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tours');
        setTravels(response.data);
      } catch (error) {
        console.error('Error fetching travels:', error);
        setError('Failed to fetch travel data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTravels();
  }, [id]);

  if (loading) {
    // Show skeletons while loading
    return (
      <Box display="flex" flexWrap="wrap" gap="16px" justifyContent="center">
        {Array.from(new Array(4)).map((_, index) => (
          <Card key={index} sx={{ maxWidth: 300, minWidth: 250 }}>
            <Skeleton variant="rectangular" width="100%" height={150} />
            <CardContent>
              <Skeleton variant="text" width="60%" height={30} />
              <Skeleton variant="text" width="80%" height={30} />
            </CardContent>
            <CardActions>
              <Skeleton variant="text" width="40%" height={30} />
              <Skeleton variant="text" width="40%" height={30} />
            </CardActions>
          </Card>
        ))}
      </Box>
    );
  }

  if (error) {
    return <Typography variant="h6" color="error" align="center">{error}</Typography>;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
      {travels.map((travel) => (
        <Card key={travel._id} sx={{ maxWidth: 300, minWidth: 250 }}>
          <CardMedia
            sx={{ height: 150 }}
            image={travel.images?.[0] || 'https://via.placeholder.com/150'} // Fallback image
            title={travel.title}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle2" component="div">
              <SiGooglemaps style={{ marginRight: 4 }} /> {travel.location}
            </Typography>
            <Typography variant="h6" component="div">
              {travel.title}
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
              size="small" 
              component={Link} 
              to={`/tours/${travel._id}`} // Navigate to the single tour page
            >
              ${travel.price}/per person
            </Button>
            <Button size="small" variant="contained" color="primary" component={Link} to={`/booking/${travel._id}`}>Book Now</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
