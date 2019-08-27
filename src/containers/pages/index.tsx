import ContentBlock from 'components/organisms/ContentBlock';
import WrapperBlock from 'components/templates/WrapperBlock';
import withClientSize, { WithClientSize } from 'hocs/withClientSize';
import withPdf, { WithPdf } from 'hocs/withPdf';
import withXlsx, { WithXlsx } from 'hocs/withXlsx';
import moment from 'moment';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Menu from './Menu';
import ResumeForm, { ResumeFormProps } from './ResumeForm';
import ResumeIframe from './ResumeIframe';

type TOutter = RouteComponentProps;

export type PagesProps = TOutter & WithClientSize & WithPdf & WithXlsx;

const Pages: React.FC<PagesProps> = ({
  clientSize: { clientHeight, clientWidth },
  createPdf,
  createXlsx
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

  const [values, setValues] = React.useState<typeof initialValue>(initialValue);

  const handleSubmit = React.useCallback<ResumeFormProps['handleSubmit2']>(
    values => {
      setValues(values);
    },
    [setValues]
  );

  const ref = React.useRef(values);

  const pdf = React.useMemo(() => {
    if (JSON.stringify(ref.current) === JSON.stringify(values)) {
      return;
    }

    return createPdf(values);
  }, [createPdf, ref, values]);

  const xlsx = React.useMemo(() => {
    if (JSON.stringify(ref.current) === JSON.stringify(values)) {
      return;
    }

    return createXlsx(values);
  }, [createXlsx, ref, values]);

  const json = React.useMemo(() => JSON.stringify(values), [values]);

  React.useEffect(() => {
    ref.current = values;
  }, [ref, values]);

  return (
    <WrapperBlock clientHeight={clientHeight} clientWidth={clientWidth}>
      <Menu json={json} key="menu" pdf={pdf} xlsx={xlsx} />
      <ContentBlock key="form">
        <ResumeForm handleSubmit2={handleSubmit} initialValue={initialValue} />
      </ContentBlock>
      <ResumeIframe key="pdf" pdf={pdf} />
    </WrapperBlock>
  );
};

function compose<TInner extends TOutter, TOutter = {}>(
  ...functions: ((hoge: any) => any)[]
): (component: React.FC<TInner>) => React.FC<TOutter> {
  return component => functions.reduce((comp, func) => func(comp), component);
}

export default compose<PagesProps, TOutter>(
  withClientSize,
  withPdf,
  withXlsx
)(Pages);
