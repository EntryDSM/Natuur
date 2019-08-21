import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 1140px;
  height: calc(100vh - 260px);
  margin: 0 auto;
  padding: 40px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 60px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 180px;
  color: #78c2ca;
  font-family: fantasy;
  text-align: center;

  span {
    color: rgba(121, 194, 202, 0.5);
  }
`;

export const Message = styled.p`
  text-align: center;
  color: rgba(121, 194, 202, 0.7);
  font-size: 32px;

  span {
    color: #78c2ca;
  }
`;
