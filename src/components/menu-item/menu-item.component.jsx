import React from 'react';
import { motion } from "framer-motion";
import './menu-item.styles.scss';
const MenuItem = ({ title, imageUrl, size }) => (
    <motion.div
        
        className={`${size} menu-item`}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.8 }}
    >
        <div className='background-image' 
        style={{
            backgroundImage: `url(${imageUrl})`
        }}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">EXPLORE NOW</span>
        </div>
    </motion.div>
)

export default MenuItem;