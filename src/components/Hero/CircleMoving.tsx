"use client"
import React from 'react'
import { motion } from "framer-motion";

function CircleMoving() {
  return (
    <div>
       <motion.img
        src="images/hero/hero-section.png" // Replace with your image path
        alt="mlops"
        // className="absolute bottom-0 left-0"
        initial={{ x: '0%', y: "-10%",   opacity: .2 ,  }} // Start position off the screen to the left: ;
        animate={{ x: 0, y: 0,  opacity: 1,  }} // End position in the viewport
        transition={{ duration: 1, ease: "linear" }} // Animation timing
        style={{ width: '15rem', height: 'auto', }} // Adjust as needed
      />
    </div>
  )
}

export default CircleMoving