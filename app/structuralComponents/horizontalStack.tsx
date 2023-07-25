import { HTMLAttributes } from "react";
import MostContainers from "~/styles/mostContainers";

interface HorizontalStackProps
  extends HTMLAttributes<HTMLDivElement>,
    MostContainers {
  spacing?: string;
}

export default function HorizontalStack({
  spacing = "2rem",
  width = "100%",
  height = "fit-content",
  align = "center",
  justify = "flex-start",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
  ...props
}: HorizontalStackProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: spacing,
        backgroundColor: bg,
        color: color,
        borderRadius: borderRadius,
        border: border,
        padding: padding,
        margin: margin,
      }}
      {...props}
    >
      {props.children}
    </div>
  );
}
