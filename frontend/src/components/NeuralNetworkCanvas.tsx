import { useEffect, useRef } from 'react';

interface Neuron {
  x: number;
  y: number;
  size: number;
  pulsePhase: number;
  isLarge: boolean;
  glowIntensity: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  pulsePhase: number;
  energy: number;
}

interface EnergyPulse {
  from: Neuron;
  to: Neuron;
  progress: number;
  speed: number;
}

const NeuralNetworkCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const neuronsRef = useRef<Neuron[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const energyPulsesRef = useRef<EnergyPulse[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const hero = canvas.closest('.hero-section');
      if (hero) {
        canvas.width = hero.clientWidth;
        canvas.height = hero.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      init();
    };

    const init = () => {
      const neuronCount = Math.floor((canvas.width * canvas.height) / 15000);
      neuronsRef.current = [];

      for (let i = 0; i < neuronCount; i++) {
        neuronsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 2,
          pulsePhase: Math.random() * Math.PI * 2,
          isLarge: Math.random() < 0.1,
          glowIntensity: 0.5 + Math.random() * 0.5,
        });
      }

      connectionsRef.current = [];
      for (let i = 0; i < neuronsRef.current.length; i++) {
        for (let j = i + 1; j < neuronsRef.current.length; j++) {
          const dx = neuronsRef.current[i].x - neuronsRef.current[j].x;
          const dy = neuronsRef.current[i].y - neuronsRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150 && Math.random() < 0.3) {
            connectionsRef.current.push({
              from: i,
              to: j,
              opacity: 0,
              pulsePhase: Math.random() * Math.PI * 2,
              energy: 0,
            });
          }
        }
      }
    };

    const createEnergyPulse = (from: Neuron, to: Neuron) => {
      energyPulsesRef.current.push({
        from,
        to,
        progress: 0,
        speed: 0.01 + Math.random() * 0.02,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;
      const isDarkMode = document.documentElement.classList.contains('dark');
      const isLightMode = !isDarkMode;
      const primaryColor = isLightMode ? '16, 185, 129' : '59, 130, 246';
      const lightColor = isLightMode ? '52, 211, 153' : '124, 196, 255';
      const baseOpacity = isLightMode ? 0.35 : 0.3;

      // Draw connections
      connectionsRef.current.forEach((connection) => {
        const fromNeuron = neuronsRef.current[connection.from];
        const toNeuron = neuronsRef.current[connection.to];

        connection.opacity =
          0.1 + 0.3 * ((Math.sin(time * 0.5 + connection.pulsePhase) + 1) * 0.5);

        ctx.strokeStyle = `rgba(${primaryColor}, ${connection.opacity * baseOpacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(fromNeuron.x, fromNeuron.y);
        ctx.lineTo(toNeuron.x, toNeuron.y);
        ctx.stroke();

        if (Math.random() < 0.005) {
          createEnergyPulse(fromNeuron, toNeuron);
        }
      });

      // Draw energy pulses
      energyPulsesRef.current = energyPulsesRef.current.filter((pulse) => {
        pulse.progress += pulse.speed;

        if (pulse.progress >= 1) return false;

        const x =
          pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
        const y =
          pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;

        const alpha = Math.sin(pulse.progress * Math.PI) * 0.8;

        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${lightColor}, ${alpha})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor}, ${alpha * 0.2})`;
        ctx.fill();

        return true;
      });

      // Draw neurons
      neuronsRef.current.forEach((neuron) => {
        const pulseIntensity =
          0.7 + 0.3 * Math.sin(time * 2 + neuron.pulsePhase);
        const glowSize =
          neuron.size * (neuron.isLarge ? 2 : 1.5) * pulseIntensity;

        const gradient = ctx.createRadialGradient(
          neuron.x,
          neuron.y,
          0,
          neuron.x,
          neuron.y,
          glowSize * 2
        );

        if (neuron.isLarge) {
          gradient.addColorStop(0, `rgba(${primaryColor}, ${0.8 * pulseIntensity})`);
          gradient.addColorStop(0.5, `rgba(${primaryColor}, ${0.3 * pulseIntensity})`);
          gradient.addColorStop(1, `rgba(${primaryColor}, 0)`);
        } else {
          gradient.addColorStop(0, `rgba(${lightColor}, ${0.6 * pulseIntensity})`);
          gradient.addColorStop(0.5, `rgba(${primaryColor}, ${0.2 * pulseIntensity})`);
          gradient.addColorStop(1, `rgba(${primaryColor}, 0)`);
        }

        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, glowSize * 2, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          neuron.x,
          neuron.y,
          neuron.size * pulseIntensity,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = neuron.isLarge
          ? `rgba(${primaryColor}, ${0.9 * pulseIntensity})`
          : `rgba(${lightColor}, ${0.7 * pulseIntensity})`;
        ctx.fill();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="neural-canvas absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default NeuralNetworkCanvas;

