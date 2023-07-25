import { HTMLAttributes } from "react";
import MostContainers from "~/styles/mostContainers";

interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    MostContainers {
  children?: React.ReactNode;
}

export default function Container({
  children,
  width = "fit-content",
  height = "fit-content",
  bg,
  color,
  borderRadius,
  border,
  padding,
  margin,
}: ContainerProps) {
  return (
    <div
      style={{
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
