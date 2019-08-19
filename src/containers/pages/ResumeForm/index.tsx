import Input from './Input';
import RadioLabel from './RadioLabel';
import Textarea from './Textarea';
import Button from 'components/atoms/Button';
import Section from 'components/atoms/Section';
import FieldList from 'components/molecules/FieldList';
import FieldListBlock from 'components/molecules/FieldListBlock';
import LabeledRadioFieldList from 'components/molecules/LabeledRadioFieldList';
import ProjectListBlock from 'components/molecules/ProjectListBlock';
import SectionList from 'components/molecules/SectionList';
import {
  Field,
  FieldArray,
  Form,
  FormikProps,
  withFormik
  } from 'formik';
import moment from 'moment';
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
  birthday: {
    date: number;
    month: number;
    year: number;
  };
  education: string;
  engineerCode: string;
  expertise: string;
  nearestStation: string;
  projects: Project[];
  qualification: string;
  selfIntroduction: string;
  sex: "man" | "woman";
  specialty: string;
  specialtyBusiness: string;
}

interface OuterProps {
  handleSubmit2: (values: Values) => void;
  initialValue: Values;
}

export type ResumeFormProps = FormikProps<Values> & OuterProps;

const ResumeForm: React.FC<ResumeFormProps> = ({
  handleSubmit,
  values: { projects }
}) => (
  <Form>
    <SectionList>
      {[
        <Section heading="個人情報" key="個人情報">
          <FieldList
            fields={[
              {
                description: (
                  <Field
                    component={Input}
                    name="engineerCode"
                    onBlur={handleSubmit}
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
                    onBlur={handleSubmit}
                    placeholder="個人事業主"
                  />
                ),
                key: "belongs",
                term: "所属"
              },
              {
                description: (
                  <Field component="select" name="age">
                    {moment.months().map((month, index) => (
                      <option key={month} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </Field>
                ),
                key: "age",
                term: "生年月日"
              },
              {
                description: (
                  <LabeledRadioFieldList
                    fields={[
                      {
                        key: "man",
                        value: (
                          <Field
                            component={RadioLabel}
                            id="man"
                            label="男性"
                            name="sex"
                            onClick={() => {
                              setTimeout(() => {
                                handleSubmit();
                              }, 1000);
                            }}
                          />
                        )
                      },
                      {
                        key: "woman",
                        value: (
                          <Field
                            component={RadioLabel}
                            id="woman"
                            label="女性"
                            name="sex"
                            onClick={() => {
                              setTimeout(() => {
                                handleSubmit();
                              }, 1000);
                            }}
                          />
                        )
                      }
                    ]}
                  />
                ),
                key: "sex",
                term: "性別"
              },
              {
                description: (
                  <Field
                    component={Input}
                    name="qualification"
                    onBlur={handleSubmit}
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
                    onBlur={handleSubmit}
                    placeholder="東京大学 理学部 情報科学科 卒業"
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
                    onBlur={handleSubmit}
                    placeholder="山手線 新宿駅"
                  />
                ),
                key: "nearestStation",
                term: "最寄り駅"
              }
            ]}
          />
        </Section>,
        <Section heading="得意なこと" key="得意なこと">
          <FieldList
            fields={[
              {
                description: (
                  <Field
                    component={Input}
                    name="specialty"
                    onBlur={handleSubmit}
                    placeholder="実装"
                  />
                ),
                key: "specialty",
                term: "得意分野"
              },
              {
                description: (
                  <Field
                    component={Input}
                    name="expertise"
                    onBlur={handleSubmit}
                    placeholder="HTML, CSS, JavaScript"
                  />
                ),
                key: "expertise",
                term: "得意技術"
              },
              {
                description: (
                  <Field
                    component={Input}
                    name="specialtyBusiness"
                    onBlur={handleSubmit}
                    placeholder="Webサービス開発"
                  />
                ),
                key: "specialtyBusiness",
                term: "得意業務"
              }
            ]}
          />
        </Section>,
        <Section heading="自己PR" key="自己PR">
          <Field
            component={Textarea}
            name="selfIntroduction"
            onBlur={handleSubmit}
          />
        </Section>,
        <Section heading="経歴" key="経歴">
          <FieldArray
            name="projects"
            render={({ push, remove }) => (
              <ProjectListBlock
                projects={projects.map((_, index) => ({
                  key: `projects.${index}`,
                  node: (
                    <FieldListBlock>
                      <FieldList
                        fields={[
                          {
                            description: (
                              <Field
                                component={Input}
                                name={`projects.${index}.title`}
                                onBlur={handleSubmit}
                                placeholder={`プロジェクト${index + 1}`}
                              />
                            ),
                            key: `projects.${index}.title`,
                            term: "プロジェクト名"
                          },
                          {
                            description: (
                              <Field
                                component={Textarea}
                                name={`projects.${index}.content`}
                                onBlur={handleSubmit}
                              />
                            ),
                            key: `projects.${index}.content`,
                            term: "業務内容"
                          },
                          {
                            description: (
                              <Field
                                component={Input}
                                name={`projects.${index}.role`}
                                onBlur={handleSubmit}
                                placeholder="PG"
                              />
                            ),
                            key: `projects.${index}.role`,
                            term: "役割"
                          },
                          {
                            description: (
                              <React.Fragment>
                                <Field
                                  component={Input}
                                  min={0}
                                  name={`projects.${index}.team`}
                                  onBlur={handleSubmit}
                                  placeholder="0"
                                  type="number"
                                />
                                名
                              </React.Fragment>
                            ),
                            key: `projects.${index}.team`,
                            term: "規模"
                          }
                        ]}
                        key="fieldList"
                      />
                      <Button
                        key="footer"
                        onClick={() => {
                          remove(index);

                          // 強引
                          setTimeout(() => {
                            handleSubmit();
                          }, 1000);
                        }}
                        type="button"
                      >
                        削除
                      </Button>
                    </FieldListBlock>
                  )
                }))}
                footer={
                  <Button
                    onClick={() => {
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
                    type="submit"
                  >
                    追加
                  </Button>
                }
              />
            )}
          />
        </Section>
      ]}
    </SectionList>
    <Button type="submit">更新</Button>
  </Form>
);

export default withFormik<OuterProps, Values>({
  handleSubmit: (values, { props: { handleSubmit2 } }) => {
    handleSubmit2(values);
  },
  mapPropsToValues: ({ initialValue }) => initialValue
})(ResumeForm);
