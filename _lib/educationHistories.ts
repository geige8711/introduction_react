export interface EducationHistoryItem {
  major: string;
  degree: string;
  timeSpan: string;
  schoolName: string;
}

export const educationHistories: EducationHistoryItem[] = [
  {
    schoolName: "Technical University of Berlin",
    degree: "Master's degree",
    major: "Physical Engineering",
    timeSpan: "2011-2013",
  },
  {
    schoolName: "East China University of Science and Technology",
    degree: "Master's degree",
    major: "Chemiical Process Machinery",
    timeSpan: "2009-2011",
  },
  {
    schoolName: "Daqing Petroleum Institue",
    degree: "Bachelor's degree",
    major: "Process Equipment and Control Engineering",
    timeSpan: "2005-2009",
  },
];
