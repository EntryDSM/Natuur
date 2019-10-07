import styled from "styled-components";

export const GradeWrapper = styled.div`
  width: 1142px;
  height: 1744px;
  margin: 0 auto;
`;

export const WrapperCover = styled.div<{ isLast: boolean }>`
  width: 100%;
  margin-bottom: ${props => (props.isLast ? "0" : "64px")};

  & > p {
    font-size: 20px;
    color: #000000;
    margin-bottom: 16px;
  }

  & > div {
    width: 100%;
    border-top: 1px solid #5f8a90;
    border-bottom: 1px solid #5f8a90;
    position: relative;

    table {
      width: 100%;
      height: 100%;
      border-collapse: collapse;
    }
    tbody {
      width: 100%;
      height: 100%;
    }
  }
`;

export const Td = styled.td<{ isScore?: boolean }>`
  height: 76px;
  text-align: center;

  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div {
    ${props =>
      props.isScore &&
      "width:100%; display: flex; justify-content: center; align-items: center"};
  }
`;

export const SpaceBetweenDiv = styled.div<{ widthSize?: number }>`
  width: ${props => `${props.widthSize}px`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Tr = styled.tr`
  width: 100%;
`;

export const BorderBottomTr = styled(Tr)`
  border-bottom: solid 1px #bfd0d3;
`;

export const BorderRightTd = styled(Td)`
  border-right: solid 1px #bfd0d3;
`;

interface TdTitleProps {
  noBottomBorder?: boolean;
  isScore?: boolean;
}

export const TdTitle = styled(Td)<TdTitleProps>`
  width: 150px;
  border-right: solid 1px #bfd0d3;
  font-size: 20px;
  color: #000;
  background: ${props => props.isScore && "#f7fbfc"};
  ${props => props.noBottomBorder && "border-bottom: solid 1px transparent"};
`;

export const TrTitle = styled(BorderBottomTr)<{ isScore?: boolean }>`
  font-size: 20px;
  background: ${props =>
    props.isScore
      ? "#f7fbfc"
      : "-webkit-linear-gradient(left, transparent 0%, #f7fbfc 50%, transparent 100%)"};
`;

export const GradeTr = styled(TrTitle)<{ isLast?: boolean }>`
  background: #ffffff;
  border-bottom: ${props => props.isLast && "solid 1px transparent"};
`;

export const Div = styled.div<{ widthSize?: number; marginLeft?: number }>`
  width: ${props => `${props.widthSize}px`};
  margin-left: ${props => `${props.marginLeft}px`};
`;

export const InputCover = styled.div`
  width: fit-content;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Input = styled.input`
  width: 76px;
  height: 40px;
  border-radius: 3px;
  border: solid 1px #bccdd0;
  margin-right: 12px;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 40px;
  text-align: center;

  &::placeholder {
    color: #cccccc;
  }
`;

export const CheckInput = styled.input`
  display: none;
`;

export const CheckBox = styled.label`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  border: solid 1px #bcd0d2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  cursor: pointer;
`;

export const TextLabel = styled.label`
  font-size: 16px;
  cursor: pointer;
`;

export const CheckBoxAccept = styled.img`
  width: 12px;
  height: 9px;
`;

export const ScoresBox = styled.div<{ isSelected?: boolean }>`
  width: 141px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: ${props => !props.isSelected && "center"};

  & > p {
    width: 1px;
    height: 16px;
    margin: 0 8px 0 3px;
    background: #bfd0d2;
  }
`;

export const ScoreList = styled.ul`
  width: 110px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ScoreItem = styled.li`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #000000;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #bfd0d2;
  }
`;

export const EmphasisScore = styled.span`
  display: block;
  margin: 2px auto;
  width: 20px;
  height: 2px;
  background: #bfd0d2;
`;

export const ResetGradeWrapper = styled.div`
  height: 24px;
  position: absolute;
  top: -40px;
  right: 0;
  display: flex;
  align-items: center;
  color: #000000;
  font-size: 18px;

  > p {
    margin-right: 12px;
  }
`;
