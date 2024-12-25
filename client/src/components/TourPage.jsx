import React from 'react';
import { Box, Typography, TextField, Button, InputAdornment, Container } from '@mui/material';
import { LocationOn, Search } from '@mui/icons-material';
import MediaCard from './MediaCard';
import Navbar from './Navbar';

export default function TourPage() {
  return (
  <>
    <Navbar/>
    <Box>
      {/* Top Landscape Image */}
      <Box
        sx={{
          width: '100%',
          height: '300px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fHRyYXZlbHxlbnwwfHx8fDE2ODExNDQ1NTM&ixlib=rb-1.2.1&q=80&w=1080)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '0px 4px 10px rgba(0,0,0,0.6)',
          }}
        >
          Explore Your Next Adventure
        </Typography>
      </Box>

      {/* Search Bar */}
      <Container maxWidth="lg">
        <Box
          sx={{
            marginTop: '-50px',
            backgroundColor: '#ffffff',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            alignItems: 'center',
            zIndex: 100,
          }}
        >
          {/* Location Input */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Where are you going?"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOn color="primary" />
                </InputAdornment>
              ),
            }}
          />

          {/* Distance Input */}
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Distance (e.g., 50 km)"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography color="primary">Km</Typography>
                </InputAdornment>
              ),
            }}
          />

          {/* Search Button */}
          <Button
            variant="contained"
            color="primary"
            sx={{ height: '56px', minWidth: '150px', fontWeight: 'bold' }}
            startIcon={<Search />}
          >
            Search
          </Button>
        </Box>
      </Container>
      <Box>
        <MediaCard/>
      </Box>
    </Box>
    </>
  );
}
