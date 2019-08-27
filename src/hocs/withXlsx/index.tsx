import { Moment } from 'moment';
import React from 'react';
import xlsx, { WritingOptions } from 'xlsx';

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

export interface WithXlsx {
  createXlsx: (values: {
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
  }) => any;
}

function withXlsx<TOutter>(
  WrappedComponent: React.FC<TOutter & WithXlsx>
): React.FC<any> {
  const Xlsx: React.FC<TOutter & WithXlsx> = props => {
    const createXlsx = React.useCallback<WithXlsx['createXlsx']>(values => {
      const workBook = xlsx.utils.book_new();
      const name = 'スキルシート';
      const columnLength = 17;

      const merges = [
        // header
        { s: { r: 0, c: 0 }, e: { r: 0, c: columnLength - 1 } },
        // 個人情報
        ...Array(4)
          .fill(null)
          .flatMap((_, index) => {
            const row = index + 1;

            return [
              { s: { r: row, c: 0 }, e: { r: row, c: 1 } },
              { s: { r: row, c: 2 }, e: { r: row, c: 4 } },
              { s: { r: row, c: 5 }, e: { r: row, c: 6 } },
              {
                s: { r: row, c: 7 },
                e: { r: row, c: columnLength - 1 }
              }
            ];
          }),
        // padding
        { s: { r: 5, c: 0 }, e: { r: 5, c: columnLength - 1 } },
        // 得意なこと
        ...Array(3)
          .fill(null)
          .flatMap((_, index) => {
            const row = index + 6;

            return [
              { s: { r: row, c: 0 }, e: { r: row, c: 1 } },
              {
                s: { r: row, c: 2 },
                e: { r: row, c: columnLength - 1 }
              }
            ];
          }),
        // padding
        { s: { r: 9, c: 0 }, e: { r: 9, c: columnLength - 1 } },
        // 自己PR
        { s: { r: 10, c: 0 }, e: { r: 10, c: 1 } },
        {
          s: { r: 10, c: 2 },
          e: { r: 10, c: columnLength - 1 }
        },
        // padding
        {
          s: { r: 11, c: 0 },
          e: { r: 11, c: columnLength - 1 }
        }
      ];

      const row = Array(columnLength).fill('余白');
      const data = [];

      for (
        let i = 0;
        i < Array.from(new Set(merges.map(({ s: { r } }) => r))).length;
        i++
      ) {
        data.push(row.slice());
      }

      // header
      data[0][0] = 'スキルシート';

      // 個人情報
      data[1][0] = '技術者コード';
      data[1][2] = 'ENG0000000000';
      data[1][5] = '所属';
      data[1][7] = '弊社個人事業主';
      data[2][0] = '年齢';
      data[2][2] = '満29歳';
      data[2][5] = '性別';
      data[2][7] = '男性';
      data[3][0] = '資格';
      data[3][2] = '基本情報技術者';
      data[3][5] = '学歴';
      data[3][7] = '某私立大学 理工系 卒業';
      data[4][0] = '稼働';
      data[4][2] = '2019年10月1日〜';
      data[4][5] = '最寄り駅';
      data[4][7] = '山手線・京浜東北線 西日暮里駅';

      // 得意なこと
      data[6][0] = '得意分野';
      data[6][2] = '実装';
      data[7][0] = '得意技術';
      data[7][2] = 'HTML, CSS, JavaScript';
      data[8][0] = '得意業務';
      data[8][2] = 'Webアプリケーション開発';

      // 自己PR
      data[10][0] = '自己PR';
      data[10][2] = 'testtest';

      const workSheet = xlsx.utils.aoa_to_sheet(data);

      workSheet['!merges'] = merges;

      xlsx.utils.book_append_sheet(workBook, workSheet, name);

      const writingOptions: WritingOptions = {
        type: 'array'
      };

      return xlsx.write(workBook, writingOptions);
    }, []);

    return <WrappedComponent {...props} createXlsx={createXlsx} />;
  };

  return Xlsx;
}

export default withXlsx;
