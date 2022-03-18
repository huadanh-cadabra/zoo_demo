import React from 'react';
import ForgotForm from './components/ForgotForm';
import { useTranslation } from 'react-i18next';
const Forgot = () => {
  const { t } = useTranslation('common');
  return (
    <div className="account">
    <div className="account__wrapper">
      <div className="account__logo">
        </div>
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">
            <span className="account__title-accent">{t('meeting management')}</span>
          </h3>
         
          <h4 className="account__subhead subhead">{t('forgot a password')}</h4>
        </div>
        <ForgotForm onSubmit/>
        
        
      </div>
    </div>
  </div>
  );
}

export default Forgot;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
