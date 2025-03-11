// 'use client'
import React from 'react'
import prstyle from '@/styles/project.module.css'
import { Box, Typography } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
// import chatx from '../../../assets/chatx1.png'
// import foodmaze from '../../../assets/foodmaze1.png'
import projectsData from "@/data/Projectsdata";
import Link from 'next/link';

const Projects = () => {
    
    return (
        <Box className={prstyle.project_container}>
            <Box className={prstyle.prlanding} sx={{ width: "100%", display: "flex", justifyContent: "center",}}>
                <Box className={prstyle.prbody} sx={{ width: "70%", paddingTop: "100px", paddingBottom: "30px",}}>
                    <Box className={prstyle.prheading}>
                        <h1>Best Work</h1>
                        <Typography sx={{ color: "white", opacity: "0.7", marginTop: "20px" }}>
                            I’m a Front-End Developer from India with a passion for crafting engaging and visually striking websites. Blending creativity with technical expertise, I specialize in responsive web design and building seamless, user-friendly web applications. My focus is on delivering high-quality digital experiences that are both functional and aesthetically compelling.
                        </Typography>
                    </Box>
                    <Box className={prstyle.pr_buttons}>
                        <Link href={"https://www.linkedin.com/in/rupam-majumder-24b3a731a/"}  target='blank'>
                            <button className={prstyle.pr_btn}>
                                <span className={prstyle.pr_btnContent}>
                                    Linkedin <LinkedInIcon className={prstyle.pr_icon} />
                                </span>
                            </button>
                        </Link>

                        <Link href={"https://github.com/rupam0011"} target='blank'>
                            <button className={prstyle.pr_btn}>
                                <span className={prstyle.pr_btnContent}>
                                    Github <GitHubIcon className={prstyle.pr_icon} />
                                </span>
                            </button>
                        </Link>
                    </Box>
                    {/* works */}
                    <Box className={prstyle.pr_work_container}>
                        <h3 style={{ margin: "20px 0px", color: "#ffffff" }}>Featured Work</h3>
                        <Box className={prstyle.pr_work_grid}>
                            {projectsData.map((project) => (
                                <Link key={project.id} href={`/projects/${project.id}`}>
                                    <Box key={project.id} className={prstyle.pr_cards}>
                                        <Box className={prstyle.pr_card_img}>
                                            <Image loading="lazy" src={project.mainimg} alt={project.title} />
                                        </Box>
                                        <Box className={prstyle.pr_card_text}>
                                            <h3>{project.title}</h3>
                                            <button className={prstyle.pr_card_btn}>Full Details</button>
                                        </Box>
                                    </Box>
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Projects