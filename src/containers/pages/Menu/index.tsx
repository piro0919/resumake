import MenuList from 'components/molecules/MenuList';
import MenuBarBlock from 'components/organisms/MenuBarBlock';
import React from 'react';

const Menu: React.FC = () => {
  return (
    <MenuBarBlock>
      <MenuList
        menus={[
          {
            description: (
              <ul>
                <li>名前を付けてレジュメイクデータを保存</li>
                <li>保存</li>
                <li>名前を付けて保存</li>
              </ul>
            ),
            term: 'ファイル'
          },
          {
            description: (
              <ul>
                <li>更新</li>
                <li>自動更新</li>
              </ul>
            ),
            term: 'フォーム'
          }
        ]}
      />
    </MenuBarBlock>
  );
};

export default Menu;
