interface ColorPaletteBoxProps {
  colors: string[];
}

export default function ColorPaletteBox({ colors }: ColorPaletteBoxProps) {
  return (
    <div
      className="border border-[#eeeef0] h-48 p-3 grid gap-3 overflow-hidden"
      style={{
        gridTemplateColumns: `repeat(${colors.length}, minmax(0, 1fr))`,
      }}
    >
      {colors.map((color) => (
        <div
          key={color}
          className="flex items-center justify-center rounded-full"
          style={{ backgroundColor: color }}
        >
          <span
            className="text-white mix-blend-difference text-xs font-semibold tracking-wider"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            {color}
          </span>
        </div>
      ))}
    </div>
  );
}
