interface ShortTextProps {
  numLines?: number;
  children: React.ReactNode;
}

export default function ShortText({ numLines = 2, children }: ShortTextProps) {
  return (
    <div className={`shortText numberOfLines-${numLines}`}>{children}</div>
  );
}
