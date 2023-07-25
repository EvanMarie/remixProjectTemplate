import { HTMLAttributes } from "react";
import MostContainers from "~/styles/mostContainers";

interface CollapsibleProps
  extends HTMLAttributes<HTMLDivElement>,
    MostContainers {
  spacing?: string;
  divider?: boolean;
}

export default function Collapsible({
  children,
  width = "100%",
  height = "fit-content",
  align = "center",
  justify = "center",
  spacing = "2rem",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
  divider = false,
}: CollapsibleProps) {
  return (
    <div
      className="collapsibleContainer"
      style={{
        gap: spacing,
        alignItems: align,
        justifyContent: justify,
        width: width,
        height: height,
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
