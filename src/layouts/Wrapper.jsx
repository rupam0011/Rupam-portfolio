'use client'

import React, { useEffect, useState } from "react";
import { Grid, AppBar, Toolbar, IconButton, Typography, Drawer, Box, CircularProgress } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { useMediaQuery } from "@mui/material";
import Footer from "./Footer";
import Image from "next/image";
import astro from '../../assets/astro.jpg'
import Link from "next/link";
import Loader from "@/components/Loader";

const Wrapper = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  // Handle hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return early if not mounted yet
  if (!mounted) {
    return <Loader/>; // Or a loading state if you prefer
  }

  return (
    <div>
      {/* Navbar */}
      {isMobile && (
        <AppBar position="fixed" sx={{ background: "rgb(15 15 15)", color: "white", borderBottom: "1px solid #2b2b2b", padding: "8px 0" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Developer Name on the Left */}
            <Link href={"/"}>
              <Box sx={{ display: "flex", alignItems: "center", }}>
                <Box sx={{ marginRight: "10px" }}>
                  <Image src={astro} width={42} height={42} quality={100} alt="profile img" style={{ borderRadius: "50%" }} />
                </Box>
                <Box>
                  <Typography variant="primary" sx={{ flexGrow: 1 }}>
                    Rupam Majumder
                  </Typography>
                  <Typography variant="body2" sx={{ flexGrow: 1, opacity: "0.7" }} >
                    Front end Developer
                  </Typography>
                </Box>
              </Box>
            </Link>

            {/* Menu Button */}
            <IconButton edge="end" color="inherit" onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      )}

      

      {/* Sidebar for Desktop */}
      <Grid container>
        {!isMobile && (
          <Grid item lg={2}>
            <Sidebar />
          </Grid>
        )}

        {/* Main Content */}
        <Grid item xs={12} lg={10} sx={{ marginTop: isMobile ? "64px" : "0px" }}>
          {children}
          <Footer />
        </Grid>
      </Grid>

      {/* Drawer for Mobile Sidebar */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, height: "100vh", background: "rgb(15 15 15)", color: "white" }}>
        <Sidebar setOpen={setOpen} />
        </Box>
      </Drawer>
    </div>
  );
};

export default Wrapper;
