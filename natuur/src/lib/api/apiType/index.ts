type Grade<TLength extends 5 | 6> =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "X" & { length: TLength };

export interface UserApplicantStatusApiType {
  is_paid?: boolean;
  is_passed_interview?: boolean;
  is_printed_application_arrived?: boolean;
  is_final_submit?: boolean;
  is_passed_final_apply?: boolean;
  receipt_code?: number;
  exam_code?: number;
}

export interface GedApplicationApiType {
  classification: {
    apply_type:
      | "COMMON"
      | "MEISTER"
      | "SOCIAL_ONE_PARENT"
      | "SOCIAL_FROM_NORTH"
      | "SOCIAL_MULTICULTURAL"
      | "SOCIAL_BASIC_LIVING"
      | "SOCIAL_LOWEST_INCOME"
      | "SOCIAL_TEEN_HOUSEHOLDER";
    additional_type:
      | "NATIONAL_MERIT"
      | "PRIVILEGED_ADMISSION"
      | "NOT_APPLICABLE";
    is_daejeon: boolean;
  };
  personal_information: {
    name: string;
    sex: "MALE" | "FEMALE";
    birth_date: string;
    parent_name: string;
    parent_tel: string;
    applicant_tel: string;
    address: string;
    post_code: string;
  };
  ged_grade: {
    ged_average_score: number;
  };
  self_introduction_and_study_plan: {
    self_introduction: string;
    study_plan: string;
  };
}

export interface GraduatedApplicationApiType {
  classification: {
    apply_type:
      | "COMMON"
      | "MEISTER"
      | "SOCIAL_ONE_PARENT"
      | "SOCIAL_FROM_NORTH"
      | "SOCIAL_MULTICULTURAL"
      | "SOCIAL_BASIC_LIVING"
      | "SOCIAL_LOWEST_INCOME"
      | "SOCIAL_TEEN_HOUSEHOLDER";
    additional_type:
      | "NATIONAL_MERIT"
      | "PRIVILEGED_ADMISSION"
      | "NOT_APPLICABLE";
    is_daejeon: boolean;
  };
  personal_information: {
    name: string;
    sex: "MALE" | "FEMALE";
    birth_date: string;
    parent_name: string;
    parent_tel: string;
    applicant_tel: string;
    address: string;
    post_code: string;
    student_number: string;
    school_name: string;
    school_tel: string;
  };
  diligence_grade: {
    volunteer_time: number;
    full_cut_count: number;
    period_cut_count: number;
    late_count: number;
    early_leave_count: number;
  };
  school_grade: {
    korean: Array<Grade<6>>;
    social: Array<Grade<6>>;
    history: Array<Grade<6>>;
    math: Array<Grade<6>>;
    science: Array<Grade<6>>;
    tech_and_home: Array<Grade<6>>;
    english: Array<Grade<6>>;
  };
  self_introduction_and_study_plan: {
    self_introduction: string;
    study_plan: string;
  };
}

export interface UnGraduatedApplicationApiType {
  classification: {
    apply_type:
      | "COMMON"
      | "MEISTER"
      | "SOCIAL_ONE_PARENT"
      | "SOCIAL_FROM_NORTH"
      | "SOCIAL_MULTICULTURAL"
      | "SOCIAL_BASIC_LIVING"
      | "SOCIAL_LOWEST_INCOME"
      | "SOCIAL_TEEN_HOUSEHOLDER";
    additional_type:
      | "NATIONAL_MERIT"
      | "PRIVILEGED_ADMISSION"
      | "NOT_APPLICABLE";
    is_daejeon: boolean;
  };
  personal_information: {
    name: string;
    sex: "MALE" | "FEMALE";
    birth_date: string;
    parent_name: string;
    parent_tel: string;
    applicant_tel: string;
    address: string;
    post_code: string;
    student_number: string;
    school_name: string;
    school_tel: string;
  };
  diligence_grade: {
    volunteer_time: number;
    full_cut_count: number;
    period_cut_count: number;
    late_count: number;
    early_leave_count: number;
  };
  school_grade: {
    korean: Array<Grade<5>>;
    social: Array<Grade<5>>;
    history: Array<Grade<5>>;
    math: Array<Grade<5>>;
    science: Array<Grade<5>>;
    tech_and_home: Array<Grade<5>>;
    english: Array<Grade<5>>;
  };
  self_introduction_and_study_plan: {
    self_introduction: string;
    study_plan: string;
  };
}

export type GetApplicantDocumentApiType =
  | GedApplicationApiType
  | GraduatedApplicationApiType
  | UnGraduatedApplicationApiType;
