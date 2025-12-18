import { useEffect, useRef } from "react";
import './CircuitFlow.css';

export default function CircuitFlow() {
  const svgRef = useRef<SVGSVGElement>(null);

  const colors = {
    primary: "#FFEB3B",
    secondary: "#FFC107",
    glow: "rgba(255, 235, 59, 0.5)",
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = svgRef.current;
    const lines = svg.querySelectorAll<SVGPathElement>(".circuit-line");
    const circles = svg.querySelectorAll<SVGCircleElement>(".circuit-node");

    const animateLine = (line: SVGPathElement, delay: number) => {
      const length = line.getTotalLength();
      line.style.strokeDasharray = `${length}`;
      line.style.strokeDashoffset = `${length}`;
      const keyframes = [
        { strokeDashoffset: length, opacity: 0 },
        { strokeDashoffset: 0, opacity: 0.4 },
        { strokeDashoffset: 0, opacity: 0.15 },
      ];
      const timing: KeyframeAnimationOptions = { duration: 4000, delay, iterations: Infinity };
      line.animate(keyframes, timing);
    };

    const animateNode = (node: SVGCircleElement, delay: number) => {
      const keyframes = [
        { r: 2, opacity: 0 },
        { r: 4, opacity: 0.5 },
        { r: 2, opacity: 0.2 },
      ];
      const timing: KeyframeAnimationOptions = { duration: 4000, delay, iterations: Infinity };
      node.animate(keyframes, timing);
    };

    lines.forEach((line, i) => animateLine(line, i * 400));
    circles.forEach((circle, i) => animateNode(circle, i * 400));

    return () => {
      lines.forEach((line) => line.getAnimations().forEach((a) => a.cancel()));
      circles.forEach((circle) => circle.getAnimations().forEach((a) => a.cancel()));
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="circuit-background"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colors.primary} stopOpacity="0.3" />
          <stop offset="50%" stopColor={colors.primary} />
          <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Horizontal Circuit Paths */}
      <path
        className="circuit-line"
        d="M 100 100 L 300 150 L 500 120 L 700 200 L 900 150 L 1100 250"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
      />
      <path
        className="circuit-line"
        d="M 150 300 L 400 280 L 600 350 L 850 320 L 1050 400"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
      />
      <path
        className="circuit-line"
        d="M 50 500 L 250 480 L 450 550 L 650 500 L 850 580 L 1100 550"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
      />
      <path
        className="circuit-line"
        d="M 200 700 L 400 650 L 600 720 L 800 680 L 1000 750"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
      />

      {/* Vertical Lines */}
      {[
        { x1: 300, y1: 150, x2: 300, y2: 400 },
        { x1: 600, y1: 120, x2: 600, y2: 300 },
        { x1: 850, y1: 200, x2: 850, y2: 500 },
      ].map((l, i) => (
        <line
          key={i}
          className="circuit-line"
          {...l}
          stroke={colors.primary}
          strokeWidth="1.5"
          opacity="0.6"
          filter="url(#glow)"
        />
      ))}

      {/* Nodes */}
      {[
        [100, 100], [300, 150], [500, 120], [700, 200], [900, 150], [1100, 250],
        [150, 300], [400, 280], [600, 350], [850, 320], [1050, 400],
        [50, 500], [250, 480], [450, 550], [650, 500], [850, 580], [1100, 550],
        [200, 700], [400, 650], [600, 720], [800, 680], [1000, 750],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          className="circuit-node"
          cx={cx}
          cy={cy}
          r="4"
          fill={colors.primary}
          filter="url(#glow)"
        />
      ))}
    </svg>
  );
}
