import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';
import { useTranslation } from 'react-i18next';
const SidebarContent = ({ onClick }) => {
  const { t } = useTranslation('common');
  const handleHideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarCategory title={t('member')} icon="users">
          <SidebarLink title={t('member list')} route="/members" onClick={handleHideSidebar} />
        </SidebarCategory>
        <SidebarCategory title={t('meeting')} icon="calendar-full">
          <SidebarLink title={t('meeting list')} route="/meetings" onClick={handleHideSidebar} />
        </SidebarCategory>
      </ul>
    </div>
  );
};

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SidebarContent;
