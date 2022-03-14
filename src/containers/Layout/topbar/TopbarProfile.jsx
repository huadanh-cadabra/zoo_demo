import React, { useState } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
import { useTranslation } from 'react-i18next';
const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

const TopbarProfile = () => {
  const { t } = useTranslation('common');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="topbar__profile">
      <button type="button" className="topbar__avatar" onClick={setIsCollapsed}>
        <img className="topbar__avatar-img" src={Ava} alt="avatar" />
        <p className="topbar__avatar-name">チャン・タイン・タム</p>
        <DownIcon className="topbar__icon" />
      </button>
      {isCollapsed && (
        <button
          type="button"
          aria-label="button collapse"
          className="topbar__back"
          onClick={handleToggleCollapse}
        />
      )}
      <Collapse isOpen={isCollapsed} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <TopbarMenuLink title={t('logout')} icon="exit" path="/" />
        </div>
      </Collapse>
    </div>
  );
};

export default TopbarProfile;
