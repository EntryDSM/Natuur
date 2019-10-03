import React, { FC } from "react";

import * as S from "../../../../styles/personallinformation/popup";

interface OwnProps {
  middleSchoolData: string[];
  schoolSearchStatusCode: number;
  setMiddleSchool: (payload: { school: string }) => void;
  closePopUp: () => void;
}

const officeOfEducationList: FC<OwnProps> = ({
  middleSchoolData,
  setMiddleSchool,
  closePopUp,
  schoolSearchStatusCode
}) => {
  return (
    <S.OfficeOfEducationPopUpItemList>
      {schoolSearchStatusCode === 401 && "정보가 옳바르지 않습니다."}
      {schoolSearchStatusCode === 200 &&
        middleSchoolData.map((value, index) => {
          const schoolName = value.split(" ")[value.split(" ").length - 1];

          return (
            <div
              onClick={() => {
                setMiddleSchool({ school: schoolName }), closePopUp();
              }}
              key={`${index}-${schoolName}`}
            >
              <p>{value}</p>
            </div>
          );
        })}
    </S.OfficeOfEducationPopUpItemList>
  );
};

export default officeOfEducationList;
