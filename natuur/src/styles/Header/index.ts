import styled from "styled-components";

export const HeaderNav = styled.div`
  box-shadow: 0 2px 10px 0 rgba(99, 141, 147, 0.05);
`;

export const NavWrapper = styled.nav`
  height: 60px;
  margin: 0 auto;
`;

export const WrapperContants = styled.div`
  position: relative;
  width: 1140px;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

export const ContentsLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > a {
    height: 30px;

    & > img {
      height: 30px;
    }
  }
`;

export const ContentsUser = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
`;

export const UserName = styled.p`
  font-size: 14px;
  color: #000000;
  margin-right: 3px;
`;

export const SlideBar = styled.img`
  width: 10px;
  height: 6px;
  object-fit: contain;
`;
