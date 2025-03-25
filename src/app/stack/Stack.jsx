

"use client"
import React, { useEffect, useState } from 'react'
import ststyle from '@/styles/stack.module.css'
import { Box, Typography } from '@mui/material'
import redux from '../../../assets/redux-icon.png'
import mui from '../../../assets/mui.png'
import bootstrap from '../../../assets/bootstrap.png'
import git from '../../../assets/git.png'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'




const Stack = () => {
  const [stacks, setStacks] = useState([])

  useEffect(() => {
    async function fetchStacks() {
      const query = `*[_type == "stack"] | order(_createdAt asc){
        name,
        desc,
        icon
      }`;
  
      try {
        const data = await client.fetch(query);
        console.log(data); 
        setStacks(data);   
      } catch (error) {
        console.error("Error fetching stacks:", error);
      }
    }
  
    fetchStacks();
  }, []);
  
  return (

    <Box className={ststyle.st_container}>
      <Box className={ststyle.st_landing} sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box className={ststyle.st_body} sx={{ width: "50%", paddingTop: "100px", paddingBottom: "30px" }}>
          <h1>Tech Stack</h1>
          <Typography className={ststyle.upperp}>Framework, Library, tool and resources I use regularly.</Typography>
          <Box className={ststyle.st_tech_grid}>
            {stacks.map((tech, index) => (
              <Box key={index} className={ststyle.st_tech_card}>
                <Image src={tech.icon} width={40} height={40} loading="lazy" alt={tech.name} />
                <Box className={ststyle.texts}>
                  <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "600" }}>{tech.name}</Typography>
                  <Typography sx={{ opacity: "0.6" }} variant="body2">{tech.desc}</Typography>
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