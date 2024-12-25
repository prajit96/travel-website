import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../styles/logo.mp4';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'linear-gradient(90deg, #004d40, #1976d2)',
        padding: '0 20px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          onClick={() => navigate('/')}
        >
          <video
            className="logo"
            src={logo}
            autoPlay
            loop
            muted
            style={{ height: '40px', marginRight: '10px', borderRadius: '5px', cursor: 'pointer'}}
          />
          Dream Travel
        </Typography>
        <Box sx={{ display: 'flex', gap: '15px' }}>
          <Button
            sx={{
              color: '#ffffff',
              '&:hover': { backgroundColor: '#1565c0' },
            }}
            component={Link}
            to="/tours"
          >
            Tours
          </Button>

          {!user ? (
            <>
              <Button
                sx={{
                  color: '#ffffff',
                  '&:hover': { backgroundColor: '#1565c0' },
                }}
                component={Link}
                to="/login"
              >
                Login
              </Button>
              <Button
                sx={{
                  color: '#ffffff',
                  '&:hover': { backgroundColor: '#1565c0' },
                }}
                component={Link}
                to="/signup"
              >
                Signup
              </Button>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                sx={{ color: '#f5f5f5', marginRight: '10px', fontWeight: 'bold' }}
              >
                {user.name}
              </Typography>
              <Button
                sx={{
                  color: '#ffffff',
                  '&:hover': { backgroundColor: '#d32f2f' },
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
