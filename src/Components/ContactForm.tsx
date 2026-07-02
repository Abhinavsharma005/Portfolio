import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

interface FormDataState {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormDataState>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        
        const formActionUrl = "https://formspree.io/f/xjkalpqv";

        if (!formData.name || !formData.email || !formData.message) {
            alert("Please fill out all fields.");
            return;
        }

        const form = e.currentTarget;
        
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
        <div className="w-full max-w-[480px] p-6 bg-[#11141D]/40 backdrop-blur-md border border-[#1B2437]/60 rounded-xl shadow-2xl">
            <form onSubmit={handleSubmit} method="POST">
                
                {/* Name Input */}
                <div className="text-left mb-4">
                    <label htmlFor="name" className="block text-white text-sm font-medium mb-1.5">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-3.5 py-3 bg-[#0c121b]/50 backdrop-blur-sm border border-[#1B2437]/60 rounded-lg text-white placeholder-[#94A3B8] text-sm
               outline-none transition-all duration-200 input-glow-effect"
                        required
                    />
                </div>

                {/* Email Input */}
                <div className="text-left mb-4">
                    <label htmlFor="email" className="block text-white text-sm font-medium mb-1.5">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full px-3.5 py-3 bg-[#0c121b]/50 backdrop-blur-sm border border-[#1B2437]/60 rounded-lg text-white placeholder-[#94A3B8] text-sm
               outline-none transition-all duration-200 input-glow-effect"
                        required
                    />
                </div>

                {/* Message Input (Textarea) */}
                <div className="text-left mb-5">
                    <label htmlFor="message" className="block text-white text-sm font-medium mb-1.5">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message..."
                        rows={5}
                        className="w-full px-3.5 py-3 bg-[#0c121b]/50 backdrop-blur-sm border border-[#1B2437]/60 rounded-lg text-white placeholder-[#94A3B8] text-sm
               outline-none transition-all duration-200 input-glow-effect"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full flex items-center justify-center py-2.5 px-4 bg-cyan-400 text-black font-semibold rounded-lg shadow-md hover:bg-cyan-300 transition-all duration-300 text-sm"
                >
                    <FaPaperPlane className="w-4 h-4 mr-2" /> Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;