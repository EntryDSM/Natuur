import React, { FC } from "react";

import * as S from "../../styles/default/popup";
import { mapStateToProps } from "../../container/default/popup/PopUp";
import { CheckPopUp, SetPasswordPopUp } from ".";
import PdfPopUp from './pdf';
import Login from "../../container/Authorization/Login/Login";
import { updatePopUp } from "../../lib/utils/modal/login";

const handleKeyPress = (
  { key }: React.KeyboardEvent<HTMLInputElement>,
  handleEvent: () => void
) => {
  if (key === "Enter") {
    handleEvent();
  }
};

interface OwnProps {
  updatePopUpCase(
    popUpCase: "default" | "login" | "set" | "check" | "pdf"
  ): void;
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
        onClick={() =>
          updatePopUp(getIsUpdatePopUp, updatePopUpCase, "default")
        }
      >
        <S.PopUp onClick={e => e.stopPropagation()}>
          <S.ContentCover>
            {itIsUpdatePopUpCase === "login" && (
              <Login
                handleKeyPress={handleKeyPress}
                updatePopUpCase={updatePopUpCase}
                getIsUpdatePopUp={getIsUpdatePopUp}
              />
            )}
            {itIsUpdatePopUpCase === "pdf" && (
              <PdfPopUp />
            )}
            {itIsUpdatePopUpCase === "set" && (
              <SetPasswordPopUp
                handleKeyPress={handleKeyPress}
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
