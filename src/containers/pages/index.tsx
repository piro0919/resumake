import ResumeForm, { ResumeFormProps } from "./ResumeForm";
import ResumeIframe, { ResumeIframeProps } from "./ResumeIframe";
import Logo from "components/atoms/Logo";
import ContentWrapper from "components/organisms/ContentWrapper";
import Wrapper from "components/templates/Wrapper";
import withClientSize, { WithClientSize } from "hocs/withClientSize";
import React from "react";
import { RouteComponentProps } from "react-router-dom";

export type PagesProps = RouteComponentProps & WithClientSize;

const Pages: React.FC<PagesProps> = ({
  clientSize: { clientHeight, clientWidth }
}) => {
  const initialValue = React.useMemo<ResumeIframeProps["values"]>(
    () => ({
      belongs: "",
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
    <Wrapper clientHeight={clientHeight} clientWidth={clientWidth}>
      <ContentWrapper key="content">
        <header key="header">
          <Logo />
        </header>
        <ResumeForm
          handleSubmit2={handleSubmit}
          initialValue={initialValue}
          key="form"
        />
      </ContentWrapper>
      <React.Fragment key="pdf">
        <ResumeIframe values={values} />
      </React.Fragment>
    </Wrapper>
  );
};

export default withClientSize(Pages);
