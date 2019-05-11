import styled from "styled-components";

export const Authorization = styled.div``;

export const AuthorizationWrapper = styled.div`
  width: 1140px;
  height: 1065px;
  margin: 0 auto;
`;

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
  background-color: ${(props: any)  => props.checkedState ? "#799da1" : "#b9b9b9"};
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
