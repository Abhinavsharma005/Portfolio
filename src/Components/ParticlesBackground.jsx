import { useEffect, useRef } from "react"

export default function ParticlesBackground() {
    // Canvas reference for React to access the DOM element
    const canvasRef = useRef(null);

    // Global variables to be accessed by the Particle class and functions
    // Must be declared outside useEffect to be in scope for Particle class definition
    let canvas; 
    let ctx;
    let particles = [];
    const particleCount = 30;
    // The color used for the particles (rgba(255, 255, 255, 0.7) is semi-transparent white)
    const colors = ["rgba(255, 255, 255, 0.7)"]; 

    // Variable to hold the animation ID for cleanup
    let animationId;

    // --- Particle Class Definition ---
    class Particle {
        constructor() {
            // Initial position: random across the canvas dimensions
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            // Radius: between 1 and 3 (Math.random() * 2 + 1)
            this.radius = Math.random() * 2 + 1;
            // Color: selects one color from the colors array
            this.color = colors[Math.floor(Math.random() * colors.length)];
            // Speed: small random value between -0.25 and 0.25 for slow movement
            // (Math.random() - 0.5) generates a value between -0.5 and 0.5
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
        }

        // Method to draw the particle (circle) on the canvas
        draw() {
            ctx.beginPath();
            // Draw a circle (arc)
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            // Set up shadow for a glow effect
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            // Fill the circle
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        // Method to update particle position and handle boundary wrap-around
        upadte() { // Note: Kept the typo 'upadte' as it was in the original snippet
            // Move the particle
            this.x += this.speedX;
            this.y += this.speedY;

            // Handle wrap-around for X-axis (if particle goes off screen left/right)
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;

            // Handle wrap-around for Y-axis (if particle goes off screen top/bottom)
            if (this.y < 0) this.y = canvas.height;
            // Corrected the likely typo 'canvas.wheight' to 'canvas.height'
            if (this.y > canvas.height) this.y = 0; 

            // Redraw the particle at its new position
            this.draw();
        }
    }

    // --- Utility Functions ---

    // Function to initialize or reset the array of particles
    function createParticles() {
        particles = []; // Clear array
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle()); // Create new Particle instances
        }
    }

    // Function to handle window resize events
    function handleResize() {
        // Set canvas dimensions to match window size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Recreate particles to fit the new size
        createParticles();
    }

    // Function to run the animation loop
    function animate() {
        // Clear the entire canvas on each frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Update and draw each particle
        particles.forEach((p) => p.upadte());
        // Request the next frame (this creates the loop)
        animationId = requestAnimationFrame(animate);
    }

    // --- React Hook for Initialization and Cleanup ---

    useEffect(() => {
        // 1. Assign global canvas and context variables
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");

        // 2. Initial setup (set size and create particles)
        handleResize(); 

        // 3. Start the animation loop
        animate();

        // 4. Add event listener for dynamic resizing
        window.addEventListener("resize", handleResize);

        // --- Cleanup Function (runs on component unmount) ---
        return () => {
            // Stop the animation loop
            cancelAnimationFrame(animationId);
            // Remove the event listener to prevent memory leaks
            window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty dependency array ensures run once on mount

    // --- Component Render ---

    return (
        <canvas
            ref={canvasRef}
            // Tailwind CSS classes for full-screen, fixed position, non-interactive background
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    )
}