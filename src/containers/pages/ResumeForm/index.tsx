import Input from './Input';
import Textarea from './Textarea';
import Section from 'components/atoms/Section';
import FieldList from 'components/molecules/FieldList';
import Sections from 'components/molecules/Sections';
import {
  Field,
  FieldArray,
  Form,
  FormikProps,
  withFormik
  } from 'formik';
import React from 'react';

interface Project {
  content: string;
  dbList: string[];
  from: any;
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
  to: any;
}

interface Values {
  belongs: string;
  education: string;
  engineerCode: string;
  expertise: string;
  nearestStation: string;
  projects: Project[];
  qualification: string;
  selfIntroduction: string;
  specialty: string;
  specialtyBusiness: string;
}

interface OuterProps {
  handleSubmit2: (values: Values) => void;
  initialValue: Values;
}

export type ResumeFormProps = FormikProps<Values> & OuterProps;

const ResumeForm: React.FC<ResumeFormProps> = ({ values: { projects } }) => {
  return (
    <Form>
      <Sections>
        {[
          <Section heading="個人情報" key="個人情報">
            <div>
              <FieldList
                fields={[
                  {
                    description: (
                      <Field
                        component={Input}
                        name="engineerCode"
                        placeholder="ENG0123456789"
                      />
                    ),
                    key: "engineerCode",
                    term: "技術者コード"
                  },
                  {
                    description: (
                      <Field
                        component={Input}
                        name="belongs"
                        placeholder="個人事業主"
                      />
                    ),
                    key: "belongs",
                    term: "所属"
                  },
                  {
                    description: (
                      <Field
                        component={Input}
                        name="qualification"
                        placeholder="基本情報技術者"
                      />
                    ),
                    key: "qualification",
                    term: "資格"
                  },
                  {
                    description: (
                      <Field
                        component={Input}
                        name="education"
                        placeholder="○○大学 △△学部 □□学科 卒業"
                      />
                    ),
                    key: "education",
                    term: "学歴"
                  },
                  {
                    description: (
                      <Field
                        component={Input}
                        name="nearestStation"
                        placeholder="山手線 新宿駅"
                      />
                    ),
                    key: "nearestStation",
                    term: "最寄り駅"
                  }
                ]}
              />
            </div>
          </Section>,
          <Section heading="得意なこと" key="得意なこと">
            <div>
              <dl>
                <dt>得意分野</dt>
                <dd>
                  <Field
                    component={Input}
                    name="specialty"
                    placeholder="実装"
                  />
                </dd>
                <dt>得意技術</dt>
                <dd>
                  <Field
                    component={Input}
                    name="expertise"
                    placeholder="HTML, CSS, JavaScript"
                  />
                </dd>
                <dt>得意業務</dt>
                <dd>
                  <Field
                    component={Input}
                    name="specialtyBusiness"
                    placeholder="Webアプリケーション開発"
                  />
                </dd>
              </dl>
            </div>
          </Section>,
          <Section heading="自己PR" key="自己PR">
            <dl>
              <dt>自己PR</dt>
              <dd>
                <Field component={Textarea} name="selfIntroduction" />
              </dd>
            </dl>
          </Section>,
          <Section heading="経歴" key="経歴">
            <dl>
              <dt>経歴</dt>
              <dd>
                <FieldArray
                  name="projects"
                  render={({ push }) => (
                    <div>
                      {projects.map((_, index) => (
                        <dl key={index}>
                          <dt>プロジェクト名</dt>
                          <dd>
                            <Field
                              component={Input}
                              name={`projects.${index}.title`}
                            />
                          </dd>
                          <dt>業務内容</dt>
                          <dd>
                            <Field
                              component={Textarea}
                              name={`projects.${index}.content`}
                            />
                          </dd>
                          <dt>役割</dt>
                          <dd>
                            <Field
                              component={Input}
                              name={`projects.${index}.role`}
                            />
                          </dd>
                        </dl>
                      ))}
                      <button
                        onClick={e => {
                          push({
                            content: "",
                            dbList: [],
                            from: "",
                            fwMwToolList: [],
                            languageList: [],
                            pageBreakAfter: false,
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
                          });
                        }}
                        type="button"
                      >
                        push
                      </button>
                    </div>
                  )}
                />
              </dd>
            </dl>
          </Section>
        ]}
      </Sections>
      <button type="submit">submit</button>
    </Form>
  );
};

export default withFormik<OuterProps, Values>({
  handleSubmit: (values, { props: { handleSubmit2 } }) => {
    handleSubmit2(values);
  },
  mapPropsToValues: ({ initialValue }) => initialValue
})(ResumeForm);
