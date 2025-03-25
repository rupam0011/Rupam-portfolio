

'use client'
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import Link from 'next/link';
import prstyle from '@/styles/project.module.css';
import { client } from '@/sanity/lib/client'

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const query = `*[_type == "project"]{
                _id,
                title,
                "slug": slug.current,
                description,
                "mainimg": mainImage.asset->url,
                github,
                liveDemo
            }`
            const data = await client.fetch(query)
            console.log(data);

            setProjects(data)
        }
        fetchData()
    }, [])


    return (
        <Box className={prstyle.project_container}>
            <Box className={prstyle.prlanding} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Box className={prstyle.prbody} sx={{ width: "70%", paddingTop: "100px", paddingBottom: "30px" }}>
                    <Box className={prstyle.prheading}>
                        <h1>Best Work</h1>
                        <Typography sx={{ color: "white", opacity: "0.7", marginTop: "20px" }}>
                            I’m a Front-End Developer from India with a passion for crafting engaging and visually striking websites. Blending creativity with technical expertise, I specialize in responsive web design and building seamless, user-friendly web applications. My focus is on delivering high-quality digital experiences that are both functional and aesthetically compelling.
                        </Typography>
                    </Box>

                    <Box className={prstyle.pr_buttons}>
                        <Link href={"https://www.linkedin.com/in/rupam-majumder-24b3a731a/"} target='_blank'>
                            <button className={prstyle.pr_btn}>
                                <span className={prstyle.pr_btnContent}>
                                    Linkedin <LinkedInIcon className={prstyle.pr_icon} />
                                </span>
                            </button>
                        </Link>

                        <Link href={"https://github.com/rupam0011"} target='_blank'>
                            <button className={prstyle.pr_btn}>
                                <span className={prstyle.pr_btnContent}>
                                    Github <GitHubIcon className={prstyle.pr_icon} />
                                </span>
                            </button>
                        </Link>
                    </Box>

                    {/* Works Section */}
                    <Box className={prstyle.pr_work_container}>
                        <h3 style={{ margin: "20px 0px", color: "#ffffff" }}>Featured Work</h3>
                        <Box className={prstyle.pr_work_grid}>
                            {projects.map((project) => (
                                <Link key={project._id} href={`/projects/${project.slug}`}>
                                    <Box className={prstyle.pr_cards}>
                                        <Box className={prstyle.pr_card_img}>
                                            <Image loading="lazy" src={project.mainimg} alt={project.title} width={500} height={300} />
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
    );
}

export default Projects;
