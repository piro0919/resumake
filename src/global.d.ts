declare module '@sweetalert/with-react';

type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;

interface Project {
  content: string;
  dbList: string[];
  from: import('moment').Moment;
  fwMwToolList: string[];
  languageList: string[];
  pageBreakAfter?: boolean;
  process: {
    requirementDefinition: boolean;
    basicDesign: boolean;
    detailedDesign: boolean;
    mountingSingleUnit: boolean;
    combinedTest: boolean;
    comprehensiveTest: boolean;
    maintenanceAndOperation: boolean;
  };
  role: string;
  serverOsList: string[];
  team: number;
  title: string;
  to: import('moment').Moment;
}

interface Values {
  belongs?: string;
  birthday: import('moment').Moment;
  education: string;
  engineerCode?: string;
  expertise: string;
  nearestStation: string;
  operation: import('moment').Moment;
  projects: Project[];
  qualification: string;
  selfIntroduction: string;
  sex: 'man' | 'woman';
  specialty: string;
  specialtyBusiness: string;
}
