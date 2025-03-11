'use client'

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import footstyle from '@/styles/footer.module.css'
import Link from 'next/link';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Below 600px
  return (
    <Box className = {footstyle.foot_container} sx={{background:"#121212",borderTop: "1px solid #2b2b2b",color:"white",display:"flex",height:"70px",justifyContent:"center",alignItems:"center",}}>
       <Link href={"https://calendly.com/rupam001majumder/30min"} target='_blank'> <Typography className = {footstyle.foot_text} sx={{margin:"0px 50px",  cursor:"pointer"}}>Lets <span style={{opacity:"0.7",textDecoration:"underline",}}>Chat</span></Typography></Link>
        <Typography className = {footstyle.foot_text} sx={{margin:"0px 50px", opacity:"0.7"}}>© 2025</Typography>
        <Typography className = {footstyle.foot_mail} sx={{margin:"0px 50px", opacity:"0.7"}}><MailOutlineIcon className={footstyle.icon} sx={{verticalAlign:"middle",fontSize: isMobile ? "16px" : "24px"}}/> rupam001majumder@gmail.com</Typography>
    </Box>
  )
}

export default Footer