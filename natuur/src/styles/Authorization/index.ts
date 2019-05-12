import styled from "styled-components";

// Authorization
export const Authorization = styled.div``;

export const AuthorizationWrapper = styled.div`
  width: 1140px;
  height: 1065px;
  margin: 0 auto;
`;

// AcceptTerms
export const AcceptTermsComponent = styled.div`
  height: 369px;
`;

export const AcceptTermsBox = styled.div`
  position: relative;
  height: 300px;
  background: #eff7f8;
  background: -webkit-linear-gradient(
    left,
    transparent 0%,
    #eff7f8 50%,
    transparent 100%
  );

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    background: -webkit-linear-gradient(
      left,
      transparent 0%,
      #5f8a90 50%,
      transparent 100%
    );
  }
  &::after {
    bottom: 0;
  }
`;

export const AcceptTermsBoxWapper = styled.div`
  position: relative;
  top: 20px;
  padding: 21px 18px 19px 22px;
  background-color: #fff;
`;

export const AcceptTermsWapperContents = styled.div`
  width: 1100px;
  height: 220px;
  font-size: 17px;
  line-height: 21px;
  letter-spacing: 0.1px;
  overflow-y: scroll;
`;

export const AcceptTermsContentsTitle = styled.span`
  font-size: 19px;
  color: #328086;
`;

export const AcceptTermsCheckBox = styled.div`
  height: 36px;
  margin-top: 25px;
  margin-right: 20px;
  float: right;
  display: flex;
  align-items: center;
`;

export const AcceptTermsCheckBoxInput = styled.input`
  display: none;
`;

export const AcceptTermsCheckBoxLabel: any = styled.label`
  width: 22px;
  height: 22px;
  background-color: ${(props: any) =>
    props.checkedState ? "#799da1" : "#b9b9b9"};
  border-radius: 50px;
  position: relative;
  margin-right: 5px;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  color: #fff;
  line-height: 22px;
  text-align: center;
`;

export const AcceptTermsCheckBoxText = styled.label`
  cursor: pointer;
`;

// InformationInputBox
export const InfomationInputBoxCover: any = styled.div`
  position: relative;
  width: 1140px;
  height: 226px;
  border: {
    top: 1px solid #5f8a90;
    bottom: 1px solid #5f8a90;
  }
  border-color: ${(props: any) => props.false && "#a7a7a7"};
`;

export const InfomationInputBoxCoverWapper: any = styled.div`
  position: relative;

  &:nth-of-type(2) {
    &::before,
    &::after {
      content: "";
      display: block;
      width: 1140px;
      height: 1px;
      position: absolute;
      background: ${(props: any) =>
        props.false
          ? "-webkit-linear-gradient(left, transparent 0%, #a7a7a7 50%, transparent 100%)"
          : "-webkit-linear-gradient(left, transparent 0%, #5f8a90 50%, transparent 100%)"};
    }
  }
`;

export const InfomationInputBoxWapperTitle = styled.div`
  position: relative;
  display: inline-block;
  width: 148px;
  height: 100%;
  font-size: 20px;
  color: ${(props: any) => (props.false ? "#939393" : "#000")};
  text-align: center;
  line-height: 75px;
  float: left;
`;

export const InfomationInputBoxWapperInputSpace = styled.div`
  position: relative;
  display: block;
  width: 990px;
  height: 75px;
`;

export const InformationInputSpaceArea: any = styled.input`
  width: 382px;
  height: 40px;
  border-radius: 5px;
  background-color: ${(props: any) => (props.false ? "#fcfcfc" : "#fafdfe")};
  border: solid 0.5px ${(props: any) => (props.false ? "#959595" : "#5f8a90")};
  font-size: 18px;
  padding-left: 16px;
  margin-top: 17px;
  color: #26484c;

  &::placeholder {
    color: ${(props: any) => (props.false ? "#e2e2e2" : "#acbec1")};
    font-weight: 300;
  }
`;

export const InformationInputSpaceCheckMark: any = styled.div`
  position: absolute;
  display: inline-block;
  font-size: 18px;
  color: #799da1;
  height: 40px;
  line-height: 40px;
  left: 525px;
  top: 20px;
`;

export const InformationInputInputSpaceWrong = styled.div`
  display: inline-block;
  position: relative;
  top: -2px;
  left: 10px;
  width: 148px;
  height: 25px;
  padding: 0 12px;
  background: #ffffff;
  border-radius: 3px;
  border: #799da1 solid 1px;
  font-size: 10px;
  line-height: 25px;
  color: #26484c;
  &::after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 5px 4px 5px 0;
    border-color: transparent #ffffff;
    display: block;
    width: 0;
    z-index: 1;
    left: -4px;
    top: 7px;
  }
  &::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 5px 4px 5px 0;
    border-color: transparent #799da1;
    width: 0;
    z-index: 0;
    left: -5px;
    top: 7px;
  }
`;

export const InformationInputInputSpaceWarning = styled.span`
  position: absolute;
  font-size: 14px;
  top: 30.5px;
  right: 23px;
  color: #939393;
`;

// AcceptButton
// export const;
// .btn{
//   width: 100%;
//   position: relative;
// }
//   // 버튼 2개
// .input-btn {
//   position: absolute;
//   top: 25px;
//   width: 150px;
//   height: 50px;
//   border-radius: 5px;
//   background-color: #f7fbfc;
//   border: 1px solid #5f8a90;
//   outline: none;
//   cursor: pointer;
//   // 오른쪽 버튼
//   @include m('next') {
//     right: 0;
//     @include m('false'){
//       background-color: #f7fbfc;
//       border-color: #a7a7a7;
//     }
//   }
//   // 버튼 내부 화살표 및 세부 설정
//   @include e('arrow') {
//     font-size: 19px;
//     color: #296169;
//     @include m('right') {
//       float: right;
//       margin-right: 13px;
//       @include m('false'){
//         color: #979797;
//       }
//     }
//   }
//   // 버튼 내부 텍스트 및 세부 설정
//   @include e('text') {
//     font-size: 18px;
//     color: #296169;
//     @include m('false'){
//       color: #979797;
//     }
//     @include m('prev') {
//       float: right;
//       margin: {
//         top: 2px;
//         right: 14px;
//       }
//     }
//     @include m('next') {
//       float: left;
//       margin: {
//         top: 2px;
//         left: 14px;
//       };
//     }
//   }
// }
