import React, { FC, memo, useCallback } from "react";

import * as S from "../../../styles/default/pagination";
import PaginationButton from "./PaginationButton";
import { prevArrow, nextArrow } from "../../../assets/common";

const Prev: FC = memo(() => (
  <>
    <S.ButtonArrow src={prevArrow} alt="이전_화살표" />
    <S.ButtonContent>이전</S.ButtonContent>
  </>
));
const Next: FC = memo(() => (
  <>
    <S.ButtonContent>다음</S.ButtonContent>
    <S.ButtonArrow src={nextArrow} alt="다음_화살표" />
  </>
));

interface OwnProps {
  prevRouterPath: string;
  nextRouterPath: string;
  AcceptPagination: "info" | "personal" | "grade" | "intro";
}

const Pagination: FC<OwnProps> = ({
  prevRouterPath,
  nextRouterPath,
  AcceptPagination
}) => {
  const connectServer = useCallback(() => {
    console.log("바꿔");
  },                                []);

  const allowedPageCheckers = useCallback(
    (isAccept: boolean, event: React.BaseSyntheticEvent) => {
      return isAccept ? event.preventDefault() : connectServer();
    },
    []
  );

  return (
    <S.PaginationWrapper>
      <PaginationButton
        connectServer={connectServer}
        routerPath={prevRouterPath}
      >
        <Prev />
      </PaginationButton>

      <S.PaginationButtonWrapper>
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(AcceptPagination === "info", event)
          }
          to="/info-summary"
          actived={AcceptPagination === "info" ? "isActive" : null}
        />
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(AcceptPagination === "personal", event)
          }
          to="/personal"
          actived={AcceptPagination === "personal" ? "isActive" : null}
        />
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(AcceptPagination === "grade", event)
          }
          to="/grade"
          actived={AcceptPagination === "grade" ? "isActive" : null}
        />
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(AcceptPagination === "intro", event)
          }
          to="/intro"
          actived={AcceptPagination === "intro" ? "isActive" : null}
        />
      </S.PaginationButtonWrapper>

      <PaginationButton
        connectServer={connectServer}
        routerPath={nextRouterPath}
      >
        <Next />
      </PaginationButton>
    </S.PaginationWrapper>
  );
};

export default Pagination;
