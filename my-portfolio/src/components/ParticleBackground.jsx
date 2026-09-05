import { useEffect, useRef } from "react";

const BLUE = "58, 132, 255";

const random = (min, max) => Math.random() * (max - min) + min;

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let particles = [];
    let frame;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const createParticles = () => {
      // Density stays consistent on phones, laptops, and wide screens.
      const count = Math.max(28, Math.min(78, Math.round((width * height) / 22000)));
      particles = Array.from({ length: count }, () => ({
        x: random(-40, width + 40),
        y: random(-40, height + 40),
        vx: random(-0.13, 0.13),
        vy: random(-0.13, 0.13),
        radius: random(1.1, 2.25),
        phase: random(0, Math.PI * 2),
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const onPointerMove = (event) => {
      pointer.targetX = (event.clientX / width - 0.5) * 14;
      pointer.targetY = (event.clientY / height - 0.5) * 14;
    };

    const draw = (time = 0) => {
      context.clearRect(0, 0, width, height);
      pointer.x += (pointer.targetX - pointer.x) * 0.025;
      pointer.y += (pointer.targetY - pointer.y) * 0.025;

      const reach = Math.max(135, Math.min(195, width * 0.13));
      const still = reduceMotion.matches;

      particles.forEach((particle) => {
        if (!still) {
          particle.x += particle.vx;
          particle.y += particle.vy;
        }
        if (particle.x < -50) particle.x = width + 50;
        if (particle.x > width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = height + 50;
        if (particle.y > height + 50) particle.y = -50;
      });

      // Connect nearby points and softly fill the smallest local triangles.
      for (let i = 0; i < particles.length; i += 1) {
        const a = particles[i];
        const neighbours = [];
        for (let j = i + 1; j < particles.length; j += 1) {
          const b = particles[j];
          const distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < reach) neighbours.push({ point: b, distance });
        }
        neighbours.sort((left, right) => left.distance - right.distance);

        neighbours.slice(0, 3).forEach(({ point: b, distance }) => {
          const opacity = (1 - distance / reach) ** 1.7 * 0.5;
          context.beginPath();
          context.moveTo(a.x + pointer.x, a.y + pointer.y);
          context.lineTo(b.x + pointer.x, b.y + pointer.y);
          context.strokeStyle = `rgba(${BLUE}, ${opacity})`;
          context.lineWidth = 0.55 + opacity;
          context.stroke();
        });

        if (neighbours.length > 1 && i % 2 === 0) {
          const b = neighbours[0].point;
          const c = neighbours[1].point;
          if (Math.hypot(b.x - c.x, b.y - c.y) < reach * 0.8) {
            context.beginPath();
            context.moveTo(a.x + pointer.x, a.y + pointer.y);
            context.lineTo(b.x + pointer.x, b.y + pointer.y);
            context.lineTo(c.x + pointer.x, c.y + pointer.y);
            context.closePath();
            context.fillStyle = `rgba(${BLUE}, 0.018)`;
            context.fill();
          }
        }
      }

      particles.forEach((particle) => {
        const pulse = still ? 0.8 : 0.72 + Math.sin(time * 0.001 + particle.phase) * 0.22;
        const x = particle.x + pointer.x;
        const y = particle.y + pointer.y;
        const glow = context.createRadialGradient(x, y, 0, x, y, particle.radius * 7);
        glow.addColorStop(0, `rgba(145, 201, 255, ${pulse})`);
        glow.addColorStop(0.2, `rgba(${BLUE}, ${pulse * 0.7})`);
        glow.addColorStop(1, `rgba(${BLUE}, 0)`);
        context.beginPath();
        context.arc(x, y, particle.radius * 7, 0, Math.PI * 2);
        context.fillStyle = glow;
        context.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="plexus-background" aria-hidden="true" />;
}
