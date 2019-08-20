import Input from './Input';
import RadioLabel from './RadioLabel';
import SelectLabel from './SelectLabel';
import Textarea from './Textarea';
import Button from 'components/atoms/Button';
import Icon from 'components/atoms/Icon';
import Section from 'components/atoms/Section';
import FieldList from 'components/molecules/FieldList';
import FieldListBlock from 'components/molecules/FieldListBlock';
import FieldWithIconBlock from 'components/molecules/FieldWithIconBlock';
import LabeledRadioFieldList from 'components/molecules/LabeledRadioFieldList';
import ProjectListBlock from 'components/molecules/ProjectListBlock';
import SectionList from 'components/molecules/SectionList';
import SmallFieldListBlock from 'components/molecules/SmallFieldListBlock';
import {
  Field,
  FieldArray,
  Form,
  FormikProps,
  withFormik
  } from 'formik';
import moment, { Moment } from 'moment';
import React from 'react';
import { FiMinusSquare, FiPlusSquare } from 'react-icons/fi';

interface Project {
  content: string;
  dbList: string[];
  from: {
    month: number;
    year: number;
  };
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
  to: {
    month: number;
    year: number;
  };
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

interface SubmitValuesProject extends Omit<Project, "from" | "to"> {
  from: Moment;
  to: Moment;
}

interface SubmitValues extends Omit<Values, "birthday" | "projects"> {
  birthday: Moment;
  projects: SubmitValuesProject[];
}

interface OuterProps {
  handleSubmit2: (values: SubmitValues) => void;
  initialValue: SubmitValues;
}

export type ResumeFormProps = FormikProps<Values> & OuterProps;

const ResumeForm: React.FC<ResumeFormProps> = ({
  handleSubmit,
  initialValue,
  values: {
    birthday: { month, year },
    projects
  }
}) => {
  React.useEffect(() => {
    handleSubmit();

    const timer = setInterval(() => {
      handleSubmit();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [handleSubmit]);

  return (
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
                    <LabeledRadioFieldList
                      fields={[
                        {
                          key: "birthday.year",
                          value: (
                            <Field
                              component={SelectLabel}
                              label="年"
                              name="birthday.year"
                            >
                              {Array.from(Array(100).keys())
                                .reverse()
                                .map(value => (
                                  <option
                                    key={value}
                                    value={moment().year() - value}
                                  >
                                    {moment().year() - value}
                                  </option>
                                ))}
                            </Field>
                          )
                        },
                        {
                          key: "birthday.month",
                          value: (
                            <Field
                              component={SelectLabel}
                              label="月"
                              name="birthday.month"
                            >
                              {moment.months().map((month, index) => (
                                <option key={month} value={index}>
                                  {index + 1}
                                </option>
                              ))}
                            </Field>
                          )
                        },
                        {
                          key: "birthday.date",
                          value: (
                            <Field
                              component={SelectLabel}
                              label="日"
                              name="birthday.date"
                            >
                              {Array.from(
                                Array(
                                  moment()
                                    .year(year)
                                    .month(month)
                                    .endOf("month")
                                    .date()
                                ).keys()
                              ).map(value => (
                                <option key={value} value={value + 1}>
                                  {value + 1}
                                </option>
                              ))}
                            </Field>
                          )
                        }
                      ]}
                    />
                  ),
                  key: "birthday",
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
            <Field component={Textarea} name="selfIntroduction" />
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
                                <LabeledRadioFieldList
                                  fields={[
                                    {
                                      key: "projects.from.year",
                                      value: (
                                        <Field
                                          component={SelectLabel}
                                          label="年"
                                          name={`projects.${index}.from.year`}
                                        >
                                          {Array.from(Array(50).keys())
                                            .reverse()
                                            .map(value => (
                                              <option
                                                key={value}
                                                value={
                                                  moment().year() - value + 5
                                                }
                                              >
                                                {moment().year() - value + 5}
                                              </option>
                                            ))}
                                        </Field>
                                      )
                                    },
                                    {
                                      key: "projects.from.month",
                                      value: (
                                        <Field
                                          component={SelectLabel}
                                          label="月"
                                          name={`projects.${index}.from.month`}
                                        >
                                          {moment
                                            .months()
                                            .map((month, index) => (
                                              <option key={month} value={index}>
                                                {index + 1}
                                              </option>
                                            ))}
                                        </Field>
                                      )
                                    }
                                  ]}
                                />
                              ),
                              key: "projects.from",
                              term: "開始"
                            },
                            {
                              description: (
                                <LabeledRadioFieldList
                                  fields={[
                                    {
                                      key: "projects.to.year",
                                      value: (
                                        <Field
                                          component={SelectLabel}
                                          label="年"
                                          name={`projects.${index}.to.year`}
                                        >
                                          {Array.from(Array(50).keys())
                                            .reverse()
                                            .map(value => (
                                              <option
                                                key={value}
                                                value={
                                                  moment().year() - value + 5
                                                }
                                              >
                                                {moment().year() - value + 5}
                                              </option>
                                            ))}
                                        </Field>
                                      )
                                    },
                                    {
                                      key: "projects.to.month",
                                      value: (
                                        <Field
                                          component={SelectLabel}
                                          label="月"
                                          name={`projects.${index}.to.month`}
                                        >
                                          {moment
                                            .months()
                                            .map((month, index) => (
                                              <option key={month} value={index}>
                                                {index + 1}
                                              </option>
                                            ))}
                                        </Field>
                                      )
                                    }
                                  ]}
                                />
                              ),
                              key: "projects.to",
                              term: "終了"
                            },
                            {
                              description: (
                                <Field
                                  component={Input}
                                  name={`projects.${index}.title`}
                                  placeholder={`プロジェクト${index + 1}`}
                                />
                              ),
                              key: "projects.title",
                              term: "プロジェクト名"
                            },
                            {
                              description: (
                                <Field
                                  component={Textarea}
                                  name={`projects.${index}.content`}
                                />
                              ),
                              key: "projects.content",
                              term: "業務内容"
                            },
                            {
                              description: (
                                <Field
                                  component={Input}
                                  name={`projects.${index}.role`}
                                  placeholder="PG"
                                />
                              ),
                              key: "projects.role",
                              term: "役割"
                            },
                            {
                              description: (
                                <React.Fragment>
                                  <Field
                                    component={Input}
                                    min={0}
                                    name={`projects.${index}.team`}
                                    placeholder="0"
                                    type="number"
                                  />
                                  名
                                </React.Fragment>
                              ),
                              key: "projects.team",
                              term: "規模"
                            },
                            {
                              description: (
                                <FieldArray
                                  name={`projects.${index}.languageList`}
                                  render={({ push, remove }) => {
                                    const { languageList } = projects[index];

                                    return (
                                      <SmallFieldListBlock
                                        fields={languageList.map(
                                          (_, index2) => ({
                                            key: `projects.${index}.languageList.${index2}`,
                                            value: (
                                              <FieldWithIconBlock>
                                                <Field
                                                  component={Input}
                                                  key="field"
                                                  name={`projects.${index}.languageList.${index2}`}
                                                  placeholder="HTML"
                                                />
                                                <button
                                                  key="icon"
                                                  onClick={() => {
                                                    remove(index2);
                                                  }}
                                                  style={{ height: 20 }}
                                                  type="button"
                                                >
                                                  <Icon
                                                    iconType={FiMinusSquare}
                                                  />
                                                </button>
                                              </FieldWithIconBlock>
                                            )
                                          })
                                        )}
                                        footer={
                                          <button
                                            onClick={() => {
                                              const { projects } = initialValue;
                                              const {
                                                languageList
                                              } = projects[0];

                                              push(languageList[0]);
                                            }}
                                            style={{ height: 20 }}
                                            type="button"
                                          >
                                            <Icon iconType={FiPlusSquare} />
                                          </button>
                                        }
                                      />
                                    );
                                  }}
                                />
                              ),
                              key: "projects.languageList",
                              term: "使用言語"
                            }
                          ]}
                          key="fieldList"
                        />
                        <Button
                          key="footer"
                          onClick={() => {
                            remove(index);
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
                        const { projects } = initialValue;

                        push(
                          projects.map(({ from, to, ...projects }) => ({
                            ...projects,
                            from: {
                              month: from.month(),
                              year: from.year()
                            },
                            to: {
                              month: to.month(),
                              year: to.year()
                            }
                          }))[0]
                        );
                      }}
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
    </Form>
  );
};

export default withFormik<OuterProps, Values>({
  handleSubmit: (
    { birthday: { date, month, year }, projects, ...values },
    { props: { handleSubmit2 } }
  ) => {
    handleSubmit2({
      ...values,
      birthday: moment()
        .year(year)
        .month(month)
        .date(date)
        .startOf("date"),
      projects: projects.map(
        ({
          from: { month: fromMonth, year: fromYear },
          to: { month: toMonth, year: toYear },
          ...project
        }) => ({
          ...project,
          from: moment()
            .year(fromYear)
            .month(fromMonth)
            .startOf("month"),
          to: moment()
            .year(toYear)
            .month(toMonth)
            .startOf("month")
        })
      )
    });
  },
  mapPropsToValues: ({
    initialValue: { birthday, projects, ...initialValue }
  }) => ({
    ...initialValue,
    birthday: {
      date: birthday.date(),
      month: birthday.month(),
      year: birthday.year()
    },
    projects: projects.map(({ from, to, ...projects }) => ({
      ...projects,
      from: {
        month: from.month(),
        year: from.year()
      },
      to: {
        month: to.month(),
        year: to.year()
      }
    }))
  })
})(ResumeForm);
