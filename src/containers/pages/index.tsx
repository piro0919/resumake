import ContentBlock from 'components/organisms/ContentBlock';
import WrapperBlock from 'components/templates/WrapperBlock';
import withClientSize, { WithClientSize } from 'hocs/withClientSize';
import moment from 'moment';
import pdfMake, { PageSize } from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Menu from './Menu';
import ResumeForm, { ResumeFormProps } from './ResumeForm';
import ResumeIframe from './ResumeIframe';

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

  const [values, setValues] = React.useState<typeof initialValue>(initialValue);

  const handleSubmit = React.useCallback<ResumeFormProps['handleSubmit2']>(
    values => {
      setValues(values);
    },
    [setValues]
  );

  const ref = React.useRef(values);

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

  const pdf = React.useMemo(() => {
    if (JSON.stringify(ref.current) === JSON.stringify(values)) {
      return;
    }

    const {
      belongs,
      birthday,
      education,
      engineerCode,
      expertise,
      nearestStation,
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
            hLineWidth: (index: number, node: any) =>
              !index || index === node.table.body.length ? 1 : 0.5,
            vLineWidth: (index: number, node: any) =>
              !index || index === node.table.widths.length ? 1 : 0.5
          },
          margin: [0, 0, 0, 5],
          table: {
            body: [
              ['技術者コード', engineerCode, '所属', belongs],
              [
                '年齢',
                `満${moment().diff(birthday, 'years')}歳`,
                '性別',
                `${sex === 'man' ? '男' : '女'}性`
              ],
              ['資格', qualification, '学歴', education],
              ['稼働', '2019年10月1日～', '最寄り駅', nearestStation]
            ],
            widths: [50, '*', 50, '*']
          }
        },
        {
          layout: {
            fillColor: (_: number, __: any, columnIndex: number) =>
              columnIndex % 2 ? null : '#ccf',
            hLineWidth: (index: number, node: any) =>
              index === 0 || index === node.table.body.length ? 1 : 0.5,
            vLineWidth: (index: number, node: any) =>
              index === 0 || index === node.table.widths.length ? 1 : 0.5
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
            hLineWidth: (index: number, node: any) =>
              index === 0 || index === node.table.body.length ? 1 : 0.5,
            vLineWidth: (index: number, node: any) =>
              index === 0 || index === node.table.widths.length ? 1 : 0.5
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
            hLineWidth: (index: number, node: any) =>
              index === 0 || index === node.table.body.length ? 1 : 0.5,
            vLineWidth: (index: number, node: any) =>
              index === 0 || index === node.table.widths.length ? 1 : 0.5
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
  }, [ref, values]);

  React.useEffect(() => {
    ref.current = values;
  }, [ref, values]);

  return (
    <WrapperBlock clientHeight={clientHeight} clientWidth={clientWidth}>
      <Menu json={JSON.stringify(values)} key="menu" pdf={pdf} />
      <ContentBlock key="form">
        <ResumeForm handleSubmit2={handleSubmit} initialValue={initialValue} />
      </ContentBlock>
      <ResumeIframe key="pdf" pdf={pdf} />
    </WrapperBlock>
  );
};

export default withClientSize(Pages);
