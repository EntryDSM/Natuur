import styled from "styled-components";

export const NonSmokingPledge = styled.div`
  position: relative;

  td {
    border: 1px black solid;
    border-bottom: 0;
    text-align: center;
  }

  #mainDiv {
    display: flex;
    justify-content: center;
  }

  #mainDiv #subDiv table tbody tr:nth-child(1) td:nth-child(1) {
    width: 8%;
  }
  #mainDiv #subDiv table tbody tr:nth-child(1) td:nth-child(2) {
    width: 20%;
  }
  #mainDiv #subDiv table tbody tr:nth-child(1) td:nth-child(3) {
    width: 26%;
  }
  #mainDiv #subDiv table tbody tr:nth-child(1) td:nth-child(4) {
    width: 20%;
  }
  #mainDiv #subDiv table tbody tr:nth-child(1) td:nth-child(5) {
    width: 26%;
  }

  #mainDiv #subDiv #contentDiv table tbody tr:nth-child(1) td:nth-child(1) {
    width: 40%;
  }
  #mainDiv #subDiv #contentDiv table tbody tr:nth-child(1) td:nth-child(2) {
    width: 30%;
  }
  #mainDiv #subDiv #contentDiv table tbody tr:nth-child(1) td:nth-child(3) {
    width: 30%;
  }
`;

export const SubContainer = styled.div`
  width: 595px;
  height: 842px;
  padding: 30px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 550;
  text-align: center;
  height: 42px;
  margin-bottom: 6px;
`;

export const ContentWrapper = styled.div`
  height: 690px;
  border: 1px black solid;
  padding: 16px;
  box-sizing: border-box;
`;

export const InformationTable = styled.table`
  width: 100%;
  height: 12%;
  border: 1px black solid;
  border-bottom: 0;
  border-collapse: collapse;
`;

export const VowText = styled.p<{ isFirst?: boolean }>`
  font-size: 18px;
  margin-top: ${props => (props.isFirst ? "30px" : "10px")};
`;

export const VowAgreeText = styled.p<{ isFirst?: boolean }>`
  font-size: 17px;
  margin-top: ${props => (props.isFirst ? "30px" : "15px")};
  text-indent: 20px;
`;

export const AgreeTableTitle = styled.p`
  font-family: auto;
  font-size: 15px;
  margin-bottom: 12px;
  margin-top: 40px;
`;

export const AgreeTable = styled.table`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid black;
  border-collapse: collapse;
`;

export const AgreeCheckBox = styled.div`
  width: 100%;
  height: 34px;
  border: 1px black solid;
  display: flex;

  > div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
  }

  > div:nth-child(1) {
    border-right: 1px solid black;
  }
`;

export const AgreeCheckBoxTitle = styled.div`
  display: flex;
  margin-bottom: 12px;
  margin-top: 30px;

  p {
    margin-left: 6px;
    font-family: auto;
    font-size: 15px;
  }
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

export const Date = styled.p`
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
`;

export const VolunteerSignature = styled.div`
  height: 50px;
  margin-right: 20px;
  margin-top: 30px;
  font-size: 17px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

interface BlankProps {
  widthSize: number;
  isCenter?: boolean;
  isUnderLine?: boolean;
}
export const Blank = styled.span<BlankProps>`
  display: inline-block;
  width: ${props => `${props.widthSize}px`};
  text-align: ${props => (props.isCenter ? "center" : "right")};
  border-bottom: ${props => props.isUnderLine && "1px solid black"};
`;
