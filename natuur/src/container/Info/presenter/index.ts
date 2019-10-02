export const convertApplyTypeToKorean = (
  applyType: string
):
  | "일반전형"
  | "마이스터 인재전형"
  | "사회통합전형/기초생활수급권자"
  | "사회통합전형/한부모가족"
  | "사회통합전형/차상위계층"
  | "사회통합전형/소년소녀가장"
  | "사회통합전형/북한이탈주민"
  | "사회통합전형/다문화가정" => {
  switch (applyType) {
    case "COMMON":
      return "일반전형";
    case "MEISTER":
      return "마이스터 인재전형";
    case "SOCIAL_BASIC_LIVING":
      return "사회통합전형/기초생활수급권자";
    case "SOCIAL_ONE_PARENT":
      return "사회통합전형/한부모가족";
    case "SOCIAL_MULTICULTURAL":
      return "사회통합전형/다문화가정";
    case "SOCIAL_LOWEST_INCOME":
      return "사회통합전형/차상위계층";
    case "SOCIAL_TEEN_HOUSEHOLDER":
      return "사회통합전형/소년소녀가장";
    case "SOCIAL_FROM_NORTH":
      return "사회통합전형/북한이탈주민";
    default:
      return "일반전형";
  }
};

export const convertAdditionalTypeToKorean = (
  remarks: string
): "국가 유공자" | "특례 입학 대상자" | "" => {
  switch (remarks) {
    case "NOT_APPLICABLE":
      return "";
    case "NATIONAL_MERIT":
      return "국가 유공자";
    case "PRIVILEGED_ADMISSION":
      return "특례 입학 대상자";
    default:
      return "";
  }
};
