import styled from "styled-components";

export const Mainhider = styled.div`
  overflow-x: hidden;
  width: 100%;

  /* 네비게이션, 푸터 제외 */
  height: calc(100vh - 60px);
  min-height: 750px;
  position: relative;
`;

export const MainPageCover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: ${(props: any) => props.page1 && 0};
  left: ${(props: any) => props.page2 && 0};
`;

export const MainContent = styled.div`
  width: 1140px;
  font-size: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-bottom: 100px;
  border-bottom: solid 6px #6ab7b7;
`;

//   @include e('hider') {
//   }
//   @include e('cover') {
//   }
//   @include e('content') {
//   }
//   @include e('sub-text') {
//     height: 50px;
//     width: 100%;
//     font-size: 28px;
//     font-weight: normal;
//   }
//   @include e('title') {
//     height: 50px;
//     line-height: 50px;
//     font-size: 54px;
//     font-weight: normal;
//     flex: 1;
//     margin: {
//       bottom: 51px;
//     }
//   }
//   @include e('link-box') {
//     font-size: 0;
//   }
//   @include e('link') {
//     height: 50px;
//     display: inline-block;
//     width: 175px;
//     border-radius: 30px;
//     background: -webkit-linear-gradient(left, #82cdca, #5db3b6);
//     box-shadow: 1px 25px 20px -15px #9ff0eb;
//     font-size: 22px;
//     color: #fff;
//     border: none;
//     cursor: pointer;
//     line-height: 50px;
//     text-align: center;
//     margin-left: 25px;
//     text-decoration: none;
//   }
// }

// // animation

// .page1 {
//   &-enter {
//     right: 100%;
//   }

//   &-enter-to, &-leave {
//     right: 0;
//   }

//   &-leave-to {
//     right: 100%;
//   }

//   &-enter-active, &-leave-active {
//     transition: right 1s cubic-bezier(0.8, 0, 0.4, 1);
//   }
// }

// .page2 {
//   &-enter {
//     left: 100%;
//   }

//   &-enter-to, &-leave {
//     left: 0;
//   }

//   &-leave-to {
//     left: 100%;
//   }

//   &-enter-active, &-leave-active {
//     transition: left 1s cubic-bezier(0.8, 0, 0.4, 1);
//   }
// }

// .appear {
//   &-enter {
//     opacity: 0;
//   }

//   &-enter-to {
//     opacity: 1;
//   }

//   &-enter-active {
//     transition: opacity .5s;
//   }
// }
