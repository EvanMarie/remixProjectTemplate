import React from "react";
import Badge from "./badge";
import ShortText from "~/stylisticComponents/shortText";
import Image from "./image";
import { VerticalStack } from "./verticalStack";
import FlexContainer from "./flexContainer";

interface CardComponentProps {
  children?: React.ReactNode;
  backgroundColor?: string;
  color?: string;
  width?: string | number;
  badgeText?: string | undefined;
  headerText?: string;
  headerAlignment?: string;
  headerColor?: string;
  headerSize?: string;
  headerMargin?: string;
  subHeaderText?: string | string[];
  subHeaderAlignment?: "left" | "center" | "right";
  subHeaderColor?: string;
  subHeaderSize?: string;
  numLines?: number;
  bodyText?: string;
  bodyTextAlignment?: "left" | "center" | "right";
  footer?: string | undefined;
  imageLink?: string | undefined;
  imageAlt?: string | undefined;
  imageSize?: string;
  imageMaxWidth?: string;
  imageShadow?: string;
}

export default function Card({
  children,
  backgroundColor = "var(--mainText)",
  color = "var(--mainBackground)",
  width = "100%",
  numLines,
  badgeText,
  headerText = "",
  headerAlignment = "center",
  headerMargin = "5px",
  headerColor = "var(--mainBackground)",
  headerSize = "var(--xlargeText)",
  subHeaderText,
  subHeaderAlignment = "center",
  subHeaderColor = "var(--mainBackground)",
  subHeaderSize = "var(--largeText)",
  bodyText = "",
  bodyTextAlignment = "left",
  footer,
  imageLink,
  imageAlt = "Card Image",
  imageSize = "100%",
  imageMaxWidth = "300px",
  imageShadow = "var(--mediumShdowDark",
}: CardComponentProps) {
  return (
    <div
      className="cardContainer"
      style={{ backgroundColor: backgroundColor, color: color, width: width }}
    >
      {badgeText && <Badge label={badgeText} />}
      <div
        className="cardHeader"
        style={{
          alignItems: headerAlignment,
          color: headerColor,
          margin: headerMargin,
          fontSize: headerSize,
        }}
      >
        {headerText}
      </div>

      <div
        className="cardSubHeader"
        style={{
          textAlign: subHeaderAlignment,
          color: subHeaderColor,
          fontSize: subHeaderSize,
        }}
      >
        <VerticalStack spacing="0px">
          {typeof subHeaderText === "object" ? (
            subHeaderText.map((text, index) => (
              <p
                className="subHeaderLine"
                key={index}
                style={{ lineHeight: subHeaderSize }}
              >
                {text}
              </p>
            ))
          ) : (
            <p className="subHeaderLine">{subHeaderText}</p>
          )}
        </VerticalStack>
      </div>

      <div className="cardBody" style={{ alignItems: bodyTextAlignment }}>
        <div>
          {numLines ? (
            <ShortText numLines={numLines}>{bodyText}</ShortText>
          ) : (
            <p>{bodyText}</p>
          )}
        </div>
      </div>
      {imageLink && (
        <FlexContainer>
          <div
            className="cardImage"
            style={{
              maxWidth: imageMaxWidth,
              boxShadow: imageShadow,
            }}
          >
            {" "}
            <Image src={imageLink} alt={imageAlt} />
          </div>
        </FlexContainer>
      )}
      {children}

      {footer && <div className="cardFooter">{footer}</div>}
    </div>
  );
}
