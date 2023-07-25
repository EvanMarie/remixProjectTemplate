interface BreakProps {
  height?: string;
}

export default function Break({ height = "10px" }: BreakProps) {
  return <div style={{ height: height, width: "100%" }} />;
}
