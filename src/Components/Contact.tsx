"use client"
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';
import ContactForm from './ContactForm';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
    return (
        <div className="py-20 bg-transparent min-h-screen text-white relative z-10" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

                <div className="mb-16 max-w-3xl mx-auto text-center">
                    <div className="flex justify-center mt-7 mb-9">
                        <motion.h1
                            className="text-5xl sm:text-6xl font-extrabold text-center tracking-tight flex  items-center gap-1"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-[#00EEFF] mr-3">Get in</span>
                            <span className="text-white">Touch</span>
                        </motion.h1>
                    </div>
                    <motion.p
                        className='text-2xl text-[#94A3B8]'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        I'm always open to discussing new projects or opportunities to be part of your vision — let's collaborate and create something amazing together! 
                    </motion.p>
                </div>

                <div className="flex justify-center flex-wrap gap-8 lg:gap-16 max-w-5xl mx-auto">

                    <div className="w-full lg:w-[46%] relative z-30 flex flex-col items-start text-left">
                        {/* Let's Connect Heading */}
                        <motion.h2
                            className="text-2xl sm:text-3xl font-bold text-white mb-2"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Let's Connect
                        </motion.h2>

                        {/* Subtitle */}
                        <motion.p
                            className="text-sm sm:text-base text-[#94A3B8] mb-6 max-w-md"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Whether you have a question or want to work together, feel free to reach out!
                        </motion.p>

                        {/* Contact Info (Email and Phone) */}
                        <motion.div
                            className="flex flex-col gap-3 mb-6"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 text-sm sm:text-base">
                                <div className="p-2.5 rounded-full bg-blue-600/10 text-cyan-400 flex-shrink-0">
                                    <FaEnvelope className="w-4 h-4" />
                                </div>
                                <a href="mailto:sharmaabhinav1013@gmail.com" className="text-[#94A3B8] hover:text-cyan-400 transition-colors font-medium">
                                    sharmaabhinav1013@gmail.com
                                </a>
                            </div>

                            <div className="flex items-center gap-3 text-sm sm:text-base">
                                <div className="p-2.5 rounded-full bg-pink-600/10 text-pink-400 flex-shrink-0">
                                    <FiPhone className="w-4 h-4" />
                                </div>
                                <a href="tel:+916260492536" className="text-[#94A3B8] hover:text-pink-400 transition-colors font-medium">
                                    +91 6260492536
                                </a>
                            </div>
                        </motion.div>

                        {/* Social Icons */}
                        <motion.div
                            className="flex gap-3.5 mb-8"
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <a
                                href="https://linkedin.com/in/abhinav-sharma-314319327"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1B2437] border border-[#374151] rounded-xl p-3 shadow-lg text-white transition-all duration-300 hover:bg-[#253046] hover:text-cyan-400"
                            >
                                <FiLinkedin className="w-5 h-5" />
                            </a>

                            <a
                                href="https://github.com/Abhinavsharma005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#1B2437] border border-[#374151] rounded-xl p-3 shadow-lg text-white transition-all duration-300 hover:bg-[#253046] hover:text-cyan-400"
                            >
                                <FiGithub className="w-5 h-5" />
                            </a>
                        </motion.div>

                        {/* Merged Location and Response Time Card */}
                        <motion.div
                            className="bg-[#11141D]/40 backdrop-blur-md border border-[#1B2437]/60 rounded-xl p-5 shadow-2xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10 w-full"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex flex-col gap-5">
                                {/* Location Item */}
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-full flex-shrink-0 bg-green-600/20 text-green-400">
                                        <FaMapMarkerAlt className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-base text-[#00EEFF] font-medium mb-0.5">
                                            Available for Remote Work
                                        </p>
                                        <p className="text-[#94A3B8] text-xs">
                                            Always open to opportunities
                                        </p>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="border-t border-[#1B2437]/60 my-0.5"></div>

                                {/* Response Time Item */}
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-full flex-shrink-0 bg-yellow-600/20 text-yellow-400">
                                        <FaClock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-base text-[#00EEFF] font-medium mb-0.5">
                                            I respond typically within 24 hours
                                        </p>
                                        <p className="text-[#94A3B8] text-xs">
                                            For urgent matters, feel free to call me directly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className="w-full lg:w-[44%] mt-10 flex-shrink-0 relative z-30"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>

                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #3b82f633 1px, transparent 1px), radial-gradient(circle, #3b82f633 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        backgroundPosition: '0 0, 20px 20px',
                    }}
                ></div>

            </div>
        </div>
    );
}

export default Contact;