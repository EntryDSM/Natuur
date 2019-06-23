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

// Titles
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

// Progress
export const ProgressCover = styled.div`
  width: 100%;
  margin: 55px 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProgressIndex = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  margin-bottom: 28px;
  justify-content: space-between;
`;

export const IndexCover = styled.div`
  width: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const IndexTitle = styled.p`
  font-size: 18px;
  line-height: 1.83;
  text-align: center;
  color: #005c4f;
`;

export const IndexIcon = styled.img`
  width: 28px;
  height: 20px;
`;

export const ProgressBarCover = styled.div`
  width: 880px;
  height: 10px;
  background-color: #498e8b;
  overflow: hidden;
  position: relative;
`;

export const ProgressBarAcctive = styled.div<{ activeWidth: string }>`
  width: ${props => props.activeWidth};
  height: 100%;
  background-color: #65bbb7;
  position: absolute;
`;

// TimeStemp
export const TimeStempContent = styled.p`
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 1.1px;
  text-align: center;
  color: #000000;
  margin-bottom: 43px;
`;

// button
export const ButtonCover = styled.div`
  width: 300px;
  height: 52px;
  border-radius: 30px;
  box-shadow: 0 3px 25px 0 rgba(101, 187, 183, 0.5);
  background-color: #65bbb7;
  overflow: hidden;
  cursor: pointer;
`;

export const ButtonContent = styled.p`
  font-size: 22px;
  line-height: 41px;
  text-align: center;
  color: #ffffff;
`;
