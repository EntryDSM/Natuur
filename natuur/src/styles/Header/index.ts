import styled from "styled-components";

export const HeaderNav = styled.div`
  box-shadow: 0 2px 10px 0 rgba(99, 141, 147, 0.05);
`;

export const NavWrapper = styled.nav`
  height: 60px;
  padding: 0 auto;
`;

export const WrapperContants = styled.div`
  position: relative;
  width: 1160px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
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

export const ContentList = styled.ul`
  position: absolute;
  display: flex;
  align-items: center;
  height: 100%;
  right: 0;
`;

export const ContentListLink = styled.li`
  line-height: 60px;
  height: 100%;
  padding: 0 15px;
  margin-left: 15px;
  display: inline-block;
  margin-left: ${props => (props.isLogin ? "67px" : "none")};

  & > span {
    background-color: #65bbb7;
    padding: 7px 18px;
    border-radius: 30px;
    color: #fff;
  }
`;
