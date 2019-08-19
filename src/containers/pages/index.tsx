import ResumeForm, { ResumeFormProps } from './ResumeForm';
import ResumeIframe, { ResumeIframeProps } from './ResumeIframe';
import LogoImage from 'components/atoms/LogoImage';
import ContentBlock from 'components/organisms/ContentBlock';
import WrapperBlock from 'components/templates/WrapperBlock';
import withClientSize, { WithClientSize } from 'hocs/withClientSize';
import moment from 'moment';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type PagesProps = RouteComponentProps & WithClientSize;

const Pages: React.FC<PagesProps> = ({
  clientSize: { clientHeight, clientWidth }
}) => {
  const initialValue = React.useMemo<ResumeFormProps["values"]>(
    () => ({
      belongs: "",
      birthday: {
        date: moment().get("date"),
        month: moment().get("month"),
        year: moment().get("year")
      },
      education: "",
      engineerCode: "",
      expertise: "",
      nearestStation: "",
      projects: [
        {
          content: "",
          dbList: [],
          from: "",
          fwMwToolList: [],
          languageList: [],
          process: {
            requirementDefinition: false,
            basicDesign: false,
            detailedDesign: false,
            mountingSingleUnit: false,
            combinedTest: false,
            comprehensiveTest: false,
            maintenanceAndOperation: false
          },
          role: "",
          serverOsList: [],
          team: 0,
          title: "",
          to: ""
        }
      ],
      qualification: "",
      selfIntroduction: "",
      sex: "man",
      specialty: "",
      specialtyBusiness: ""
    }),
    []
  );

  const [values, setValues] = React.useState<typeof initialValue>(initialValue);

  const handleSubmit = React.useCallback<ResumeFormProps["handleSubmit2"]>(
    values => {
      setValues(values);
    },
    [setValues]
  );

  return (
    <WrapperBlock clientHeight={clientHeight} clientWidth={clientWidth}>
      <ContentBlock key="content">
        <header key="header">
          <LogoImage />
        </header>
        <ResumeForm
          handleSubmit2={handleSubmit}
          initialValue={initialValue}
          key="form"
        />
      </ContentBlock>
      <React.Fragment key="pdf">
        <ResumeIframe values={values} />
      </React.Fragment>
    </WrapperBlock>
  );
};

export default withClientSize(Pages);
