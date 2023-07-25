interface HighlightWordsProps {
  text: string;
  wordsToHighlight: string[];
  highlightColor?: string;
  color?: string;
}

export function HighlightWords({
  text,
  wordsToHighlight,
  highlightColor = "var(--blueTransparent)",
  color = "var(--creme)",
}: HighlightWordsProps) {
  const wrapWordsWithColor = (text: string, words: string[], color: string) => {
    const regex = new RegExp(`\\b(${words.join("|")})\\b`, "gi"); // Use word boundaries (\b) to match only whole words
    return text.split(regex).map((word, index) => {
      if (wordsToHighlight.includes(word)) {
        // Compare without converting to lowercase
        return (
          <span
            key={index}
            style={{
              fontWeight: "var(--semiBold)",
              backgroundColor: highlightColor,
              color: color,
              borderRadius: "3px",
              padding: "0 1px",
              margin: "0 2px",
            }}
          >
            {word}
          </span>
        );
      }
      return word;
    });
  };

  return <>{wrapWordsWithColor(text, wordsToHighlight, color)}</>;
}
