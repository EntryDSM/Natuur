import React, { FC } from "react";

import { ContentsText, ContentsImfactText } from "../../../../styles/Main";

interface Props {
  fontSize?: string;
  textMargin?: string;
  imfactSize?: string;
  imfactColor?: string;
  imfactMargin?: string;
  isSubTitle?: boolean;
  noticeText1?: string;
  noticeText2?: string;
  noticeText3?: string;
  noticeText4?: string;
  noticeTextLast?: string;
}

const MainContentsTitle: FC<Props> = ({
  fontSize,
  textMargin,
  imfactColor,
  imfactMargin,
  imfactSize,
  isSubTitle,
  noticeText1,
  noticeText2,
  noticeText3,
  noticeText4,
  noticeTextLast
}) => (
  <div>
    <ContentsText fontSize={fontSize} textMargin={textMargin}>
      {noticeText1}

      {isSubTitle ? (
        <>
          <ContentsImfactText imfactColor={imfactColor} imfactSize={imfactSize}>
            {noticeText2}
          </ContentsImfactText>
          {noticeText3}
          <ContentsImfactText imfactColor={imfactColor} imfactSize={imfactSize}>
            {noticeText4}
          </ContentsImfactText>
        </>
      ) : (
        <ContentsImfactText
          imfactSize={imfactSize}
          imfactColor={imfactColor}
          imfactMargin={imfactMargin}
        >
          {noticeText2}
        </ContentsImfactText>
      )}

      {noticeTextLast}
    </ContentsText>
  </div>
);

export default MainContentsTitle;
