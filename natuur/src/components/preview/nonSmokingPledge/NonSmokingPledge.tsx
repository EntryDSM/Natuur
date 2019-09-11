import React, { FC, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "../../../styles/preview/nonSmokingPledge";
import WaterMark from "../WaterMark";
import InformationTable from "./InformationTable";
import NonSmokingBody from "./NonSmokingBody";
import { FinalSubmitDependencyState } from "../FinalSubmitButton";
import { AppState } from "../../../core/redux/store/store";

const NonSmokingPledge: FC = () => {
  const {
    receiptCode,
    name,
    middleSchool,
    userContact,
    address,
    detailedAddress
  } = useSelector<AppState, FinalSubmitDependencyState>(state => ({
    receiptCode: state.mainReducer.receiptCode,
    name: state.PersonalReducer.name,
    middleSchool: state.PersonalReducer.middleSchool,
    userContact: state.PersonalReducer.userContact,
    address: state.PersonalReducer.address,
    detailedAddress: state.PersonalReducer.detailedAddress
  }));

  const [nonSmokingPledgeDependency] = useState(
    !!(receiptCode && name && middleSchool && userContact && address)
  );

  return (
    <S.NonSmokingPledge>
      <WaterMark isShow={!nonSmokingPledgeDependency} />
      <div id="mainDiv">
        <S.SubContainer id="subDiv">
          <S.Title>금 연 동 의 서</S.Title>
          <InformationTable
            receiptCode={receiptCode}
            name={name}
            middleSchool={middleSchool}
            userContact={userContact}
            address={address}
            detailedAddress={detailedAddress}
          />
          <NonSmokingBody name={name} />
        </S.SubContainer>
      </div>
    </S.NonSmokingPledge>
  );
};

export default NonSmokingPledge;
