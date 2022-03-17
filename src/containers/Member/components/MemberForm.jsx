import React, { useState } from "react";
import { Button, ButtonToolbar, Card, CardBody, Col } from "reactstrap";
import PropTypes from "prop-types";
import EyeIcon from "mdi-react/EyeIcon";
import { useForm } from "react-hook-form";
import { SelectField } from "@/shared/components/form/Select";
import { emailPatter, urlPattern } from "@/shared/helpers";
import showResults from "@/shared/helpers/Show";
import { FormField } from "@/shared/components/form/FormField";
import { useTranslation } from "react-i18next";

const MemberForm = ({ model, action, isAboveError, isHorizontal }) => {
  const { t } = useTranslation("common");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  

  const { handleSubmit, reset, control, register, errors } =
    useForm({
      defaultValues:{
        first_name: model ? model.first_name : "",
        last_name: model ? model.last_name : "",
        email: model ? model.email : "",
        username: model ? model.username : "",
      }
    });
  
  const showPassword = () => {
    setIsPasswordShown((prevState) => !prevState);
  };

  const onSubmit = (data) => showResults(data);

  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <CardBody>
          <form
            className={`form ${isHorizontal && "form--horizontal"}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form__form-group">
              <span className="form__form-group-label">
                {t("first_name")}
                <span className="form__label-required">(*)</span>{" "}
              </span>
              <div className="form__form-group-field">
              <FormField
                 name="first_name"
                 control={control}
                 component="input"
                 errors={errors}
                 rules={{ required: t("this is required field") }}
                 isAboveError={isAboveError}
               />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">
                {t("last_name")}
                <span className="form__label-required">(*)</span>
              </span>
              <div className="form__form-group-field">
                <FormField
                 
                  name="last_name"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{ required: t("this is required field") }}
                  isAboveError={isAboveError}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">
                {t("email")} <span className="form__label-required">(*)</span>
              </span>
              <div className="form__form-group-field">
                <FormField
                  name="email"
                  control={control}
                  component="input"
                  errors={errors}
                  rules={{
                    required: t("this is required field"),
                    pattern: {
                      value: emailPatter,
                      message: t("entered value does not match email format"),
                    },
                  }}
                  isAboveError={isAboveError}
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">{t("username")}</span>
              <div className="form__form-group-field">
                <FormField
                  name="username"
                  control={control}
                  component="input"
                  errors={errors}
                  isAboveError={isAboveError}
                  disabled
                />
              </div>
            </div>

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

MemberForm.propTypes = {
  isHorizontal: PropTypes.bool,
  isAboveError: PropTypes.bool,
};

MemberForm.defaultProps = {
  isHorizontal: true,
  isAboveError: false,
};

export default MemberForm;
