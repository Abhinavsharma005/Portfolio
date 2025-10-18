import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        
        const formActionUrl = "https://formspree.io/f/xjkalpqv";

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill out all fields.");
            return;
        }

        const form = e.target;
        
        fetch(formActionUrl, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Thank you! Your message has been sent.");
                setFormData({ name: '', email: '', message: '' }); 
            } else {
                alert("There was an issue submitting your form. Please try again.");
            }
        })
        .catch(error => {
            console.error('Submission error:', error);
            alert("An error occurred. Check the console for details.");
        });
    };

 
    return (
      
        <div className="w-full max-w-lg p-6 bg-[#11141D] border border-[#1B2437] rounded-xl shadow-2xl">
            <form onSubmit={handleSubmit} method="POST">
                
                {/* Name Input */}
                <div className="text-left mb-4">
                    <label htmlFor="name" className="block text-white text-base font-medium mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-[#0c121b] border border-cyan-500/50 rounded-lg text-white placeholder-[#94A3B8] 
               outline-none transition-all duration-200 input-glow-effect"
                        required
                    />
                </div>

                {/* Email Input */}
                <div className="text-left mb-4">
                    <label htmlFor="email" className="block text-white text-base font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 bg-[#0c121b] border border-cyan-500/50 rounded-lg text-white placeholder-[#94A3B8] 
               outline-none transition-all duration-200 input-glow-effect"
                        required
                    />
                </div>

                {/* Message Input (Textarea) */}
                <div className="text-left mb-6">
                    <label htmlFor="message" className="block text-white text-base font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows="6"
                        className="w-full px-4 py-3 bg-[#0c121b] border border-cyan-500/50 rounded-lg text-white placeholder-[#94A3B8] 
               outline-none transition-all duration-200 input-glow-effect"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center py-3 px-4 bg-cyan-400 text-black font-semibold rounded-lg shadow-md hover:bg-cyan-300 transition-all duration-300"
                >
                    <FaPaperPlane className="w-4 h-4 mr-2" /> Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;