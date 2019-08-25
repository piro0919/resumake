import MenuList from 'components/molecules/MenuList';
import SubMenuList from 'components/molecules/SubMenuList';
import MenuBarBlock from 'components/organisms/MenuBarBlock';
import { saveAs } from 'file-saver';
import { TCreatedPdf } from 'pdfmake/build/pdfmake';
import React from 'react';
import swal2 from 'sweetalert';
import swal from '@sweetalert/with-react';

export interface MenuProps {
  json: string;
  pdf?: TCreatedPdf;
}

const Menu: React.FC<MenuProps> = ({ json, pdf }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [currentPdf, setCurrentPdf] = React.useState<typeof pdf>(pdf);

  React.useEffect(() => {
    if (!pdf) {
      return;
    }

    setCurrentPdf(pdf);
  }, [pdf]);

  return (
    <MenuBarBlock>
      <input ref={ref} style={{ display: 'none' }} type="file" />
      <MenuList
        menus={[
          {
            description: (
              <SubMenuList
                subMenus={[
                  {
                    handleClick: () => {
                      const blob = new Blob([json], {
                        type: 'application/json'
                      });

                      saveAs(blob, 'resumake.json');
                    },
                    term: '名前を付けてレジュメイクデータを保存'
                  },
                  {
                    handleClick: () => {
                      const { current } = ref;

                      if (!current) {
                        return;
                      }

                      current.click();
                    },
                    term: 'レジュメイクデータを開く'
                  },
                  {
                    handleClick: () => {
                      if (!currentPdf) {
                        return;
                      }

                      currentPdf.download('resume.pdf');
                    },
                    term: '名前を付けて保存'
                  }
                ]}
              />
            ),
            term: 'ファイル'
          },
          {
            description: (
              <SubMenuList
                subMenus={[
                  {
                    handleClick: () => {
                      window.open(
                        'https://github.com/piro0919/resumake/issues/new?assignees=&labels=&template=bug_report.md&title='
                      );
                    },
                    term: 'バグを報告'
                  },
                  {
                    handleClick: () => {
                      window.open(
                        'https://github.com/piro0919/resumake/issues/new?assignees=&labels=&template=feature_request.md&title='
                      );
                    },
                    term: '新機能を要求'
                  },
                  {
                    handleClick: () => {
                      window.open('https://github.com/piro0919/resumake');
                    },
                    term: 'レジュメイクについて'
                  },
                  {
                    handleClick: () => {
                      window.open('https://kk-web.link/');
                    },
                    term: '開発者について'
                  },
                  {
                    handleClick: () => {
                      (swal as typeof swal2)({
                        content: <div>test</div> as any,
                        title: '寄付について'
                      });
                    },
                    term: '寄付について'
                  }
                ]}
              />
            ),
            term: 'ヘルプ'
          }
        ]}
      />
    </MenuBarBlock>
  );
};

export default Menu;
