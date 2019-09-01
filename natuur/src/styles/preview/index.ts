import styled from "styled-components";

export const PreviewWrapper = styled.div`
  width: 1140px;
  height: 1370px;
  margin: 0 auto;
`;

export const PdfWrapper = styled.div`
  width: 100%;
  height: 995px;
  background-color: #535759;
`;

export const PdfHeader = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  background-color: #353b3e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  box-sizing: border-box;
  font-size: 16px;
  color: #ffffff;
`;

export const HeaderContentsBox = styled.div<{ isTitle?: boolean }>`
  width: 224px;
  display: flex;
  justify-content: ${props => (props.isTitle ? "flex-start" : "flex-end")};
`;

export const HeaderIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 18px;
  cursor: pointer;
`;

export const PdfContents = styled.div`
  width: 100%;
  height: 945px;
  overflow-y: auto;
`;

export const PdfContent = styled.div<{ isLast?: boolean }>`
  width: 640px;
  height: 905px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  margin: 20px auto 0;
  ${props => props.isLast && "margin-bottom: 20px"};
`;

export const WaterMark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  z-index: 1;
  text-align: center;
  opacity: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrongExplanation = styled.div<{ isLast?: boolean }>`
  font-size: 13px;
  color: #f00;
  font-weight: 900;
`;

export const Contents = styled.div`
  position: absolute;
  margin: 0 auto;
  top: calc(50% - 75px);
  left: 145px;
  font-size: 20px;
  font-weight: 900;
`;

export const ContentsImg = styled.img`
  width: 300px;
  margin: 0 auto;
  display: block;
  margin-bottom: 20px;
`;
