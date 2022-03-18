import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon';
import { useTranslation } from 'react-i18next';
const ForgotForm = ({ handleSubmit }) => {
  const { t } = useTranslation('common');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__form-group">
        <span className="form__form-group-label"> {t('email')} </span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <EmailOutlineIcon />
          </div>
          <Field
            name="email"
            component="input"
            type="text"
            placeholder={t('email')}
          />
        </div>
      </div>
      
      
      <Link className="btn btn-primary account__btn account__btn--small" to="/log-in">{t('login')}</Link>
    </form>
  );
};

ForgotForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'for_got_form',
})(ForgotForm);
