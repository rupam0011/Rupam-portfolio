import React from 'react'
import ststyle from '@/styles/stack.module.css'
import { Box, Typography } from '@mui/material'
import redux from '../../../assets/redux-icon.png'
import mui from '../../../assets/mui.png'
import bootstrap from '../../../assets/bootstrap.png'
import git from '../../../assets/git.png'
import Image from 'next/image'
// import { metadata } from '../layout'


// const techStack = [
//   { name: "VS Code", desc: "Code Editor", icon: "https://pritamjoardar.site/logos/vscode.svg" },
//   { name: "React Js", desc: "Frontend Library", icon: "https://pritamjoardar.site/logos/react.svg" },
//   { name: "CSS", desc: "For Style the Webpage", icon: "https://pritamjoardar.site/logos/css.svg" },
//   { name: "Redux", desc: "State Management", icon: redux },
//   { name: "Material Ui", desc: "Component Library", icon: mui },
//   { name: "Node Js", desc: "JavaScript Runtime", icon: "https://pritamjoardar.site/logos/nodejs.svg" },
//   { name: "Bootstrap", desc: "Component Library", icon: bootstrap },
//   { name: "JavaScript", desc: "Making the Logic", icon: "https://pritamjoardar.site/logos/javascript.svg" },
//   { name: "Git", desc: "Version Control System", icon: git },
//   { name: "HTML", desc: "Structure the Webpage", icon: "https://pritamjoardar.site/logos/html.svg" }
// ];
const techStack = [
  { name: "VS Code", desc: "Code Editor", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "React Js", desc: "Frontend Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "CSS", desc: "For Styling the Webpage", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Redux", desc: "State Management", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Material UI", desc: "Component Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { name: "Node Js", desc: "JavaScript Runtime", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Bootstrap", desc: "Component Library", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "JavaScript", desc: "Making the Logic", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Git", desc: "Version Control System", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "HTML", desc: "Structure the Webpage", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" }
];


export const metadata = {
  title:"Stack"
}

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
                <Image src={tech.icon} width={40} height={40} loading="lazy"  alt={tech.name} />
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