import React from 'react'
import ststyle from '@/styles/stack.module.css'
import { Box, Typography } from '@mui/material'
import redux from '../../../assets/redux-icon.png'
import mui from '../../../assets/mui.png'
import bootstrap from '../../../assets/bootstrap.png'
import git from '../../../assets/git.png'
import Image from 'next/image'

const techStack = [
  { name: "VS Code", desc: "Code Editor", icon: "https://pritamjoardar.site/logos/vscode.svg" },
  { name: "React Js", desc: "Frontend Library", icon: "https://pritamjoardar.site/logos/react.svg" },
  { name: "CSS", desc: "For Style the Webpage", icon: "https://pritamjoardar.site/logos/css.svg" },
  { name: "Redux", desc: "State Management", icon: redux },
  { name: "Material Ui", desc: "Component Library", icon: mui },
  { name: "Node Js", desc: "JavaScript Runtime", icon: "https://pritamjoardar.site/logos/nodejs.svg" },
  { name: "Bootstrap", desc: "Component Library", icon: bootstrap },
  { name: "JavaScript", desc: "Making the Logic", icon: "https://pritamjoardar.site/logos/javascript.svg" },
  { name: "Git", desc: "Version Control System", icon: git },
  { name: "HTML", desc: "Structure the Webpage", icon: "https://pritamjoardar.site/logos/html.svg" }
];


const Stack = () => {
  return (

    <Box className={ststyle.st_container}>
      <Box className={ststyle.st_landing} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box className={ststyle.st_body} sx={{ width: "50%", paddingTop: "100px", paddingBottom: "30px" }}>
          <h1>Tech Stack</h1>
          <Typography className={ststyle.upperp}>Framework, Library, tool and resources I use regularly.</Typography>
          <Box className={ststyle.st_tech_grid}>
            {techStack.map((tech, index) => (
              <Box key={index} className={ststyle.st_tech_card}>
                <Image src={tech.icon} width={50} height={50} loading="lazy"  alt={tech.name} />
                <Box className={ststyle.texts}>
                  <Typography variant="h6" sx={{fontSize:"15px", fontWeight:"600"}}>{tech.name}</Typography>
                  <Typography sx={{opacity:"0.6"}} variant="body2">{tech.desc}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Stack