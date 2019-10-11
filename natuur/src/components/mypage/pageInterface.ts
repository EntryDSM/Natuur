export interface RowProps {
  name: string;
  gender: string;
  isFinalSubmit: boolean;
  isPaid: boolean;
  isPrintedApplicationArrived: boolean;
}

export interface ClassificationProps {
  applyType: string;
  selectRegion: string;
  isGed: boolean;
}

export interface PersonalInformation {
  name: string;
  gender: string;
  birthYear: string;
  birthMonth: string;
  birthDate: string;
  parentsName: string;
  parentsContact: string;
  userContact: string;
  zipCode: string;
  address: string;
  file: string;
}

export interface GradeEntry {
  gedAverageScore: string;
  volunteer: string;
  absent: string;
  earlyLeave: string;
  tardy: string;
  missingClass: string;
}

export interface SelfIntroduction {
  selfIntroduction: string;
  studyPlan: string;
}
