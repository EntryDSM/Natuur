import React, { FC } from "react";

import ViewCloseContent from "./ViewCloseContent";
import * as S from "../../../styles/Main";
import mapsAndFlags from "../../../assets/MainPage/maps_and_flags.png";
import loding from "../../../assets/loding.gif";

interface Props {
  isPassedFirstApply: boolean;
  isPassedFinalApply: boolean;
  isSuccess: boolean;
  isWaiting: boolean;
  periodList: Array<{ title: string; startDate: Date; endDate: Date }>;
}

const ViewCloseContentCover: FC<Props> = ({
  isPassedFirstApply,
  isPassedFinalApply,
  isSuccess,
  isWaiting,
  periodList
}) => (
  <>
    {isWaiting ? (
      <img src={loding} alt="로딩" />
    ) : !isSuccess ? (
      <>
        {!isPassedFirstApply &&
          periodList[1].startDate.getDate() === new Date().getDate() && (
            <ViewCloseContent title="합격자 명단에 없습니다">
              <S.ViewCloseText isSmall isColor isSmallMargin isWaitingPeriod>
                지원해주셔서 다시 한 번 감사합니다.
              </S.ViewCloseText>
              <S.ViewCloseText isSmall isColor isWaitingPeriod>
                앞으로 많은 성장을 하시리라 기대하고, 응원합니다.
              </S.ViewCloseText>
            </ViewCloseContent>
          )}

        {isPassedFirstApply &&
          periodList[1].startDate.getDate() === new Date().getDate() && (
            <ViewCloseContent title="축하드립니다 서류전형에 합격하셨습니다.">
              <S.ViewCloseText isSmall isSmallMargin isWaitingPeriod>
                2차 면접 - 2019년 11월 01일 09:00
              </S.ViewCloseText>
              <S.ViewCloseText isSmall isWaitingPeriod>
                <img src={mapsAndFlags} alt="지도표시자" />
                대전광역시 유성구 가정북로 76 대덕소프트웨어마이스터고등학교
                창의관
              </S.ViewCloseText>
            </ViewCloseContent>
          )}

        {isPassedFinalApply &&
          periodList[3].startDate.getDate() === new Date().getDate() && (
            <ViewCloseContent title="축하드립니다 최종으로 합격하셨습니다.">
              <S.ViewCloseText isSmall isColor isSmallMargin isWaitingPeriod>
                2019.11.7 (목) 10:00 ~ 2019.11.12 (수) 17:00
              </S.ViewCloseText>
              <S.ViewCloseText isSmall isWaitingPeriod>
                합격자 등록을 위해 입학동의서를 제출해 주시기 바랍니다.
              </S.ViewCloseText>
            </ViewCloseContent>
          )}

        {periodList[4].startDate.getDate() === new Date().getDate() && (
          <ViewCloseContent title="건강검진 결과를 제출해주시기 바랍니다.">
            <S.ViewCloseText isSmall isColor isSmallMargin isWaitingPeriod>
              2019.11.8 (목) 00:00 ~ 2019.11.23 (수) 00:00
            </S.ViewCloseText>
            <S.ViewCloseText isSmall isWaitingPeriod>
              건강검진 결과를 우편 또는 본교에 제출해 주시기 바랍니다.
            </S.ViewCloseText>
          </ViewCloseContent>
        )}
      </>
    ) : (
      <div>서버와의 연결이 끊겼습니다.</div>
    )}
  </>
);

export default ViewCloseContentCover;
