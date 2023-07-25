import { HTMLAttributes } from "react";
import MostContainers from "~/styles/mostContainers";

interface FlexContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    MostContainers {
  children?: React.ReactNode;

  direction?: "row" | "row-reverse" | "column" | "column-reverse";
}

export default function FlexContainer({
  children,
  width = "100%",
  height = "fit-content",
  align = "center",
  justify = "center",
  direction = "row",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
}: FlexContainerProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
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
