"use client"
import React, { useState } from 'react';
import { FaCodeBranch, FaExternalLinkAlt, FaVideo, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = [
    {
        id: 1,
        category: "Full-Stack",
        title: "EduStream - Live Teaching Platform",
        description: "EduStream is a role-based live teaching platform inspired by Twitch and YouTube Live, but optimized for education. It enables teachers to broadcast classes while students interact via real-time chat, live polls, and interactive quizzes.",
        thumbnailUrl: "/edustream-2.png",
        techTags: ["Next.js", "Typescript", "TailwindCSS", "MongoDB", "Redis", "Livekit-WebRTC", "Socket.IO", "Framer Motion", "Cloudinary"],
        liveDemo: "https://edustream-syxz.onrender.com/",
        githubRepo: "https://github.com/Abhinavsharma005/EduStream",
    },
    {
        id: 2,
        category: "Full-Stack",
        title: "Shorty - URL Shortener",
        description: "A Full-Stack web appplication where users create short, clean, shareable links with custom aliases, manage their link history, and securely access everything through authentication.",
        thumbnailUrl: "/Shorty thumbnail.png",
        techTags: ["React.js", "TailwindCSS", "Node.js", "Express.js", "Postgres", "Drizzle ORM"],
        liveDemo: "https://shty.vercel.app/",
        githubRepo: "https://github.com/Abhinavsharma005/Url-Shortner",
    },
    {
        id: 3,
        category: "App Dev",
        title: "Chat App(Flutter based application)",
        description: "ChatApp is a Flutter-based real-time messenger with Firebase authentication and sync, supporting text, images, videos, GIFs, stickers, and emojis. Easily connect new users via phone number or search existing users by name.",
        thumbnailUrl: "/chatapp thumbnail.png",
        techTags: ["Dart", "Firebase", "Cloudinary"],
        liveDemo: "https://www.linkedin.com/posts/abhinav-sharma-314319327_flutterproject-flutter-dart-activity-7369771020095864833-OPVR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJzY4ABokuOV1bS8C6y6y1n7ErKmfl6koU",
        githubRepo: "https://github.com/Abhinavsharma005/Chat-App",
    },

    {
        id: 4,
        category: "Web",
        title: "Spotify Desktop Clone",
        description: "A clean, stylish and functional Spotify Desktop Clone built using react js and tailwindcss — search tracks via the Spotify Web API, play songs, control playback, and save liked songs.",
        thumbnailUrl: "/spotify.png",
        techTags: ["React.js", "TailwindCSS", "Spotify API"],
        liveDemo: "https://spotify-clone-vert-chi.vercel.app/",
        githubRepo: "https://github.com/Abhinavsharma005/Spotify-Clone",
    },

    {
        id: 5,
        category: "Web",
        title: "PokeDeck(Finds Pokemon Data by Search and Filters)",
        description: "A modern, responsive web application that shows Pokémon details on a 3D cards that can flip on tap to reveal more information powered by Pokeapi.",
        thumbnailUrl: "/pokedeck thumbnail.png",
        techTags: ["HTML", "CSS", "JavaScript", "PokeApi"],
        liveDemo: "https://poke-deck-roan.vercel.app/",
        githubRepo: "https://github.com/Abhinavsharma005/PokeDeck",
    },
    {
        id: 6,
        category: "App Dev",
        title: "ToDo App",
        description: "A simple and modern task management app built with Flutter, powered by Firebase Authentication and Firestore. Users can sign up/login, complete their onboarding profile, create tasks, and track completed ones — all with a clean UI and real-time updates.",
        thumbnailUrl: "/todo thumbnail.png",
        techTags: ["Dart", "Firebase", "Cloudinary"],
        liveDemo: "https://www.linkedin.com/posts/abhinav-sharma-314319327_flutterproject-flutter-dart-activity-7367396575028858881-_ZLY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJzY4ABokuOV1bS8C6y6y1n7EnKmfl6koU",
        githubRepo: "https://github.com/Abhinavsharma005/To_do_app_flutter",
    },
    {
        id: 7,
        category: "App Dev",
        title: "TechNewz (A tech-based news application)",
        description: "TechNewz is a simple Flutter-based news application that fetches the latest technology news using the NewsAPI. The app allows users to stay updated with trending tech stories, read brief summaries, and open the full article via the provided URL.",
        thumbnailUrl: "/technews thumbnail.png",
        techTags: ["Dart", "NewsApi"],
        liveDemo: "https://www.linkedin.com/posts/abhinav-sharma-314319327_flutter-dart-newsapp-activity-7365595601838817280-0dmD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJzY4ABokuOV1bS8C6y6y1n7ErKmfl6koU",
        githubRepo: "https://github.com/Abhinavsharma005/flutter-movie-app",
    },

    {
        id: 8,
        category: "App Dev",
        title: "Flutter Movie App",
        description: "Flutter Movie App A simple movie browsing app built with Flutter, powered by the TMDB API. Users can explore trending and popular movies, view details like ratings and overviews, and enjoy a clean, responsive UI with smooth performance.",
        thumbnailUrl: "/movie app thumbnail.png",
        techTags: ["Dart", "TMDB Api"],
        liveDemo: "https://www.linkedin.com/posts/abhinav-sharma-314319327_flutter-dart-movieapp-activity-7366051340466167809-DqmY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFJzY4ABokuOV1bS8C6y6y1n7ErKmfl6koU",
        githubRepo: "https://github.com/Abhinavsharma005/flutter-movie-app",
    },

];

const categories = ["All", "Web", "Full-Stack", "AI/ML", "App Dev"];

const ProjectCard = ({ project }) => {
    const isAppDev = project.category === 'App Dev';

    const primaryLinkText = isAppDev ? 'Demo Video' : 'Live Demo';
    const PrimaryLinkIcon = isAppDev ? FaVideo : FaExternalLinkAlt;

    const primaryLinkStyle = 'text-white bg-indigo-600 hover:bg-indigo-700';

    return (
        <motion.div
            className="bg-[#11141D]/90 border border-[#1B2437] rounded-xl shadow-2xl overflow-hidden transform hover:scale-[1.01] transition-transform duration-300"
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
        >
            {/* Thumbnail with Category Tag Overlay */}
            <div className="relative h-70 w-full">
                <img
                    src={project.thumbnailUrl}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-cover"
                />
                <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${project.category === 'Full-Stack' ? 'bg-indigo-600/70 text-white' : 'bg-cyan-600/70 text-white'}`}>
                    {project.category}
                </span>
            </div>

            {/* Content Area */}
            <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#94A3B8] text-sm mb-4 min-h-[4rem]">{project.description}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techTags.map(tag => (
                        <span key={tag} className="text-xs font-medium px-3 py-1 bg-[#1B2437] text-cyan-400 rounded-full border border-cyan-400/20">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center text-sm font-semibold px-4 py-2 rounded-lg transition duration-200 ${primaryLinkStyle}`}
                        >
                            <PrimaryLinkIcon className="mr-2" /> {primaryLinkText}
                        </a>
                    )}

                    {/* GitHub Repo Link*/}
                    {project.githubRepo && (
                        <a
                            href={project.githubRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-sm font-semibold text-[#94A3B8] border border-[#374151] hover:bg-[#1F2937] px-4 py-2 rounded-lg transition duration-200"
                        >
                            <FaCodeBranch className="mr-2" /> GitHub Repo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const PROJECT_LIMIT = 6;
    const [activeCategory, setActiveCategory] = useState("All");
    const [showAll, setShowAll] = useState(false); // State for 'View More/Less'

    // Filter projects based on the active category
    const filteredProjects = activeCategory === "All"
        ? projectsData
        : projectsData.filter(p => p.category === activeCategory);

    // Conditionally slice the projects for display
    const projectsToDisplay = (activeCategory === "All" && !showAll)
        ? filteredProjects.slice(0, PROJECT_LIMIT)
        : filteredProjects;

    // Check if the "View More" button is needed
    const showViewMoreButton = activeCategory === "All" && projectsData.length > PROJECT_LIMIT;
    const buttonText = showAll ? "View Less" : "View More";

    const handleCategoryChange = (category) => {
        setActiveCategory(category);

        if (category === "All") {
            setShowAll(false);
        } else {
            setShowAll(true);
        }
    };

    return (
        <div className="py-20 bg-black min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center mb-16">
                    <motion.h1
                        className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-600"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        Featured Projects
                    </motion.h1>
                </div>

                {/* Category Tabs */}
                <motion.div
                    className="flex justify-center flex-wrap gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
                            className={`
                                px-6 py-2 rounded-full font-medium transition-all duration-300
                                ${activeCategory === category
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/50"
                                    : "bg-[#1B2437] text-[#94A3B8] hover:bg-[#253046]"
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    layout
                >
                    <AnimatePresence>
                        {projectsToDisplay.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View More/View Less Button only for 'All' tab */}
                {showViewMoreButton && (
                    <div className="flex flex-col items-center justify-center mt-10">
                        {showAll && (
                            <FaChevronUp
                                className="text-[#54c8fe] text-lg mb-2 animate-bounce transition duration-300"
                            />
                        )}

                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="flex items-center text-sm font-semibold text-white bg-[#0f121a] px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:text-[#54c8fe] hover:shadow-lg hover:bg-[#1F2937]"
                        >
                            {buttonText}
                        </button>

                        {!showAll && (
                            <FaChevronDown
                                className="text-[#54c8fe] text-lg mt-2 animate-bounce transition duration-300"
                            />
                        )}
                    </div>
                )}

                {/* Fallback for no projects in a category */}
                {filteredProjects.length === 0 && (
                    <p className="text-center text-xl text-[#94A3B8] mt-10">
                        No projects found in the **{activeCategory}** category yet!
                    </p>
                )}
            </div>
        </div>
    );
};

export default Projects;