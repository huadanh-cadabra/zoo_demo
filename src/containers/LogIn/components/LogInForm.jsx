import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import renderCheckBoxField from '../../../shared/components/form/CheckBox';
import { useTranslation } from 'react-i18next';
const LogInForm = ({ handleSubmit }) => {
  const { t } = useTranslation('common');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__form-group">
        <span className="form__form-group-label"> {t('username')} </span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <AccountOutlineIcon />
          </div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder={t('username')}
          />
        </div>
      </div>
      <div className="form__form-group">
        <span className="form__form-group-label">{t('password')}</span>
        <div className="form__form-group-field">
          <div className="form__form-group-icon">
            <KeyVariantIcon />
          </div>
          <Field
            name="password"
            component="input"
            type={isPasswordShown ? 'text' : 'password'}
            placeholder={t('password')}
          />
          <button
            className={`form__form-group-button${isPasswordShown ? ' active' : ''}`}
            onClick={() => showPassword()}
            type="button"
          ><EyeIcon />
          </button>
        </div>
        <div className="account__forgot-password">
          <a href="/">{t('forgot a password')}</a>
        </div>
      </div>
      <div className="form__form-group">
        <div className="form__form-group-field">
          <Field
            name="remember_me"
            component={renderCheckBoxField}
            label={t('remember me')}
          />
        </div>
      </div>
      <Link className="btn btn-primary account__btn account__btn--small" to="/members">{t('login')}</Link>
    </form>
  );
};

LogInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'log_in_form',
})(LogInForm);
