import Icon from 'components/atoms/Icon';
import InputClipboardBlock from 'components/molecules/InputClipboardBlock';
import MenuList from 'components/molecules/MenuList';
import SubMenuList from 'components/molecules/SubMenuList';
import MenuBarBlock from 'components/organisms/MenuBarBlock';
import { saveAs } from 'file-saver';
import { TCreatedPdf } from 'pdfmake/build/pdfmake';
import React from 'react';
import { FaAmazon } from 'react-icons/fa';
import swal2 from 'sweetalert';
import uniqid from 'uniqid';
import swal from '@sweetalert/with-react';

export interface MenuProps {
  json: string;
  pdf?: TCreatedPdf;
  xlsx: any;
}

const Menu: React.FC<MenuProps> = ({ json, pdf, xlsx }) => {
  const ref = React.useRef<HTMLInputElement>(null);
  const [currentPdf, setCurrentPdf] = React.useState<typeof pdf>(pdf);
  const id = React.useMemo(() => uniqid(), []);

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
                  // {
                  //   handleClick: () => {
                  //     const blob = new Blob([json], {
                  //       type: 'application/json'
                  //     });

                  //     saveAs(blob, 'resumake.json');
                  //   },
                  //   term: '名前を付けてレジュメイクデータを保存'
                  // },
                  // {
                  //   handleClick: () => {
                  //     const { current } = ref;

                  //     if (!current) {
                  //       return;
                  //     }

                  //     current.click();
                  //   },
                  //   term: 'レジュメイクデータを開く'
                  // },
                  {
                    handleClick: () => {
                      saveAs(
                        new Blob([xlsx], { type: 'application/octet-stream' }),
                        'resume.xlsx'
                      );
                    },
                    term: '名前を付けてエクセルデータを保存'
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
                        buttons: ['キャンセル', '寄付する'],
                        content: (
                          <div>
                            <div style={{ paddingBottom: 10 }}>
                              Amazonギフト券にてよろしくお願いします。
                              <Icon iconType={FaAmazon} size={20} />
                            </div>
                            <InputClipboardBlock
                              id={id}
                              value="piro.haniwa@gmail.com"
                            />
                          </div>
                        ) as any,
                        title: '寄付について'
                      }).then(value => {
                        if (!value) {
                          return;
                        }

                        window.open(
                          'https://www.amazon.co.jp/Amazon%E3%82%AE%E3%83%95%E3%83%88%E5%88%B8-E%E3%83%A1%E3%83%BC%E3%83%AB%E3%82%BF%E3%82%A4%E3%83%97/dp/BT00DHI8G4'
                        );
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
