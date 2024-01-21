
import React from 'react';
import { motion } from 'framer-motion';
import "./about.css";

const About = () => {
    return (
        <div className="section">
            <div className="skills">
                <div className="skills-box">
                    <motion.div className="purple-box" whileHover={{ scale: 1.1 }}>
                        <a>&lt;/WEB DESIGN&gt;</a>
                    </motion.div>
                    <motion.div className="purple-box" whileHover={{ scale: 1.1 }}>
                        <a>&lt;/CODING&gt;</a>
                    </motion.div>
                </div>
                <motion.div
                    initial= {{scale: 1, opacity: 0, y: 70}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    viewport={{once: false}}
                    className="skills-text"
                >
                    <h2>&lt;/My name is Simon Melichar&gt;</h2>
                    <div className="skills-text-more">
                        <p><p1>Lorem ipsum dolor</p1> sit amet, consectetuer <p3>adipiscing elit</p3>. Praesent in mauris eu tortor porttitor <p2>accumsan.</p2></p>
                        <p><p1>Lorem ipsum dolor</p1> sit amet, consectetuer <p3>adipiscing elit</p3>. Praesent in mauris eu tortor porttitor <p2>accumsan.</p2> Praesent in mauris eu tortor porttitor <p2>accumsan.</p2></p>
                        <p><p1>Lorem ipsum dolor</p1> sit amet, consectetuer <p3>adipiscing elit</p3>. Praesent in mauris eu tortor porttitor <p2>accumsan.</p2> Praesent in mauris eu tortor porttitor <p2>accumsan.</p2>Lorem ipsum dolor sit amet, consectetuer <p3>adipiscing elit</p3>.</p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default About;