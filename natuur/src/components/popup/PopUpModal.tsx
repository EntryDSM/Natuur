import React, { FC } from "react";

import * as S from "../../styles/default/popup";
import { mapStateToProps } from "../../container/default/popup/PopUp";
import { CheckPopUp, SetPasswordPopUp } from ".";
import Login from "../../container/Authorization/Login/Login";
import { loginEvent } from "../../lib/utils/modal/login";
import { actionPressEnter } from "../../lib/utils/common";

interface OwnProps {
  updatePopUpCase(popUpCase: "default" | "login" | "set" | "check"): void;
  getIsUpdatePopUp(): void;
}

type Props = ReturnType<typeof mapStateToProps> & OwnProps;

const PopUpModal: FC<Props> = ({
  isUpdatePopup,
  itIsUpdatePopUpCase,
  updatePopUpCase,
  getIsUpdatePopUp
}) => (
  <>
    {isUpdatePopup && (
      <S.PopUpBackground
        onClick={() => loginEvent(getIsUpdatePopUp, updatePopUpCase, "default")}
      >
        <S.PopUp onClick={e => e.stopPropagation()}>
          <S.ContentCover>
            {itIsUpdatePopUpCase === "login" && (
              <Login
                actionPressEnter={actionPressEnter}
                updatePopUpCase={updatePopUpCase}
                getIsUpdatePopUp={getIsUpdatePopUp}
              />
            )}
            {itIsUpdatePopUpCase === "set" && (
              <SetPasswordPopUp
                actionPressEnter={actionPressEnter}
                updatePopUpCase={updatePopUpCase}
              />
            )}
            {itIsUpdatePopUpCase === "check" && (
              <CheckPopUp updatePopUpCase={updatePopUpCase} />
            )}
          </S.ContentCover>
        </S.PopUp>
      </S.PopUpBackground>
    )}
  </>
);

export default PopUpModal;
