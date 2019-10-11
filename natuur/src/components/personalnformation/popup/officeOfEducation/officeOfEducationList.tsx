import React, { FC } from "react";

import * as S from "../../../../styles/personallinformation/popup";

interface OwnProps {
  middleSchoolData: Array<{ name: string; code: string }>;
  schoolSearchStatusCode: number;
  setMiddleSchool: (payload: { school: string }) => void;
  setSchoolCode: (payload: { code: string }) => void;
  closePopUp: () => void;
}

const officeOfEducationList: FC<OwnProps> = ({
  middleSchoolData,
  setMiddleSchool,
  setSchoolCode,
  closePopUp,
  schoolSearchStatusCode
}) => {
  return (
    <S.OfficeOfEducationPopUpItemList>
      {schoolSearchStatusCode === 401 && "정보가 올바르지 않습니다."}
      {schoolSearchStatusCode === 200 &&
        middleSchoolData.map((value, index) => {
          const schoolName =
            value.name !== ""
              ? value.name.split(" ")[value.name.split(" ").length - 1]
              : "";

          return (
            <div
              onClick={() => {
                setMiddleSchool({ school: schoolName }),
                  setSchoolCode({ code: value.code }),
                  closePopUp();
              }}
              key={`${index}-${schoolName}`}
            >
              <p>{value.name}</p>
            </div>
          );
        })}
    </S.OfficeOfEducationPopUpItemList>
  );
};

export default officeOfEducationList;
