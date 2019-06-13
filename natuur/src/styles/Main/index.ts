import styled from "styled-components";

export const Mainhider = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  min-height: 780px;
`;

export const MainPageCover = styled.div`
  width: 1140px;
  margin: 80px auto 0;
  display: flex;
  flex-direction: column;
`;

export const MainHeadLineCover = styled.div<{ marginBottom: string }>`
  width: 100%;
  margin-bottom: ${props => props.marginBottom};
`;

export const MainHeadLineCoverSubText = styled.h4`
  font-size: 28px;
  color: #000000;
  margin-bottom: 16px;
`;

export const MainHeadLineCoverTitle = styled.h1`
  font-size: 54px;
  letter-spacing: -2.7px;
  color: #000000;
`;

export const MainContents = styled.div`
  width: 1147px;
  height: 561px;
  background-color: #ffffff;
  border-top: 8px solid #65bbb7;
  border-bottom: 8px solid #65bbb7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentsSorter = styled.div`
  width: 924px;
  height: 383px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ContentsTextProps {
  fontSize?: string;
  textMargin?: string;
  imfactSize?: string;
  imfactColor?: string;
  imfactMargin?: string;
}

export const ContentsText = styled.p<ContentsTextProps>`
  font-weight: bold;
  font-size: ${props => `${props.fontSize}`};
  color: #000000;
  margin-bottom: ${props => `${props.textMargin}`};
`;

export const ContentsImfactText = styled.span<ContentsTextProps>`
  font-weight: bold;
  font-size: ${props => `${props.imfactSize}`};
  color: ${props => props.imfactColor};
  margin: 0 ${props => `${props.imfactMargin}`};
`;
