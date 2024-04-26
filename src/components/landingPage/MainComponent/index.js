import React from "react";
import "./style.css";
import Button from "../../Common/Button";
import phone from "../../../assets/phone 1.png";
import gradiant from "../../../assets/gradient 1.png";
import {motion} from "framer-motion";

const MainComponent = () => {
    return (
        <div className="flex-info">
            <div className="left-component">
                <motion.h1 
                className="track-crypto-heading"
                initial={{opacity:0 , y: 50}}
                animate={{opacity:1 , y:0}}
                transition={{duration: 0.5}}
                >Track Crypto</motion.h1>
                <motion.h1 
                className="real-time-heading"
                initial={{opacity:0 , y: 50}}
                animate={{opacity:1 , y:0}}
                transition={{duration: 0.5 , delay: 0.5}}
                >Real Time.</motion.h1>
                <motion.p className="info-text"
                initial={{opacity:0 , y: 50}}
                animate={{opacity:1 , y:0}}
                transition={{duration: 0.5 , delay: 1}}
                >Track crypto throw a public api in real time. Visit the dashbord to do so!</motion.p>
                <motion.div className="btn-flex"
                initial={{opacity:0 , x: 50}}
                animate={{opacity:1 , x:0}}
                transition={{duration: 0.5 , delay: 1.5}}
                >
                   <Button text={"Dashbord"}/>
                   <Button text={"Share App"} outline={true}/>
                </motion.div>
            </div>
            <div className="phone-container">
                <motion.img 
                src={phone} 
                alt="phone" 
                className="phone"
                initial={{y: -10}}
                animate={{y: 10}}
                transition={{
                    type: "smoooth",
                    repeatType: "mirror",
                    duration: 2,
                    repeat: Infinity
                }}
                />
                <img src={gradiant} alt="gradiant" className="gradiant"/>
            </div>
        </div>
    )
}

export default MainComponent;