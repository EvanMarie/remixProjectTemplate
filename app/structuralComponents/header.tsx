interface HeaderProps {
  title?: string;
  subtitle?: string;
  titleSize?: string;
  subtitleSize?: string;
  textShadow?: string;
  titleColor?: string;
  subtitleColor?: string;
}

export default function Header({
  title,
  subtitle,
  titleSize = "2.5rem",
  subtitleSize = "1.5rem",
  textShadow,
  titleColor,
  subtitleColor,
}: HeaderProps) {
  return (
    <div className="headingContainer">
      <h1
        style={{
          fontSize: titleSize,
          textShadow: textShadow,
          color: titleColor,
        }}
      >
        {title}
      </h1>
      <h2
        style={{
          fontSize: subtitleSize,
          color: subtitleColor,
          fontWeight: 400,
          padding: "0 0 0 1rem",
        }}
      >
        {subtitle}
      </h2>
    </div>
  );
}
