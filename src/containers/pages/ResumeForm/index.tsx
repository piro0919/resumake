import Input from './Input';
import Textarea from './Textarea';
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
      <section>
        <h2>1.</h2>
        <div>
          <dl>
            <dt>技術者コード</dt>
            <dd>
              <Field
                component={Input}
                name="engineerCode"
                placeholder="ENG0123456789"
              />
            </dd>
            <dt>所属</dt>
            <dd>
              <Field
                component={Input}
                name="belongs"
                placeholder="個人事業主"
              />
            </dd>
            <dt>資格</dt>
            <dd>
              <Field
                component={Input}
                name="qualification"
                placeholder="基本情報技術者"
              />
            </dd>
            <dt>学歴</dt>
            <dd>
              <Field
                component={Input}
                name="education"
                placeholder="○○大学 △△学部 □□学科 卒業"
              />
            </dd>
            <dt>最寄り駅</dt>
            <dd>
              <Field
                component={Input}
                name="nearestStation"
                placeholder="山手線 新宿駅"
              />
            </dd>
          </dl>
        </div>
      </section>
      <section>
        <h2>2.</h2>
        <div>
          <dl>
            <dt>得意分野</dt>
            <dd>
              <Field component={Input} name="specialty" placeholder="実装" />
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
      </section>
      <section>
        <h2>3.</h2>
        <dl>
          <dt>自己PR</dt>
          <dd>
            <Field component={Textarea} name="selfIntroduction" />
          </dd>
        </dl>
      </section>
      <section>
        <h2>4.</h2>
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
      </section>
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
