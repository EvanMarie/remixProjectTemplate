import FlexContainer from "./flexContainer";

interface BadgeProps {
  label: string;
  align?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  boxShadow?: string;
  borderRadius?: string;
  border?: string;
}

export default function Badge({
  label,
  align = "center",
  width = "fit-content",
  backgroundColor = "var(--yellow)",
  color = "var(--darkGray)",
  boxShadow = "var(--smallShadowBlack)",
  borderRadius = "var(--badgeBorderRadius)",
  border = "none",
}: BadgeProps) {
  return (
    <FlexContainer align={align}>
      <div
        style={{
          width: width,
          backgroundColor: backgroundColor,
          color: color,
          boxShadow: boxShadow,
          borderRadius: borderRadius,
          border: border,
          fontWeight: 500,
          padding: "3px 10px",
          marginBottom: "5px",
        }}
      >
        {label}
      </div>
    </FlexContainer>
  );
}
