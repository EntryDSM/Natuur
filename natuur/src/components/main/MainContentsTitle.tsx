import React, { FC } from "react";

import { ContentsText, ContentsImfactText } from "../../styles/Main";

interface Props {
  fontSize?: string;
  textMargin?: string;
  imfactSize?: string;
  imfactColor?: string;
  imfactMargin?: string;
  text: string[];
  isSubTitle?: boolean;
}

const MainContentsTitle: FC<Props> = ({
  fontSize,
  textMargin,
  imfactColor,
  imfactMargin,
  imfactSize,
  text,
  isSubTitle
}) => (
  <div>
    <ContentsText fontSize={fontSize} textMargin={textMargin}>
      {text[0]}

      {isSubTitle ? (
        <>
          <ContentsImfactText imfactColor={imfactColor} imfactSize={imfactSize}>
            {text[1]}
          </ContentsImfactText>
          {text[2]}
          <ContentsImfactText imfactColor={imfactColor} imfactSize={imfactSize}>
            {text[3]}
          </ContentsImfactText>
        </>
      ) : (
        <ContentsImfactText
          imfactSize={imfactSize}
          imfactColor={imfactColor}
          imfactMargin={imfactMargin}
        >
          {text[1]}
        </ContentsImfactText>
      )}

      {text[text.length - 1]}
    </ContentsText>
  </div>
);

export default MainContentsTitle;
