interface GridProps {
  columns: number;
  gap: number;
  children: React.ReactNode;
}

export default function Grid({ columns, gap, children }: GridProps) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return <div style={gridStyle}>{children}</div>;
}
