import styled from "styled-components";

export const IntroWrapper = styled.div`
  width: 1142px;
  height: 1533px;
  margin: 0 auto;
`;

export const WrapperCover = styled.div<{ isLast: boolean }>`
  width: 100%;
  margin-bottom: ${props => (props.isLast ? "0" : "50px")};
  color: #000000;

  & > p {
    font-size: 18px;
    margin-bottom: 12px;
    line-height: 1.33;
    text-indent: 12px;
  }

  & > div {
    width: 1140px;
    height: 400px;
    border-radius: 5px;
    border: solid 1px #5f8a90;
    overflow: hidden;
  }
`;

export const WrapperTitle = styled.span`
  display: block;
  width: 127px;
  font-size: 24px;
  letter-spacing: -1.2px;
  text-align: left;
  padding-bottom: 8px;
  border-bottom: 3px solid rgba(122, 184, 191, 0.6);
  margin-bottom: 12px;
`;

export const AreaCover = styled.div`
  width: 100%;
  height: 348px;
  margin-top: 16px;
  box-sizing: border-box;
  padding: 0 12px 0 20px;
  overflow: hidden;
`;

export const TextArea = styled.textarea`
  width: 1103px;
  height: -webkit-fill-available;
  font-size: 16px;
  line-height: 1.75;
  letter-spacing: -0.08px;
  resize: none;
  overflow-y: scroll;
  font-family: "NanumSquare", sans-serif;
  border: none;

  &:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    width: 10px;
    height: 200px;
    border-radius: 5px;
    background: #aec4c7;
  }
`;

export const ShowTextLengthPlace = styled.div<{ isAccept?: boolean }>`
  width: 1140px;
  height: 36px;
  background-color: ${props => (props.isAccept ? "#cedbdd" : "#ffffff")};
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

export const TextLength = styled.p`
  font-size: 18px;
  margin-left: auto;
  color: #000000;
`;
