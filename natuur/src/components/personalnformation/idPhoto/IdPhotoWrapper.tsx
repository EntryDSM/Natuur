import React, { FC, useState, useEffect, useRef } from "react";

import * as S from "../../../styles/personallinformation";
import frameLandScape from "../../../assets/personal/frame-landscape.png";

const handleFile = (
  { target: { files } },
  setFile: (file: string) => void,
  changeApplicantPhoto: (payload: {
    email: { email: string };
    accessToken: { accessToken: string };
    payload: { file: File };
  }) => void,
  email: string,
  accessToken: string
) => {
  const file = files[0];

  changeApplicantPhoto({
    email: { email },
    accessToken: { accessToken },
    payload: { file }
  });
  setFile(URL.createObjectURL(file));
};

interface OwnProps {
  email: string;
  accessToken: string;
  imagePath: string;
  file: string;
  setFile: (file: string) => void;
  changeApplicantPhoto: (payload: {
    email: { email: string };
    accessToken: { accessToken: string };
    payload: { file: File };
  }) => void;
}

const IdPhotoWrapper: FC<OwnProps> = ({
  changeApplicantPhoto,
  email,
  accessToken,
  imagePath,
  file,
  setFile
}) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      setFile(imagePath);
    }
  },        []);

  return (
    <S.IdPhotoBox>
      <S.IdPhotoInput
        type="file"
        accept="image/x-png,image/jpg,image/jpeg,image/jpeg2000"
        id="idPhoto"
        onChange={e =>
          handleFile(e, setFile, changeApplicantPhoto, email, accessToken)
        }
      />
      <S.IdPhotoPictureLabel htmlFor="idPhoto">
        {file ? (
          <img src={file} alt="사용자 이미지" />
        ) : (
          <div>
            <img src={frameLandScape} alt="이미지" />
            <div>
              <p>증명사진을 첨부해주세요. (3 X 4)</p>
              <p>(JPG,JPEG,JPEG2000,PNG)</p>
            </div>
          </div>
        )}
      </S.IdPhotoPictureLabel>
    </S.IdPhotoBox>
  );
};

export default IdPhotoWrapper;
