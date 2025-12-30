"use client";

import { useEffect, useRef } from "react";

interface Props {
  height?: number;
  spacing?: number;
  color?: string;
}

export default function DiagonalDivider({
  height = 32,
  spacing = 12,
  color = "#eeeef0",
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.offsetWidth;
    const heightPx = height;

    canvas.width = width * dpr;
    canvas.height = heightPx * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, heightPx);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;

    ctx.translate(-width, 0);

    for (let x = 0; x < width * 3; x += spacing) {
      ctx.beginPath();
      ctx.moveTo(x, heightPx);
      ctx.lineTo(x + heightPx, 0);
      ctx.stroke();
    }
  }, [height, spacing, color]);

  return (
    <canvas
      ref={canvasRef}
      style={{ height }}
      className="w-full block"
      data-testid="diagonal-divider"
    />
  );
}
