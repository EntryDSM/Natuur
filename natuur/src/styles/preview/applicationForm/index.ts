import styled from "styled-components";

export const ApplicationForm = styled.div`
  padding-top: 30px;
  box-sizing: border-box;
  position: relative;

  * {
    font-size: 10px;
  }

  table {
    width: 100%;
  }

  input {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 1px;
  }

  td {
    height: 20px;
    padding: 0;
    border: 1px solid #000;
    border-bottom: 0;
    text-align: center;
  }

  div {
    box-sizing: border-box;
  }

  #MainDiv {
    display: flex;
    justify-content: center;
  }

  & > div #SubDiv table:nth-child(1) tbody tr:nth-child(1) td:nth-child(1) {
    width: 12.2%;
  }
  & > div #SubDiv table:nth-child(1) tbody tr:nth-child(1) td:nth-child(2) {
    width: 19.7%;
  }
  & > div #SubDiv table:nth-child(1) tbody tr:nth-child(1) td:nth-child(3) {
    width: 15.2%;
  }
  & > div #SubDiv table:nth-child(1) tbody tr:nth-child(1) td:nth-child(4) {
    width: 13%;
  }
  & > div #SubDiv table:nth-child(1) tbody tr:nth-child(1) td:nth-child(5) {
    width: 7%;
  }
  & > div #SubDiv table:nth-child(1) tbody tr:nth-child(1) td:nth-child(6) {
    width: 7%;
  }
  & > div #SubDiv table:nth-child(1) tbody tr:nth-child(1) td:nth-child(7) {
    width: 12%;
  }
  & > div #SubDiv table:nth-child(1) tbody tr:nth-child(1) td:nth-child(8) {
    width: 14%;
  }

  & > div #SubDiv table:nth-child(2) tbody tr:nth-child(1) td:nth-child(1) {
    width: 12.2%;
  }
  & > div #SubDiv table:nth-child(2) tbody tr:nth-child(1) td:nth-child(2) {
    width: 7.9%;
  }
  & > div #SubDiv table:nth-child(2) tbody tr:nth-child(1) td:nth-child(3) {
    width: 11.9%;
  }
  & > div #SubDiv table:nth-child(2) tbody tr:nth-child(1) td:nth-child(4) {
    width: 15.2%;
  }
  & > div #SubDiv table:nth-child(2) tbody tr:nth-child(1) td:nth-child(5) {
    width: 26.9%;
  }
  & > div #SubDiv table:nth-child(2) tbody tr:nth-child(1) td:nth-child(6) {
    width: 8%;
  }
  & > div #SubDiv table:nth-child(2) tbody tr:nth-child(1) td:nth-child(7) {
    width: 18%;
  }

  & > div #SubDiv table:nth-child(3) tbody tr:nth-child(1) td:nth-child(1) {
    width: 12.2%;
  }
  & > div #SubDiv table:nth-child(3) tbody tr:nth-child(1) td:nth-child(2) {
    width: 8%;
  }
  & > div #SubDiv table:nth-child(3) tbody tr:nth-child(1) td:nth-child(2) p {
    font-size: 10px;
  }
  & > div #SubDiv table:nth-child(3) tbody tr:nth-child(1) td:nth-child(3) {
    width: 30%;
  }
  & > div #SubDiv table:nth-child(3) tbody tr:nth-child(1) td:nth-child(4) {
    width: 9.5%;
  }
  & > div #SubDiv table:nth-child(3) tbody tr:nth-child(1) td:nth-child(5) {
    width: 39%;
  }

  & > div #SubDiv table:nth-child(4) tbody tr:nth-child(1) td:nth-child(1) {
    width: 12.2%;
  }
  & > div #SubDiv table:nth-child(4) tbody tr:nth-child(1) td:nth-child(2) {
    width: 28%;
  }
  & > div #SubDiv table:nth-child(4) tbody tr:nth-child(1) td:nth-child(3) {
    width: 10.4%;
  }
  & > div #SubDiv table:nth-child(4) tbody tr:nth-child(1) td:nth-child(4) {
    width: 25%;
  }
  & > div #SubDiv table:nth-child(4) tbody tr:nth-child(1) td:nth-child(5) {
    width: 8.3%;
  }
  & > div #SubDiv table:nth-child(4) tbody tr:nth-child(1) td:nth-child(6) {
    width: 16%;
  }

  & > div #SubDiv table:nth-child(4) tbody tr:nth-child(1) td:nth-child(2) p {
    font-size: 11px;
  }
  & > div #SubDiv table:nth-child(4) tbody tr:nth-child(3) td:nth-child(1) p {
    font-size: 11px;
  }
  & > div #SubDiv table:nth-child(4) tbody tr:nth-child(5) td:nth-child(1) p {
    font-size: 11px;
  }

  & > div #SubDiv table:nth-child(5) tbody tr:nth-child(1) td:nth-child(1) {
    width: 12.2%;
  }
  & > div #SubDiv table:nth-child(5) tbody tr:nth-child(1) td:nth-child(2) {
    width: 51%;
  }
  & > div #SubDiv table:nth-child(5) tbody tr:nth-child(1) td:nth-child(3) {
    width: 12%;
  }
  & > div #SubDiv table:nth-child(5) tbody tr:nth-child(1) td:nth-child(4) {
    width: 12%;
  }
  & > div #SubDiv table:nth-child(5) tbody tr:nth-child(1) td:nth-child(5) {
    width: 12%;
  }

  & > div #SubDiv table:nth-child(5) tbody tr:nth-child(3) td {
    font-size: 10px;
  }

  & > div #SubDiv table:nth-child(6) tbody tr {
    height: 130px;
  }
  & > div #SubDiv table:nth-child(6) tbody tr:nth-child(1) td:nth-child(1) {
    width: 18%;

    & > div {
      width: 96px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
  & > div #SubDiv table:nth-child(6) tbody tr:nth-child(1) td:nth-child(2) {
    width: 64%;
  }
  & > div #SubDiv table:nth-child(6) tbody tr:nth-child(1) td:nth-child(3) {
    width: 18%;
  }
  & > div #SubDiv table:nth-child(6) tbody {
    height: 120px;
    font-size: 15px;
  }
`;

