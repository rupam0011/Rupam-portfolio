'use client'

import { usePathname, useRouter } from 'next/navigation';
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import React, { useEffect, useState } from 'react'
import styles from '@/styles/sidebar.module.css'
import astro from '../../assets/astro.jpg'
// import productivity from '../../assets/productivity.png'
import Link from 'next/link';
import Image from 'next/image';

const Sidebar = ({ setOpen }) => {
    const pathname = usePathname();
    const router = useRouter();




    const handleNavigation = (path) => {
        router.push(path);  // Navigate to the selected path

        if (setOpen) {
            setOpen(false);
        }
    };

    return (
        <Box className={styles.sidebar_container} sx={{ borderRight: "1px solid #2b2b2b", width: "320px", height: "100vh", background: "rgb(15 15 15)", color: "white", padding: "20px 20px", position: "fixed", overflowY: "auto" }}>
            <List sx={{ width: '100%', maxWidth: 360 }}>
                <Link href={"/"}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar sx={{ width: "45px", height: "45px" }}>
                                <Image src={astro} alt="Remy Sharp" width={100} height={50} quality={100} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Rupam Majumder"
                            secondary={
                                <Typography component="span" variant="body2" sx={{ color: 'rgb(171 171 171)', display: 'inline' }}>
                                    Front end developer
                                </Typography>
                            }
                        />
                    </ListItem>
                </Link>

                {/* Lists */}
                <Box className={styles.explore_section} sx={{ marginTop: "20px" }}>
                    {[
                        { id: '/', icon: <ExploreOutlinedIcon />, text: "Explore" },
                        { id: '/projects', icon: <NearMeOutlinedIcon />, text: "Work" },
                        { id: '/stack', icon: <CodeOffOutlinedIcon />, text: "Tech Stack" },
                    ].map(({ id, icon, text }) => (
                        <ListItem
                            key={id}
                            className={styles.listItems}
                            sx={{
                                padding: "0px 16px",
                                margin: "10px 0px",
                                backgroundColor: pathname === id ? "#2b2b2b" : "transparent",
                                // border: pathname === id ? "1px solid #363636" : "none",
                                borderRadius: "10px",
                                opacity: pathname === id ? 1 : 0.5,
                                cursor: "pointer",
                                transition: "all 0.3s"
                            }}
                            onClick={() => handleNavigation(id)}
                        >
                            <ListItemAvatar sx={{ minWidth: "0" }}>
                                <Avatar className={styles.avatar_container} sx={{ background: "transparent" }}>
                                    {icon}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={
                                <Typography className={styles.sidebar_text} sx={{ letterSpacing: "1px", fontSize: "15px" }}>
                                    {text}
                                </Typography>
                            } />
                        </ListItem>
                    ))}
                </Box>

                {/* Resources */}
                <Box className={styles.resources_section} sx={{ marginTop: "40px" }}>
                    <Typography sx={{ paddingLeft: "25px", fontSize: "12px", opacity: "0.4", margin: "20px 0px" }}>
                        Resources
                    </Typography>
                    {[
                        { id: 'resume', icon: <FolderSharedOutlinedIcon />, text: "Resume", link: "https://drive.google.com/file/d/1mPKB6Ur2NeUX_T7-i_SYsNd44i-Y1oDJ/view?usp=sharing" },
                        { id: 'connect', icon: <ContactPhoneOutlinedIcon />, text: "Connect me", link: "https://calendly.com/rupam001majumder/30min" },
                    ].map(({ id, icon, text, link }) => (
                        <Link key={id} href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem
                                className={styles.listItems}
                                sx={{
                                    padding: "0px 16px",
                                    margin: "10px 0px",
                                    borderRadius: "10px",
                                    opacity: 0.5,  // No selection effect
                                    cursor: "pointer",
                                    transition: "all 0.3s"
                                }}
                            >
                                <ListItemAvatar sx={{ minWidth: "0" }}>
                                    <Avatar className={styles.avatar_container} sx={{ background: "transparent" }}>
                                        {icon}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={
                                    <Typography className={styles.sidebar_text} sx={{ letterSpacing: "1px", fontSize: "15px" }}>
                                        {text}
                                    </Typography>
                                } />
                            </ListItem>
                        </Link>
                    ))}
                </Box>

                {/* Socials */}
                <Box className={styles.socials_section} sx={{ marginTop: "40px" }}>
                    <Typography sx={{ paddingLeft: "25px", fontSize: "12px", opacity: "0.4", margin: "20px 0px" }}>
                        Socials
                    </Typography>
                    {[
                        { id: 'linkedin', icon: <LinkedInIcon />, text: "Linkedin", link: "https://www.linkedin.com/in/rupam-majumder-24b3a731a/" },
                        { id: 'github', icon: <GitHubIcon />, text: "Github", link: "https://github.com/rupam0011" },
                    ].map(({ id, icon, text, link }) => (
                        <Link key={id} href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <ListItem
                                className={styles.listItems}
                                sx={{
                                    padding: "0px 16px",
                                    borderRadius: "10px",
                                    margin: "10px 0px",
                                    opacity: 0.5,  // No selection effect
                                    cursor: "pointer",
                                    transition: "all 0.3s"
                                }}
                            >
                                <ListItemAvatar sx={{ minWidth: "0" }}>
                                    <Avatar className={styles.avatar_container} sx={{ background: "transparent" }}>
                                        {icon}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={
                                    <Typography className={styles.sidebar_text} sx={{ letterSpacing: "1px", fontSize: "15px" }}>
                                        {text}
                                    </Typography>
                                } />
                            </ListItem>
                        </Link>
                    ))}
                </Box>
            </List>
        </Box>
    );
}

export default Sidebar;
