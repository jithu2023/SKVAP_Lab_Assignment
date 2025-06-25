// src/components/Navbar.tsx  
'use client';  
import React, { useState } from 'react';  
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Box, Button, Drawer, List, ListItem, Typography } from '@mui/material';  
import { Menu as MenuIcon, ChevronDown, Heart, Search, ShoppingBag } from 'lucide-react';  
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';  

export default function Navbar() {  
  const [open, setOpen] = useState(false);  
  return (  
<AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'orange' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>  
        {/* Desktop links */}  
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>  
          {['technology-services','educational-services','courses','blog'].map(path => (  
            <Button  
              key={path}  
              component={Link}  
              href={`/${path}`}  
              sx={{ color: '#000', '&:hover': { color: 'secondary.main' } }}  // yellow hover  
            >  
              {path.replace(/-/g,' ')}  
            </Button>  
          ))}  
        </Box>  

        {/* Mobile menu toggle */}  
        <IconButton edge="start" onClick={() => setOpen(true)} sx={{ display: { md: 'none' } }}>  
          <MenuIcon />  
        </IconButton>  

       
        {/* Icons */}  
        <Box sx={{ display: 'flex', gap: 1 }}>  
          <IconButton><Heart /></IconButton>  
          <IconButton><Search /></IconButton>  
          <IconButton component={Link} href="/contact"><ShoppingBag /></IconButton>  
        </Box>  
      </Toolbar>  

      {/* Mobile drawer */}  
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>  
        <List sx={{ width: 250, p: 2 }}>  
          {['technology-services','educational-services','courses','blog','contact'].map(item => (  
            <ListItem key={item} disablePadding>  
              <Button  
                fullWidth  
                component={Link}  
                href={`/${item}`}  
                sx={{ justifyContent: 'flex-start', color: '#000' }}  
              >  
                {item.replace(/-/g,' ')}  
              </Button>  
            </ListItem>  
          ))}  
          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>  
            <FaFacebookF /> <FaInstagram /> <FaYoutube /> <FaPinterestP />  
          </Box>  
        </List>  
      </Drawer>  
    </AppBar>  
  );  
}
