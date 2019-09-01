import styled from "styled-components";

export const RecommendationLetter = styled.div`
  position: relative;

  table {
    border: 1px solid black;
    margin: 20px;
    width: 555px;
    height: 150px;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;
  }

  td {
    border: 1px solid black;
    border-bottom: 0;
    text-align: center;
    padding: 0;
    height: 2px;
  }

  #mainDiv {
    display: flex;
    justify-content: center;
  }

  #mainDiv #subDiv #contentDiv table tbody tr td:first-child {
    width: 30%;
  }
  #mainDiv #subDiv #contentDiv table tbody tr td:nth-child(2) {
    width: 35%;
  }
  #mainDiv #subDiv #contentDiv table tbody tr td:nth-child(3) {
    width: 35%;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: 550;
  margin: 20px;
`;

export const subContiner = styled.div`
  width: 595px;
  height: 842px;
  padding: 30px;
`;

export const ReceivingNumber = styled.p`
  text-align: right;
  font-size: 20px;
  margin: 15px 0;
`;

export const BodyContent = styled.div`
  width: 593px;
  height: 715px;
  border: 1px solid black;
`;

export const BoldText = styled.p<{ isTitle?: boolean }>`
  font-weight: 550;
  font-size: ${props => (props.isTitle ? "20px" : "18px")};
`;

export const Date = styled(BoldText)`
  margin-top: 41px;
  text-align: center;
  font-size: 20px;
`;

export const TeacherSignature = styled(BoldText)`
  margin-top: 30px;
  text-align: right;
  margin-right: 30px;
  font-size: 20px;
`;

export const MiddleSchoolPrincipal = styled(BoldText)`
  text-align: center;
  font-size: 22px;
  margin-top: 82px;
`;

export const TdCenter = styled.td`
  & > div {
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      width: 15px;
      height: 15px;
      border: 2px solid black;
      border-radius: 10px;
    }
  }
`;

export const Information = styled.p`
  text-align: right;
  margin-top: 30px;
  margin-right: 50px;
  font-weight: 550;
  line-height: 1.7;
  font-size: 17px;
`;

export const ContentText = styled.p`
  font-size: 16px;
  line-height: 1.7;
  margin-top: 41px;
  letter-spacing: 2.2px;
  text-indent: 10px;
  margin-left: 30px;
`;

export const PrincipalStamp = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  border: 1px black solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  text-align: center;
  bottom: 150px;
  right: 100px;

  p {
    margin: 2px 0;
  }
`;

export const SchoolName = styled.p`
  text-align: left;
  font-size: 25px;
  font-weight: 600;
  margin: 60px 0 0 50px;
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
