'use client'
import { useParams } from 'next/navigation';
import projectsData from '@/data/Projectsdata';
import Image from 'next/image';
import detStyles from '@/styles/details.module.css'
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import live from '../../../../assets/live.png'
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectDetails = () => {
    const params = useParams();
    const { id } = params;
    console.log(id);


    const project = projectsData.find((p) => p.id === id);

    if (!project) {
        return <h1>Project Not Found</h1>;
    }
    return (
        <Box className={detStyles.det_container}>
            <Box className={detStyles.detlanding} sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                <Box className={detStyles.detbody} sx={{ width: "50%", paddingTop: "100px", paddingBottom: "30px",}}>
                    <Link href={'/projects'}><h1 className={detStyles.proj_link}><KeyboardBackspaceIcon className={detStyles.proj_link} /> All Projects</h1></Link>
                    <h1 className={detStyles.title}>{project.title}</h1>
                    <Box className={detStyles.work_img}>
                        <Image src={project.mainimg} alt={project.id} />
                    </Box>

                    <Box className={detStyles.techs}>
                        {
                            project.technologies.map((tech) => (
                                <Link key={tech.id} href={tech.link} target="_blank">
                                    <button className={detStyles.techbtn}>{tech.name} <Image src={tech.icon} alt={tech.name} width={25} height={22} /> </button>
                                </Link>
                            ))
                        }
                    </Box>

                    <Box className={detStyles.livebox}>
                        {project.liveDemo ?
                            <>
                                <Link href={project.liveDemo} target='blank'><button className={detStyles.livebtn}>Live site <Image className={detStyles.liveicon} src={live} width={25} height={25} alt='live.png' /></button></Link>
                                <Link href={project.github} target='blank'><button className={detStyles.gitbtn}>Github Code <GitHubIcon className={detStyles.liveicon} /> </button></Link>
                            </>
                            : <Link href={project.github} target='blank'><button className={detStyles.gitbtn}>Github Code <GitHubIcon className={detStyles.liveicon} /> </button></Link>}
                    </Box>
                    <Box className={detStyles.description}>
                        <h3>About {project.id}</h3>
                        <Typography>{project.description}</Typography>
                    </Box>
                    <Box className={detStyles.features}>
                        <h3>Features</h3>
                        {
                            project.features.map((feature) => (
                                <Typography key={feature.id} className={detStyles.alltext}> • {feature.title} <span >{feature.description}</span></Typography>
                            ))
                        }
                    </Box>

                    <Box className={detStyles.imgbox}>
                        <h3>Web View</h3>
                        {project.images.map((img, index) => (
                            <Box key={index} className={detStyles.images}>
                                <Image
                                    src={img}
                                    alt={`Project Image ${index}`}
                                    width={700} // Set fixed width 
                                    height={450} // Set fixed height 
                                    quality={100} // Increase image quality (Next.js optimization)
                                />
                            </Box>
                        ))}
                    </Box>


                </Box>
            </Box>
        </Box>
    )
}

export default ProjectDetails 