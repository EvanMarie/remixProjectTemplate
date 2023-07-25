import { HTMLAttributes } from "react";

interface StackContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  align?: string;
  justify?: string;
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  spacing?: string;
  bg?: string | undefined;
  color?: string | undefined;
  borderRadius?: string | undefined;
  border?: string | undefined;
  padding?: string | undefined;
  margin?: string | undefined;
}

export function StackContainer({
  children,
  width = "100%",
  height = "fit-content",
  align = "center",
  justify = "center",
  direction = "column",
  spacing = "1rem",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
}: StackContainerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        width: width,
        height: height,
        gap: spacing,
        backgroundColor: bg,
        color: color,
        borderRadius: borderRadius,
        border: border,
        padding: padding,
        margin: margin,
      }}
    >
      {children}
    </div>
  );
}
