import React, { useState } from "react";
import { Button, ButtonToolbar, Card, CardBody, Col, Input } from "reactstrap";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import showResults from "@/shared/helpers/Show";
import { useTranslation } from "react-i18next";
import CheckIcon from "mdi-react/CheckIcon";

const PermissionForm = ({
  model,
  action,
  isAboveError,
  isHorizontal,
  formTitle,
}) => {
  const { t } = useTranslation("common");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const { handleSubmit, reset, control, register, errors } = useForm({
    defaultValues: {
      first_name: model ? model.first_name : "",
      last_name: model ? model.last_name : "",
      email: model ? model.email : "",
      username: model ? model.username : "",
    },
  });

  const showPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const onSubmit = (data) => showResults(data);
  console.log(model);
  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{formTitle}</h5>
          </div>
          <form
            className={`form ${isHorizontal && "form--horizontal"}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__form-group">
              <span className="form__form-group-label">{t("module")}</span>
              <div className="form__form-group-field">{t("module")}</div>
            </div>

            {model?.modules.map((module) => (
              <div className="form__form-group">
                <span className="form__form-group-label">
                  {module?.name}
                </span>
                <div className="form__form-group-field">
                  {module?.permissions.map((permission) => (
                    <label
                      htmlFor={module.id+permission.action}
                    >
                      <input
                        className="checkbox-btn__checkbox"
                        type="checkbox"
                        name={module.id+permission.action}
                        id={module.id+permission.action}
                        defaultChecked={permission.checked === 1}
                      />
                      <span className="checkbox-btn__checkbox-custom">
                        <CheckIcon />
                      </span>
                      <span className="checkbox-btn__label">
                        {t(permission.action)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">
                {t("submit")}
              </Button>
              <Button type="button" onClick={reset}>
                {t("cancel")}
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

PermissionForm.propTypes = {
  isHorizontal: PropTypes.bool,
  isAboveError: PropTypes.bool,
  formTitle: PropTypes.string,
  model: PropTypes.objectOf(
    PropTypes.shape({
      modules: PropTypes.arrayOf(PropTypes.shape()),
    })
  ),
};

PermissionForm.defaultProps = {
  isHorizontal: true,
  isAboveError: false,
  formTitle: "",
};

export default PermissionForm;
