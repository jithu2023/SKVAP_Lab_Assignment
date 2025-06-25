// src/components/Footer.tsx
'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaGooglePay,
  FaPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaApplePay,
} from 'react-icons/fa';

export default function Footer() {
  const services = ['Technology Services', 'Educational Services', 'Courses', 'Blog'];
  const help = ['Privacy', 'Contact'];

  return (
    <Box component="footer" sx={{ backgroundColor: 'orange', py: 6 }}>
      <Grid container spacing={10} maxWidth="lg" mx="auto">
        {/* Company info */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>
            SKVAP Labs
          </Typography>
          <Typography variant="body2">
Empowering patients and labs with seamless test<br/>management and secure reporting.          </Typography>
        </Grid>

        {/* Services */}
        <Grid item xs={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Services
          </Typography>
          {services.map((s) => (
            <Typography key={s} variant="body2" sx={{ mb: 0.5 }}>
              <Link
                href={`/${s.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ textDecoration: 'none', color: '#000' }}
              >
                {s}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Help */}
        <Grid item xs={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Help
          </Typography>
          {help.map((h) => (
            <Typography key={h} variant="body2" sx={{ mb: 0.5 }}>
              <Link
                href={`/${h.toLowerCase()}`}
                style={{ textDecoration: 'none', color: '#000' }}
              >
                {h}
              </Link>
            </Typography>
          ))}
        </Grid>

        {/* Newsletter & Socials */}
        <Grid item xs={12} md={10}>
          <Typography variant="h6" gutterBottom>
            Newsletter
          </Typography>
          <Box component="form" noValidate sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <TextField size="small" placeholder="Email Address" fullWidth />
            <Button variant="contained" color="secondary">
              Submit
            </Button>
          </Box>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
            <FaYoutube />
          </Box>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <FaGooglePay />
            <FaPaypal />
            <FaCcVisa />
            <FaCcMastercard />
            <FaApplePay />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
