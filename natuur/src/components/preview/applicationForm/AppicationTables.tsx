import React, { FC } from "react";

import * as S from "../../../styles/preview/applicationForm";

interface OwnProps {
  isGed: boolean;
  applyType: string;
  selectRegion: string;
  graduationClassification: string;
  graduationYear: number;
  remarks: string;
  receiptCode: number;
  examCode: number;
  name: string;
  gender: string;
  birthYear: string;
  birthMonth: string;
  birthDate: string;
  userClass: string;
  middleSchool: string;
  schoolContact: string;
  parentsContact: string;
  userContact: string;
  address: string;
  detailedAddress: string;
  file: string;
}

const ApplicationTables: FC<OwnProps> = ({
  isGed,
  applyType,
  selectRegion,
  graduationClassification,
  graduationYear,
  remarks,
  receiptCode,
  examCode,
  name,
  gender,
  birthYear,
  birthMonth,
  birthDate,
  userClass,
  middleSchool,
  schoolContact,
  parentsContact,
  userContact,
  address,
  detailedAddress,
  file
}) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <p>접수번호</p>
            </td>
            <td>
              <p>{receiptCode}</p>
            </td>
            <td>
              <p>중학교 코드</p>
            </td>
            <td>
              <p />
            </td>
            <td>
              <p>반</p>
            </td>
            <td>
              <p>{userClass}</p>
            </td>
            <td>
              <p>수험번호</p>
            </td>
            <td>
              <p>{examCode}</p>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td rowSpan={2}>
              <p>
                지원자
                <br />
                인적사항
              </p>
            </td>
            <td>
              <p>성명</p>
            </td>
            <td>
              <p>{name}</p>
            </td>
            <td>
              <p>생년월일</p>
            </td>
            <td>
              <p>{`${birthYear}년 ${birthMonth}월 ${birthDate}일`}</p>
            </td>
            <td>
              <p>성별</p>
            </td>
            <td>
              <S.LeftAlignText>
                <S.CheckBox ml={15} isAccept={gender === "MALE"} />남
                <S.CheckBox ml={15} isAccept={gender === "FEMALE"} />여
              </S.LeftAlignText>
            </td>
          </tr>
          <tr>
            <td>
              <p>주소</p>
            </td>
            <td colSpan={6}>
              <p>{`${address} ${detailedAddress}`}</p>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td rowSpan={3}>
              <p>
                전화
                <br />
                연락처
              </p>
            </td>
            <td>
              <p>보호자</p>
            </td>
            <td>
              <p>
                <S.Blank isCenter widthSize={28}>
                  {parentsContact && parentsContact.slice(0, 3)}
                </S.Blank>
                -
                <S.Blank isCenter widthSize={28}>
                  {parentsContact && parentsContact.slice(3, 7)}
                </S.Blank>
                -
                <S.Blank isCenter widthSize={28}>
                  {parentsContact && parentsContact.slice(7, 11)}
                </S.Blank>
              </p>
            </td>
            <td rowSpan={3}>
              <p>
                졸업
                <br />
                구분
              </p>
            </td>
            <td>
              <S.LeftAlignText>
                <S.CheckBox
                  isAccept={graduationClassification === "졸업 예정자"}
                />
                2020년 <S.Blank widthSize={10} /> 월 중학교 졸업 예정
              </S.LeftAlignText>
            </td>
          </tr>
          <tr>
            <td>
              <p>학교</p>
            </td>
            <td>
              <p>
                <S.Blank isCenter widthSize={28}>
                  {schoolContact && schoolContact.slice(0, 3)}
                </S.Blank>
                -
                <S.Blank isCenter widthSize={28}>
                  {schoolContact && schoolContact.slice(3, 7)}
                </S.Blank>
                -
                <S.Blank isCenter widthSize={28}>
                  {schoolContact && schoolContact.slice(7, 11)}
                </S.Blank>
              </p>
            </td>
            <td>
              <S.LeftAlignText>
                <S.CheckBox isAccept={graduationClassification === "졸업자"} />
                201
                <S.Blank widthSize={7}>
                  {graduationYear && String(graduationYear).slice(3)}
                </S.Blank>{" "}
                년<S.Blank widthSize={10} /> 월 중학교 졸업
              </S.LeftAlignText>
            </td>
          </tr>
          <tr>
            <td>
              <p>학생</p>
            </td>
            <td>
              <p>
                <S.Blank isCenter widthSize={28}>
                  {userContact && userContact.slice(0, 3)}
                </S.Blank>
                -
                <S.Blank isCenter widthSize={28}>
                  {userContact && userContact.slice(3, 7)}
                </S.Blank>
                -
                <S.Blank isCenter widthSize={28}>
                  {userContact && userContact.slice(7, 11)}
                </S.Blank>
              </p>
            </td>
            <td>
              <S.LeftAlignText>
                <S.CheckBox isAccept={isGed} /> 201
                <S.Blank widthSize={7} />년<S.Blank widthSize={10} /> 월 고입
                검정고시 합격
              </S.LeftAlignText>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td rowSpan={6}>
              <p>전형유형</p>
            </td>
            <td rowSpan={2} colSpan={2}>
              <S.LeftAlignText>
                <S.CheckBox isAccept={applyType === "일반전형"} />
                일반전형
              </S.LeftAlignText>
            </td>
            <td rowSpan={6}>
              <p>
                지원자
                <br />
                특기
                <br />
                사항
              </p>
            </td>
            <td rowSpan={3}>
              <S.LeftAlignText>
                <S.CheckBox isAccept={remarks === "국가 유공자"} />
                국가유공자 자녀
              </S.LeftAlignText>
            </td>
            <td rowSpan={6}>
              <p>지역</p>
            </td>
            <td rowSpan={3}>
              <S.LeftAlignText>
                <S.CheckBox isAccept={selectRegion === "대전"} />
                대전
              </S.LeftAlignText>
            </td>
          </tr>

          <tr />

          <tr>
            <td rowSpan={2}>
              <S.LeftAlignText>
                <S.CheckBox isAccept={applyType === "마이스터 인재전형"} />
                마이스터인재전형
              </S.LeftAlignText>
            </td>
            <td rowSpan={4}>
              <p>
                특별
                <br />
                전형
              </p>
            </td>
          </tr>

          <tr>
            <td rowSpan={3}>
              <S.LeftAlignText>
                <S.CheckBox isAccept={remarks === "특례 입학 대상자"} />
                특례입학대상자
              </S.LeftAlignText>
            </td>
            <td rowSpan={3}>
              <S.LeftAlignText>
                <S.CheckBox isAccept={selectRegion === "전국"} />
                전국
              </S.LeftAlignText>
            </td>
          </tr>

          <tr>
            <td rowSpan={2}>
              <S.LeftAlignText>
                <S.CheckBox isAccept={/사회통합전형/g.test(applyType)} />
                사회통합 전형
              </S.LeftAlignText>
            </td>
          </tr>

          <tr />
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td rowSpan={6}>
              <p>내신성적</p>
            </td>
            <td rowSpan={2} colSpan={4}>
              <p>교과성적</p>
            </td>
            <td rowSpan={4}>
              <p>
                출석
                <br />
                점수
              </p>
            </td>
            <td rowSpan={4}>
              <p>
                봉사활동
                <br />
                점수
              </p>
            </td>
            <td rowSpan={4}>
              <p>총점</p>
            </td>
          </tr>

          <tr />

          <tr>
            <td rowSpan={2}>
              <p>
                1학년
                <br />
                환산점수
              </p>
            </td>
            <td rowSpan={2}>
              <p>
                2학년
                <br />
                환산점수
              </p>
            </td>
            <td rowSpan={2}>
              <p>
                3학년
                <br />
                환산점수
              </p>
            </td>
            <td rowSpan={2}>
              <p>
                교과성적
                <br />
                환산점수
              </p>
            </td>
          </tr>

          <tr />

          <tr>
            <td rowSpan={2}>
              <p />
            </td>
            <td rowSpan={2}>
              <p />
            </td>
            <td rowSpan={2}>
              <p />
            </td>
            <td rowSpan={2}>
              <p />
            </td>
            <td rowSpan={3}>
              <p />
            </td>
            <td rowSpan={3}>
              <p />
            </td>
            <td rowSpan={3}>
              <p />
            </td>
          </tr>
          <tr />
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>
              <div>
                {file ? (
                  <img src={file} alt="사용자 이미지" />
                ) : (
                  <>
                    사진
                    <br />
                    (3cm X 4cm)
                  </>
                )}
              </div>
            </td>

            <td>
              <S.LeftAlignText indent={12} ml={20}>
                본인은 귀 고등학교에 입학하고자 소정의 서류를 갖추어 지원합니다.
              </S.LeftAlignText>
              <S.marginTopBottomP mtb={8}>
                2019년 10월 <S.Blank widthSize={20} />일
              </S.marginTopBottomP>
              <S.Signature>
                <S.SignatureItem>
                  지원자: <span>(서명)</span>
                </S.SignatureItem>
                <S.SignatureItem>
                  보호자: <span>(서명)</span>
                </S.SignatureItem>
              </S.Signature>
              <br />
              <S.SchoolText>대덕소프트웨어마이스터고등학교장 귀하</S.SchoolText>
            </td>

            <td>
              <div>
                보훈번호: <S.Blank widthSize={30} isUnderLine />
                <br />
                <br />
                위는 국가유공자 <br /> 자녀임을 확인함
                <br />
                <S.marginTopBottomP mtb={5}>
                  2019년 10월 <S.Blank widthSize={10} />일
                </S.marginTopBottomP>
                <S.Blank widthSize={6} />
                교사 : <S.Blank widthSize={10}>{middleSchool}</S.Blank> (서명)
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ApplicationTables;
