export interface CompanyCardModel {
  companyName: string;
  time: string;
  thumbSrc: string;
  dailyDuties: dailyDutyModel[];
  technologies: string[];
  biggestProblems: biggestProblemModel[];
  isExtended: boolean;
  className: string;
}

interface dailyDutyModel {
  title: string;
  description?: string[];
}

interface biggestProblemModel {
  title: string;
  description?: string;
}
