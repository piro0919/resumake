import Menu from './Menu';
import ResumeForm, { ResumeFormProps } from './ResumeForm';
import ResumeIframe, { ResumeIframeProps } from './ResumeIframe';
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
  const initialValue = React.useMemo<
    ArgumentTypes<ResumeFormProps["handleSubmit2"]>[0]
  >(
    () => ({
      belongs: "",
      birthday: moment().startOf("date"),
      education: "",
      engineerCode: "",
      expertise: "",
      nearestStation: "",
      projects: [
        {
          content: "",
          dbList: [""],
          from: moment().startOf("month"),
          fwMwToolList: [""],
          languageList: [""],
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
          serverOsList: [""],
          team: 0,
          title: "",
          to: moment().startOf("month")
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

  const [values, setValues] = React.useState<ResumeIframeProps["values"]>(
    initialValue
  );

  const handleSubmit = React.useCallback<ResumeFormProps["handleSubmit2"]>(
    values => {
      setValues(values);
    },
    [setValues]
  );

  return (
    <WrapperBlock clientHeight={clientHeight} clientWidth={clientWidth}>
      <Menu key="menu" />
      <ContentBlock key="form">
        <ResumeForm handleSubmit2={handleSubmit} initialValue={initialValue} />
      </ContentBlock>
      <ResumeIframe key="pdf" values={values} />
    </WrapperBlock>
  );
};

export default withClientSize(Pages);
