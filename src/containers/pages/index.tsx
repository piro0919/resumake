import ContentBlock from 'components/organisms/ContentBlock';
import WrapperBlock from 'components/templates/WrapperBlock';
import withClientSize, { WithClientSize } from 'hocs/withClientSize';
import moment from 'moment';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Menu from './Menu';
import ResumeForm, { ResumeFormProps } from './ResumeForm';
import ResumeIframe, { ResumeIframeProps } from './ResumeIframe';

export type PagesProps = RouteComponentProps & WithClientSize;

const Pages: React.FC<PagesProps> = ({
  clientSize: { clientHeight, clientWidth }
}) => {
  const initialValue = React.useMemo<
    ArgumentTypes<ResumeFormProps['handleSubmit2']>[0]
  >(
    () => ({
      belongs: '',
      birthday: moment()
        .add(-30, 'years')
        .startOf('date'),
      education: '',
      engineerCode: '',
      expertise: '',
      nearestStation: '',
      operation: moment()
        .add(1, 'month')
        .startOf('month'),
      projects: [
        {
          content: '',
          dbList: [''],
          from: moment()
            .add(-1, 'year')
            .startOf('month'),
          fwMwToolList: [''],
          languageList: [''],
          process: {
            requirementDefinition: false,
            basicDesign: false,
            detailedDesign: false,
            mountingSingleUnit: false,
            combinedTest: false,
            comprehensiveTest: false,
            maintenanceAndOperation: false
          },
          role: '',
          serverOsList: [''],
          team: 1,
          title: '',
          to: moment().startOf('month')
        }
      ],
      qualification: '',
      selfIntroduction: '',
      sex: 'man',
      specialty: '',
      specialtyBusiness: ''
    }),
    []
  );

  const [values, setValues] = React.useState<ResumeIframeProps['values']>(
    initialValue
  );

  const handleSubmit = React.useCallback<ResumeFormProps['handleSubmit2']>(
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
