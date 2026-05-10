import { useEffect, useRef } from "react"

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    let canvas: HTMLCanvasElement | null; 
    let ctx: CanvasRenderingContext2D | null;
    let particles: Particle[] = [];
    const particleCount = 30;
    const colors = ["rgba(255, 255, 255, 0.7)"]; 

    let animationId: number;

    class Particle {
        x: number;
        y: number;
        radius: number;
        color: string;
        speedX: number;
        speedY: number;

        constructor() {
            this.x = Math.random() * (canvas?.width || 0);
            this.y = Math.random() * (canvas?.height || 0);
            this.radius = Math.random() * 2 + 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
        }

        draw() {
            if (!ctx) return;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.shadowBlur = 40;
            ctx.shadowColor = this.color;
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (canvas) {
                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;

                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0; 
            }

            this.draw();
        }
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function handleResize() {
        if (!canvas) return;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createParticles();
    }

    function animate() {
        if (!canvas || !ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => p.update());
        animationId = requestAnimationFrame(animate);
    }

    useEffect(() => {
        canvas = canvasRef.current;
        if (!canvas) return;
        ctx = canvas.getContext("2d");

        handleResize(); 
        animate();

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        />
    )
}