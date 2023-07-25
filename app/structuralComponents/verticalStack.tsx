import { HTMLAttributes } from "react";
import MostContainers from "~/styles/mostContainers";

interface VerticalStackProps
  extends HTMLAttributes<HTMLDivElement>,
    MostContainers {
  spacing?: string;
}

export function VerticalStack({
  spacing = "1rem",
  width = "100%",
  height = "fit-content",
  align = "center",
  justify = "center",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
  ...props
}: VerticalStackProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: spacing,
        width: width,
        height: height,
        alignItems: align,
        justifyContent: justify,
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
