import moment, { Moment } from 'moment';
import pdfMake, { PageSize, TCreatedPdf } from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import React from 'react';

interface Project {
  content: string;
  dbList: string[];
  from: Moment;
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
  to: Moment;
}

export interface WithPdf {
  createPdf: (values: {
    belongs?: string;
    birthday: Moment;
    education: string;
    engineerCode?: string;
    expertise: string;
    nearestStation: string;
    operation: Moment;
    projects: Project[];
    qualification: string;
    selfIntroduction: string;
    sex: 'man' | 'woman';
    specialty: string;
    specialtyBusiness: string;
  }) => TCreatedPdf;
}

function withPdf<TOutter>(
  WrappedComponent: React.FC<TOutter & WithPdf>
): React.FC<TOutter & WithPdf> {
  const Pdf: React.FC<TOutter & WithPdf> = props => {
    React.useEffect(() => {
      pdfMake.fonts = {
        ipam: {
          bold: 'ipam.ttf',
          bolditalics: 'ipam.ttf',
          normal: 'ipam.ttf',
          italics: 'ipam.ttf'
        }
      };
      pdfMake.vfs = pdfFonts.pdfMake.vfs;
    }, []);

    const createPdf = React.useCallback<WithPdf['createPdf']>(values => {
      const {
        belongs,
        birthday,
        education,
        engineerCode,
        expertise,
        nearestStation,
        operation,
        projects,
        qualification,
        selfIntroduction,
        sex,
        specialty,
        specialtyBusiness
      } = values;

      const projectRows: typeof projects = [];

      projects.forEach(project => {
        projectRows.push(project);
        projectRows.push(project);
      });

      const firstTableBody = [
        {
          key: '技術者コード',
          value: engineerCode
        },
        {
          key: '所属',
          value: belongs
        },
        {
          key: '年齢',
          value: `満${moment().diff(birthday, 'years')}歳`
        },
        {
          key: '性別',
          value: `${sex === 'man' ? '男' : '女'}性`
        },
        {
          key: '資格',
          value: qualification
        },
        {
          key: '学歴',
          value: education
        },
        {
          key: '稼働',
          value: operation.format('YYYY年M月D日〜')
        },
        {
          key: '最寄り駅',
          value: nearestStation
        }
      ].filter(({ value }) => value !== undefined);

      return pdfMake.createPdf({
        content: [
          {
            alignment: 'center',
            fontSize: 12,
            margin: [0, 0, 0, 5],
            style: 'header',
            text: 'スキルシート'
          },
          {
            layout: {
              fillColor: (_: number, __: any, columnIndex: number) =>
                columnIndex % 2 ? null : '#ccf',
              hLineWidth: (index: number, { table: { body } }: any) =>
                !index || index === body.length ? 1 : 0.5,
              vLineWidth: (index: number, { table: { widths } }: any) =>
                !index || index === widths.length ? 1 : 0.5
            },
            margin: [0, 0, 0, 5],
            table: {
              body: firstTableBody
                .filter((_, index) => !(index % 2))
                .map(({ key, value }, index) => {
                  const columns = [key, value];

                  if (firstTableBody.length <= index * 2 + 1) {
                    return [...columns, '', ''];
                  }

                  const { key: nextKey, value: nextValue } = firstTableBody[
                    index * 2 + 1
                  ];

                  return [...columns, nextKey, nextValue];
                }),
              widths: [50, '*', 50, '*']
            }
          },
          {
            layout: {
              fillColor: (_: number, __: any, columnIndex: number) =>
                columnIndex % 2 ? null : '#ccf',
              hLineWidth: (index: number, { table: { body } }: any) =>
                !index || index === body.length ? 1 : 0.5,
              vLineWidth: (index: number, { table: { widths } }: any) =>
                !index || index === widths.length ? 1 : 0.5
            },
            margin: [0, 0, 0, 5],
            table: {
              body: [
                ['得意分野', specialty],
                ['得意技術', expertise],
                ['得意業務', specialtyBusiness]
              ],
              widths: [50, '*']
            }
          },
          {
            layout: {
              fillColor: (_: number, __: any, columnIndex: number) =>
                columnIndex % 2 ? null : '#ccf',
              hLineWidth: (index: number, { table: { body } }: any) =>
                !index || index === body.length ? 1 : 0.5,
              vLineWidth: (index: number, { table: { widths } }: any) =>
                !index || index === widths.length ? 1 : 0.5
            },
            margin: [0, 0, 0, 5],
            table: {
              body: [['自己PR', selfIntroduction]],
              widths: [50, '*']
            }
          },
          {
            layout: {
              fillColor: (rowIndex: number, _: any, columnIndex: number) =>
                rowIndex <= 1 || (columnIndex === 0 && rowIndex !== 12 + 2)
                  ? '#ccf'
                  : null,
              hLineWidth: (index: number, { table: { body } }: any) =>
                !index || index === body.length ? 1 : 0.5,
              vLineWidth: (index: number, { table: { widths } }: any) =>
                !index || index === widths.length ? 1 : 0.5
            },
            table: {
              body: [
                [
                  {
                    colSpan: 4,
                    rowSpan: 2,
                    text: '期間'
                  },
                  '',
                  '',
                  '',
                  {
                    rowSpan: 2,
                    text: '業務内容'
                  },
                  {
                    rowSpan: 2,
                    text: `役割
                          規模`
                  },
                  {
                    rowSpan: 2,
                    text: '使用言語'
                  },
                  {
                    rowSpan: 2,
                    text: 'DB'
                  },
                  {
                    rowSpan: 2,
                    text: 'サーバOS'
                  },
                  {
                    rowSpan: 2,
                    text: `FW・MW
                          ツール等`
                  },
                  {
                    colSpan: 7,
                    text: '担当工程'
                  },
                  '',
                  '',
                  '',
                  '',
                  '',
                  ''
                ],
                [
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '',
                  '要件定義',
                  '基本設計',
                  '詳細設計',
                  '実装・単体',
                  '結合テスト',
                  '総合テスト',
                  '保守・運用'
                ],
                ...projectRows.map(
                  (
                    {
                      content,
                      dbList,
                      from,
                      fwMwToolList,
                      languageList,
                      pageBreakAfter,
                      process: {
                        requirementDefinition,
                        basicDesign,
                        detailedDesign,
                        mountingSingleUnit,
                        combinedTest,
                        comprehensiveTest,
                        maintenanceAndOperation
                      },
                      role,
                      serverOsList,
                      team,
                      title,
                      to
                    },
                    index
                  ) =>
                    !(index % 2)
                      ? [
                          {
                            rowSpan: 2,
                            text: index / 2 + 1
                          },
                          from.format(`YYYY年MM月`),
                          '-',
                          to.format(`YYYY年MM月`),
                          title,
                          role,
                          {
                            rowSpan: 2,
                            text: languageList.join('\n') || '-'
                          },
                          {
                            rowSpan: 2,
                            text: dbList.join('\n') || '-'
                          },
                          {
                            rowSpan: 2,
                            text: serverOsList.join('\n') || '-'
                          },
                          {
                            rowSpan: 2,
                            text: fwMwToolList.join('\n') || '-'
                          },
                          {
                            rowSpan: 2,
                            text: requirementDefinition ? '●' : ''
                          },
                          {
                            rowSpan: 2,
                            text: basicDesign ? '●' : ''
                          },
                          {
                            rowSpan: 2,
                            text: detailedDesign ? '●' : ''
                          },
                          {
                            rowSpan: 2,
                            text: mountingSingleUnit ? '●' : ''
                          },
                          {
                            rowSpan: 2,
                            text: combinedTest ? '●' : ''
                          },
                          {
                            rowSpan: 2,
                            text: comprehensiveTest ? '●' : ''
                          },
                          {
                            rowSpan: 2,
                            text: maintenanceAndOperation ? '●' : ''
                          }
                        ]
                      : [
                          '',
                          {
                            colSpan: 3,
                            text: `(${to.diff(from, 'months') + 1}ヶ月間)`
                          },
                          '',
                          '',
                          content,
                          {
                            text: `チーム\n${team}名`
                          },
                          '',
                          '',
                          '',
                          '',
                          '',
                          '',
                          '',
                          '',
                          '',
                          '',
                          ''
                        ].map(cell =>
                          pageBreakAfter
                            ? {
                                ...(typeof cell === 'string'
                                  ? { text: cell }
                                  : cell),
                                pageBreak: 'after'
                              }
                            : cell
                        )
                )
              ],
              headerRows: 2,
              widths: [
                'auto',
                30,
                'auto',
                30,
                '*',
                20,
                'auto',
                'auto',
                'auto',
                'auto',
                5,
                5,
                5,
                5,
                5,
                5,
                5
              ]
            }
          }
        ],
        defaultStyle: {
          font: 'ipam',
          fontSize: 6,
          lineHeight: 1.25
        },
        pageMargins: [15, 5, 15, 5],
        pageSize: 'A4' as PageSize.A4
      });
    }, []);

    return <WrappedComponent {...props} createPdf={createPdf} />;
  };

  return Pdf;
}

export default withPdf;
