import styled from "styled-components";

export const SelfIntroductionAndSchoolPlan = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  #mainDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  table {
    width: 100%;
    border-spacing: 0;
    border-top: 1px solid black;
    border-right: 1px solid black;
    font-size: 15px;
    height: 60px;
  }

  td {
    border: 1px solid black;
    border-right: 0;
    border-top: 0;
    padding: 5px;
    text-align: center;
  }

  & table tbody tr:nth-child(1) td:nth-child(1) {
    width: 20%;
  }
  & table tbody tr:nth-child(1) td:nth-child(2) {
    width: 30%;
  }
  & table tbody tr:nth-child(1) td:nth-child(3) {
    width: 20%;
  }
  & table tbody tr:nth-child(1) td:nth-child(4) {
    width: 30%;
  }
`;

export const Title = styled.p`
  font-size: 20px;
`;

export const SubTitle = styled.p`
  text-align: left;
  margin: 10px 0 5px;
`;

export const SubContainer = styled.div`
  width: 595px;
  height: 842px;
  padding: 10px;
`;

export const TextAreaContainer = styled.div`
  width: 100%;
  height: 730px;
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 12px;
  box-sizing: border-box;
  border: 1px solid black;
  margin-top: 5px;
`;

export const TextHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
`;

export const TextTitle = styled.div`
  width: 100px;
  height: 100%;
  display: block;
  text-align: left;
`;

export const TextDescription = styled.p`
  width: 100%;
  font-size: 12px;
  text-align: left;
`;

export const TextCount = styled.p`
  font-size: 11px;
  text-align: left;
  margin: 0;
`;

export const TextArea = styled.pre`
  font-size: 11px;
  letter-spacing: 0.7px;
  line-height: 1.4;
  text-align: left;
  width: 100%;
  height: 648px;
  overflow-y: hidden;
  white-space: pre-line;
  margin-top: 5px;
  font-family: "NanumSquare", sans-serif;
  word-break: break-all;
  word-wrap: break-word;
`;
