import Image from "next/image";
import styles from "./page.module.css";
import { Box, Grid, Typography } from "@mui/material";
import mainStyles from '@/styles/main.module.css'
import Sidebar from "../layouts/Sidebar";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveIcon from '@mui/icons-material/Remove';
import chatx from '../../assets/chatx1.png'
import foodmaze from '../../assets/foodmaze1.png'
import redux from '../../assets/redux-icon.png'
import mui from '../../assets/mui.png'
import Link from "next/link";



export default function Home() {
  return (
    <Box className={mainStyles.main_container}>

      {/* <Grid container> */}
      {/* <Grid item md={3} sx={{}}><Sidebar /></Grid> */}
      {/* <Grid item md={9} className={mainStyles.right_container} sx={{}}> */}
      <Box className={mainStyles.landing} sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
        <Box className={mainStyles.body} sx={{ width: "70%", paddingTop: "100px", paddingBottom: "30px",}}>
          <Link href="https://calendly.com/rupam001majumder/30min" target="blank" className={mainStyles.call_link}>
            <Box className={mainStyles.loader}></Box>
            <Typography>Ready to Connect</Typography>
          </Link>
          {/* heading */}
          <Box className={mainStyles.heading}>
            <h1 className={mainStyles.first_head}>
              Hey, I'm Rupam <span className={mainStyles.wave}>👋</span>
            </h1>
            <h1 className={mainStyles.second_head}>Front-End Dev</h1>
            <h1 className={mainStyles.third_head}>Code. Create. Innovate.</h1>
          </Box>
          <Typography sx={{ color: "white", opacity: "0.7", marginTop: "20px" }}>
            I’m a Front-End Developer from India with a passion for crafting engaging and visually striking websites. Blending creativity with technical expertise, I specialize in responsive web design and building seamless, user-friendly web applications. My focus is on delivering high-quality digital experiences that are both functional and aesthetically compelling.
          </Typography>
          <Box className={mainStyles.upper_buttons}>
            <Link href={"https://www.linkedin.com/in/rupam-majumder-24b3a731a/"} target="blank">
              <button className={mainStyles.btn}>
                <span className={mainStyles.btnContent}>
                  Linkedin <LinkedInIcon className={mainStyles.icon} />
                </span>
              </button>
            </Link>

            <Link href={"https://github.com/rupam0011"} target="blank">
              <button className={mainStyles.btn}>
                <span className={mainStyles.btnContent}>
                  Github <GitHubIcon className={mainStyles.icon} />
                </span>
              </button>
            </Link>
          </Box>

          {/* works */}
          <Box className={mainStyles.work_container}>
            <h3 style={{ margin: "20px 0px", color: "#ffffff" }}>Featured Work</h3>
            <Box className={mainStyles.work_grid}>
              <Link href={"/projects/chatx"}>
                <Box className={mainStyles.cards}>
                  <Box className={mainStyles.card_img}>
                    <Image src={chatx} alt="chatx image" quality={100} />
                  </Box>
                  <Box className={mainStyles.card_text}>
                    <h3>ChatX -- Frontend Development</h3>
                    <button className={mainStyles.card_btn}>Full Details</button>
                  </Box>
                </Box>
              </Link>

              <Link href={"/projects/foodmaze"}>
                <Box className={mainStyles.cards}>
                  <Box className={mainStyles.card_img}>
                    <Image src={foodmaze} alt="foodmaze image" quality={100}/>
                  </Box>
                  <Box className={mainStyles.card_text}>
                    <h3>Foodmaze -- Frontend Development</h3>
                    <button className={mainStyles.card_btn}>Full Details</button>
                  </Box>
                </Box>
              </Link>

            </Box>

            <Box className={mainStyles.project_container}>
              <h3>Check out all my projects</h3>
              <Link href={"/projects"}>
                <button className={mainStyles.project_btn}>All Projects</button>
              </Link>
            </Box>
          </Box>

          <Box className={mainStyles.tech_container}>
            <h3>Tech Stack</h3>
            <Typography className={mainStyles.tech_p}>Framework, Library and resources I use regularly.</Typography>
            <Box className={mainStyles.tech_div}>
              <Box className={mainStyles.techs}>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="react-img" width={40} height={40} loading="lazy" />
                <span>
                  <h4>React.Js</h4>
                  <p>Frontend Library</p>
                </span>
              </Box>
            </Box>
            <Box className={mainStyles.tech_div}>
              <Box className={mainStyles.techs}>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="react-img" width={40} height={40} loading="lazy" />
                <span>
                  <h4>Redux</h4>
                  <p>State Management</p>
                </span>
              </Box>
            </Box>
            <Box className={mainStyles.tech_div}>
              <Box className={mainStyles.techs}>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="react-img" width={40} height={40} loading="lazy" />
                <span>
                  <h4>Javascript</h4>
                  <p>Making the logic</p>
                </span>
              </Box>
            </Box>
            <Box className={mainStyles.tech_div}>
              <Box className={mainStyles.techs}>
                <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="react-img" width={40} height={40} loading="lazy" />
                <span>
                  <h4>Material Ui</h4>
                  <p>Component Library</p>
                </span>
              </Box>
            </Box>
            <Link href={"/stack"}>
              <button className={mainStyles.tool_btn}>All Tools</button>
            </Link>
          </Box>

          


        </Box>
      </Box>
      {/* </Grid> */}
      {/* </Grid> */}

    </Box>
  );
}
