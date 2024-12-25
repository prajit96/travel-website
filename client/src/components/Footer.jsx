import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#2e3b55',
        color: '#ffffff',
        padding: '2rem 0',
        marginTop: '2rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              We are a travel platform dedicated to providing the best travel experiences worldwide.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/" color="inherit" underline="hover" sx={{ marginBottom: '0.5rem' }}>
                Home
              </Link>
              <Link href="/tours" color="inherit" underline="hover" sx={{ marginBottom: '0.5rem' }}>
                Tours
              </Link>
              <Link href="/about" color="inherit" underline="hover" sx={{ marginBottom: '0.5rem' }}>
                About Us
              </Link>
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener"
                sx={{ color: '#ffffff', marginRight: '0.5rem' }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener"
                sx={{ color: '#ffffff', marginRight: '0.5rem' }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener"
                sx={{ color: '#ffffff', marginRight: '0.5rem' }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener"
                sx={{ color: '#ffffff' }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} DreamTravel. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
