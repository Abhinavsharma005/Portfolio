import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaLink, FaPaperPlane } from 'react-icons/fa'; 
import { FiGithub, FiLinkedin } from 'react-icons/fi'; 
import ContactForm from './ContactForm'; 


const ContactCard = ({ icon: Icon, title, content, subContent, iconStyle, children }) => (
    <div className="bg-[#11141D] border border-[#1B2437] rounded-xl p-6 shadow-2xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-cyan-500/10">
        <div className="flex items-start gap-4">
            {Icon && (
                <div className={`p-3 rounded-full flex-shrink-0 ${iconStyle}`}>
                    <Icon className="w-5 h-5" />
                </div>
            )}
            <div>
                <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
                {content && (
                    <p className="text-lg text-cyan-400 font-medium mb-1">
                        {content}
                    </p>
                )}
                {subContent && (
                    <p className="text-[#94A3B8] text-sm">
                        {subContent}
                    </p>
                )}
                {children && <div className="mt-4">{children}</div>}
            </div>
        </div>
    </div>
);

const AvatarSection = () => (
    <div className="flex flex-col items-center justify-center py-8 mb-4">
        {/* Circular Avatar */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-cyan-500 shadow-xl mb-6">
            <img 
                src="/blue_shirt_2.png" 
                alt="Profile Avatar" 
                className="w-50 h-60 object-cover" 
            />
        </div>
        
        {/* LinkedIn and GitHub Buttons - This JSX is correct */}
        <div className="flex gap-6">
            <a 
                href="https://linkedin.com/in/abhinav-sharma-314319327" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#1B2437] border border-[#374151] rounded-xl p-4 shadow-xl text-white transition-all duration-300 hover:bg-[#253046] hover:text-cyan-400"
            >
                <FiLinkedin className="w-6 h-6" /> 
            </a>

            <a 
                href="https://github.com/Abhinavsharma005" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#1B2437] border border-[#374151] rounded-xl p-4 shadow-xl text-white transition-all duration-300 hover:bg-[#253046] hover:text-cyan-400"
            >
                <FiGithub className="w-6 h-6" /> 
            </a>
        </div>
    </div>
);



const Contact = () => {
    const contactData = [
        {
            icon: FaEnvelope,
            title: "Email",
            content: "sharmaabhinav1013@gmail.com",
            subContent: "Send me an email anytime",
            iconStyle: "bg-blue-600/20 text-blue-400",
        },
        {
            icon: FaMapMarkerAlt,
            title: "Location",
            content: "Available for Remote Work",
            subContent: "Always open to opportunities",
            iconStyle: "bg-pink-600/20 text-pink-400",
        },
        {
            icon: FaClock,
            title: "Response Time",
            content: "I respond typically within 24 hours",
            subContent: "For urgent matters, feel free to call me directly.",
            iconStyle: "bg-green-600/20 text-green-400",
        },
    ];

    return (
        <div className="py-20 bg-black min-h-screen text-white relative z-10" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"> 

                <div className="mb-16 max-w-3xl mx-auto text-center"> 
                    <h1 className='text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-600 mt-7 mb-9'>Get in Touch</h1>
                    <p className='text-2xl text-[#94A3B8]'> 
                        I'm always open to discussing new opportunities and exciting projects—let's collaborate and create something amazing together! Whether you have a question or just want to say hi, I'll do my best to get back to you.
                    </p>
                </div>

                <div className="flex justify-between flex-wrap gap-12">

                    <div className="w-full lg:w-6/12 relative z-30">
                        <AvatarSection />

                        <div className="grid grid-cols-1 gap-8">
                            {contactData.map((item, index) => (
                                <ContactCard
                                    key={index}
                                    icon={item.icon}
                                    title={item.title}
                                    content={item.content}
                                    subContent={item.subContent}
                                    iconStyle={item.iconStyle}
                                >
                                    {item.children}
                                </ContactCard>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-5/12 mt-10 flex-shrink-0 relative z-30"> 
                        <ContactForm />
                    </div>
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