interface LeftAlignTextProps {
  indent?: number;
  ml?: number;
  isMc?: boolean;
  isBold?: boolean;
}
export const LeftAlignText = styled.p<LeftAlignTextProps>`
  text-align: left;
  text-indent: ${props => `${props.indent}px`};
  margin-left: ${props => `${props.ml}px`};
  ${props => props.isMc && "margin: 0 auto"};
  display: flex;
  align-items: center;
  font-weight: ${props => props.isBold && "bold"};
`;

export const FooterTitle = styled(LeftAlignText)`
  font-size: 16px;
`;

export const RightAlignText = styled.p`
  text-align: right;
`;

export const CenterAlignText = styled.p`
  text-align: center;
`;

export const marginTopBottomP = styled.p<{ mtb: number }>`
  margin: ${props => `${props.mtb}px`} 0;
`;

export const SchoolText = styled(LeftAlignText)`
  margin-left: 4px;
`;

export const SmallFontSizeText = styled.p`
  font-size: 10px;
  text-align: left;
  line-height: 1.5;
`;

export const Title = styled.h2`
  font-size: 17px;
  margin-bottom: 10px;
  text-align: center;
`;

export const SubContainer = styled.div`
  width: 595px;
  height: 842px;
  padding: 30px;
  padding-top: 0;
`;

export const ApplicationConsent = styled.div`
  border: 1px black solid;
  border-radius: 5px;
  padding: 4px;
`;

export const SealContainer = styled.div`
  border: 1px black solid;
`;

export const SubTitle = styled.p`
  margin: 8px 0;
  text-align: center;
`;

export const Footer = styled.div`
  margin-top: 10px;
`;

export const Signature = styled.div<{ widthSize?: number; pb?: number }>`
  display: flex;
  justify-content: space-between;
  width: ${props => (props.widthSize ? `${props.widthSize}px` : "235px")};
  padding-bottom: ${props => `${props.pb}px`};
  margin: 0 auto;
`;

export const SignatureItem = styled(Signature)<{ widthSize?: number }>`
  width: ${props => (props.widthSize ? `${props.widthSize}px` : "110px")};
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

export const CheckBox = styled.span<{ isAccept?: boolean; ml?: number }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background: ${props => props.isAccept && "#000000"};
  margin-left: ${props => (props.ml ? `${props.ml}px` : "6px")};
  margin-right: 6px;
`;
