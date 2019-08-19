import React, { FC } from "react";

import * as S from "../../../styles/default/pagination";
import PaginationButton from "./PaginationButton";
import { prevArrow, nextArrow } from "../../../assets/common";

const Prev: FC = () => (
  <>
    <S.ButtonArrow src={prevArrow} alt="이전_화살표" />
    <S.ButtonContent>이전</S.ButtonContent>
  </>
);
const Next: FC = () => (
  <>
    <S.ButtonContent>다음</S.ButtonContent>
    <S.ButtonArrow src={nextArrow} alt="다음_화살표" />
  </>
);

const allowedPageCheckers = (
  isAccept: boolean,
  connectServer: () => void,
  event: React.BaseSyntheticEvent
) => {
  return isAccept ? event.preventDefault() : connectServer();
};

interface OwnProps {
  connectServer: () => void;
  prevRouterPath: string;
  nextRouterPath: string;
  AcceptPagination: "info" | "personal" | "grade" | "intro";
}

const Pagination: FC<OwnProps> = ({
  connectServer,
  prevRouterPath,
  nextRouterPath,
  AcceptPagination
}) => {
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
            allowedPageCheckers(
              AcceptPagination === "info",
              connectServer,
              event
            )
          }
          to="/info-summary"
          actived={AcceptPagination === "info" ? "isActive" : null}
        />
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(
              AcceptPagination === "personal",
              connectServer,
              event
            )
          }
          to="/personal"
          actived={AcceptPagination === "personal" ? "isActive" : null}
        />
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(
              AcceptPagination === "grade",
              connectServer,
              event
            )
          }
          to="/grade"
          actived={AcceptPagination === "grade" ? "isActive" : null}
        />
        <S.PaginationButton
          onClick={event =>
            allowedPageCheckers(
              AcceptPagination === "intro",
              connectServer,
              event
            )
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
