import React, { FC } from "react";

import * as S from "../../../styles/default/popup";

interface OwnProps {
  presentFinalSubmit: () => void;
  getIsUpdatePopUp(): void;
}

const FinalSubmitPopUp: FC<OwnProps> = ({
  presentFinalSubmit,
  getIsUpdatePopUp
}) => {
  return (
    <S.FianlSubmitPopUp>
      <h2>최종 제출 하시겠습니까?</h2>
      <p>
        ※ 최종 제출 이후에는
        <br />
        수정 및 취소가 <span>불가능합니다.</span>
      </p>
      <div>
        <button onClick={presentFinalSubmit}>예</button>
        <button onClick={getIsUpdatePopUp}>아니오</button>
      </div>
    </S.FianlSubmitPopUp>
  );
};

export default FinalSubmitPopUp;
