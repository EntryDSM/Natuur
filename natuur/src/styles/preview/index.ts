import styled from "styled-components";
import { Link } from "react-router-dom";

export const PreviewWrapper = styled.div`
  width: 1140px;
  height: 1370px;
  margin: 0 auto;
`;

export const PdfWrapper = styled.div<{ isPrint?: boolean }>`
  width: 100%;
  height: 995px;
  position: relative;
  background-color: #535759;

  ${props =>
    !props.isPrint &&
    `&::before {
    content: "미리보기 단계에서는 (내신 성적 점수와 수험번호)가 표출되지 않습니다. 이 점에 유의하여 주시기 바랍니다. (단, 최종 제출 이후에는 내신 성적 점수가 정상적으로 표출됩니다.)";
    position: absolute;
    top: -40px;
    color: #ff2525;
    font-weight: bold;
  }`}
  ${props =>
    props.isPrint &&
    `&::before {
    content: "수험번호는 비워주시기 바랍니다.";
    position: absolute;
    top: -40px;
    color: #ff2525;
    font-weight: bold;
  }`}
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
  display: flex;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 15px;
    background: #f1f1f1;
    overflow: hidden;
  }

  &::-webkit-scrollbar-thumb {
    width: 15px;
    background: #c1c1c1;
  }
`;

export const PdfTarget = styled.div`
  @media print {
    zoom: 1.8;
    overflow-y: visible;
  }

  & > div {
    @media print {
      box-shadow: none;
    }
  }
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

export const PaginationWrapper = styled.div`
  width: 100%;
  height: 54px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const ButtonContent = styled.span`
  font-size: 20px;
  line-height: 1.05;
  color: rgba(121, 194, 202, 0.8);
`;

export const ButtonArrow = styled.img`
  width: 8px;
  height: 16px;
  opacity: 0.8;
`;

export const Button = styled(Link)`
  display: block;
  width: 168px;
  height: 54px;
  border-radius: 5px;
  border: solid 2px rgba(121, 194, 202, 0.5);
  background-color: rgba(248, 252, 253, 0.3);
  display: flex;
  justify-content: space-between;
  padding: 16px 22px 19px 24px;
  box-sizing: border-box;
`;

export const SubmitButton = styled.div<{ isDisable?: boolean }>`
  position: relative;
  width: 152px;
  height: 54px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: ${props => (props.isDisable ? "#979797" : "#79c2ca")};
  background-color: ${props => (props.isDisable ? "#f7fbfc" : " #f8fcfd")};
  border: 2px solid
    ${props => (props.isDisable ? "#a7a7a7" : "rgba(121, 194, 202, 0.5)")};
  cursor: ${props => !props.isDisable && "pointer"};

  ${props =>
    props.isDisable &&
    `
      &:hover {
        &::before {
          content: "원서를 모두 채워주시기 바랍니다.";
          position: absolute;
          left: -300px;
          padding: 16px;
          border: 1px solid;
          border-radius: 6px;
          background: rgba(121, 194, 202, 0.2);
          color: #78c2ca;
        }
      }
    `};
`;
