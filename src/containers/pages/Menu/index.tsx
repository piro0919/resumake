import MenuBarBlock from 'components/organisms/MenuBarBlock';
import React from 'react';

const Menu: React.FC = () => {
  return (
    <MenuBarBlock>
      <dl>
        <dt>ファイル</dt>
        <dd>
          <dl style={{ background: "#eee", display: "none" }}>
            <dt>名前を付けてレジュメイクデータを保存</dt>
            <dd />
            <dt>保存</dt>
            <dd />
            <dt>名前を付けて保存</dt>
            <dd />
          </dl>
        </dd>
        <dt>フォーム</dt>
        <dd>
          <dl style={{ background: "#eee", display: "none" }}>
            <dt>更新</dt>
            <dd />
            <dt>自動更新</dt>
            <dd />
          </dl>
        </dd>
      </dl>
    </MenuBarBlock>
  );
};

export default Menu;
