"use client";
import Image from "next/image";
import detStyles from "@/styles/details.module.css";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import GitHubIcon from "@mui/icons-material/GitHub";
import live from "../../../../assets/live.png";

const ProjectDetails = ({ project }) => {
    if (!project) return <div>Loading...</div>;

    return (
        <Box className={detStyles.det_container}>
            <Box className={detStyles.detlanding} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Box className={detStyles.detbody} sx={{ width: "50%", paddingTop: "100px", paddingBottom: "30px" }}>
                    <Link href={"/projects"}>
                        <h1 className={detStyles.proj_link}>
                            <KeyboardBackspaceIcon className={detStyles.proj_link} /> All Projects
                        </h1>
                    </Link>
                    <h1 className={detStyles.title}>{project.title}</h1>
                    <Box className={detStyles.work_img}>
                        <Image src={project.mainimg} alt={project.title} width={700} height={450} quality={100} />
                    </Box>

                    <Box className={detStyles.techs}>
                        {project.technologies?.map((tech, index) => (
                            <Link key={index} href={tech.link} target="_blank">
                                <button className={detStyles.techbtn}>
                                    {tech.name} <Image src={tech.icon || tech.url} alt={tech.name} width={25} height={22} />
                                </button>
                            </Link>
                        ))}
                    </Box>

                    <Box className={detStyles.livebox}>
                        {project.liveDemo ? (
                            <>
                                <Link href={project.liveDemo} target="_blank">
                                    <button className={detStyles.livebtn}>
                                        Live site <Image className={detStyles.liveicon} src={live} width={25} height={25} alt="live.png" />
                                    </button>
                                </Link>
                                <Link href={project.github} target="_blank">
                                    <button className={detStyles.gitbtn}>
                                        Github Code <GitHubIcon className={detStyles.liveicon} />
                                    </button>
                                </Link>
                            </>
                        ) : (
                            <Link href={project.github} target="_blank">
                                <button className={detStyles.gitbtn}>
                                    Github Code <GitHubIcon className={detStyles.liveicon} />
                                </button>
                            </Link>
                        )}
                    </Box>

                    <Box className={detStyles.description}>
                        <h3>About {project.title}</h3>
                        <Typography>{project.description}</Typography>
                    </Box>

                    <Box className={detStyles.features}>
                        <h3>Features</h3>
                        {project.features?.map((feature, index) => (
                            <Typography key={index} className={detStyles.alltext}>
                                • {feature.title} <span>{feature.description}</span>
                            </Typography>
                        ))}
                    </Box>

                    <Box className={detStyles.imgbox}>
                        <h3>Web View</h3>
                        {project.images?.map((img, index) => (
                            <Box key={index} className={detStyles.images}>
                                <Image src={img} alt={`Project Image ${index}`} width={700} height={450} quality={100} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ProjectDetails;
