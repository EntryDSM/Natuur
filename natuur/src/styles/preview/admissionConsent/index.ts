import styled from "styled-components";

export const AdmissionConsent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-size: 14px;

  & #mainDiv {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  td,
  th {
    border: 1px solid black;
    border-right: 0;
    border-bottom: 0;
    margin: 0;
    height: 10%;
  }

  table {
    border-spacing: 0px;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    width: 100%;
    height: 15%;
    text-align: center;
  }

  tr {
    margin: 0;
  }

  & table tbody tr:nth-child(1) td:nth-child(1) {
    width: 4%;
  }
  & table tbody tr:nth-child(1) td:nth-child(2) {
    width: 9%;
  }
  & table tbody tr:nth-child(1) td:nth-child(3) {
    width: 10%;
  }
  & table tbody tr:nth-child(1) td:nth-child(4) {
    width: 20%;
  }
  & table tbody tr:nth-child(1) td:nth-child(5) {
    width: 8%;
  }
  & table tbody tr:nth-child(1) td:nth-child(6) {
    width: 14%;
  }
  & table tbody tr:nth-child(1) td:nth-child(7) {
    width: 12%;
  }
  & table tbody tr:nth-child(1) td:nth-child(8) {
    width: 25%;
  }

  & table tbody tr:nth-child(3) td:nth-child(2) {
    width: 10%;
  }
  & table tbody tr:nth-child(3) td:nth-child(3) {
    width: 20%;
  }
  & table tbody tr:nth-child(3) td:nth-child(4) {
    width: 10%;
  }
  & table tbody tr:nth-child(3) td:nth-child(5) {
    width: 10%;
  }
  & table tbody tr:nth-child(4) td:nth-child(4) {
    width: 20%;
  }

  & #AgreeInformation tbody tr:nth-child(1) {
    height: 50px;
    line-height: 1.8;
  }
  & #AgreeInformation tbody tr td:nth-child(1) {
    width: 40%;
    padding: 10px;
  }
  & #AgreeInformation tbody tr td:nth-child(2) {
    width: 30%;
    padding: 10px;
  }
  & #AgreeInformation tbody tr td:nth-child(3) {
    width: 30%;
    padding: 10px;
  }
`;

export const SubContainer = styled.div`
  width: 595px;
  height: 842px;
  padding: 30px;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 35px;
`;

export const AdmissConsentHeader = styled.div`
  height: 22px;
  display: flex;
  justify-content: space-between;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  margin: 0;
`;

export const ExamCodeWrapper = styled.div`
  width: 166px;
  height: 100%;
  border: 1px solid #000;
  border-bottom: 0;
  display: flex;
  line-height: 22px;

  & > div {
    border-right: 1px solid #000;
    width: 75px;
    height: 100%;
    text-align: center;
  }

  & > p {
    width: 106px;
    height: 100%;
    text-align: center;
  }
`;

interface BlankProps {
  widthSize: number;
  isCenter?: boolean;
  isInline?: boolean;
  isUnderLine?: boolean;
}
export const Blank = styled.span<BlankProps>`
  width: ${props => `${props.widthSize}px`};
  text-align: ${props => (props.isCenter ? "center" : "right")};
  display: ${props => (props.isInline ? "inline" : "inline-block")};
  border-bottom: ${props => props.isUnderLine && "1px solid black"};
`;

export const Contentbody = styled.div`
  height: 632px;
  border: 1px solid black;
  padding: 15px;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const AdmissionPledge = styled.p`
  text-indent: 40px;
  text-align: left;
  margin-top: 20px;
  line-height: 1.8;
`;

export const AgreeTableTitle = styled.p`
  font-family: auto;
  text-align: left;
  font-size: 15px;
  margin-bottom: 12px;
  margin-top: 40px;
`;

export const AgreeCaution = styled.div`
  display: flex;
  margin: 12px 0 22px;
  text-align: left;

  p {
    margin-left: 6px;
    font-family: auto;
    font-size: 15px;
  }
`;

export const InformationCollectionWrapper = styled.div`
  & > table {
    height: 38px;
  }
`;

export const Date = styled.div`
  width: 240px;
  text-align: center;
  font-size: 17px;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;

  & > p {
    width: 80px;
  }
`;

export const Sign = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > p {
    text-align: right;
    font-size: 17px;
  }
`;

export const SchoolText = styled.p`
  font-size: 20px;
  margin-top: 36px;
  font-weight: bold;
  text-align: left;
`;

export const CheckBox = styled.span<{ isAccept?: boolean; ml?: number }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background: ${props => props.isAccept && "#000000"};
  margin-left: ${props => props.ml && `${props.ml}px`};
  margin-right: 8px;
`;
