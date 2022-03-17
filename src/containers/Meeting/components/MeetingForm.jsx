import React, { useState } from "react";
import {
  Button,
  ButtonToolbar,
  Card,
  CardBody,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import PropTypes from "prop-types";
import EyeIcon from "mdi-react/EyeIcon";
import { useForm } from "react-hook-form";
import { SelectField } from "@/shared/components/form/Select";
import { emailPatter, urlPattern } from "@/shared/helpers";
import showResults from "@/shared/helpers/Show";
import { FormField } from "@/shared/components/form/FormField";
import { useTranslation } from "react-i18next";
import classnames from "classnames";

const MeetingForm = ({ model, action, isAboveError, isHorizontal }) => {
  const { t } = useTranslation("common");
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
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

  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <CardBody>
          <form
            className={`form ${isHorizontal && "form--horizontal"}`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Col md={12} lg={12} xl={12} className="tabs tabs--bordered-top">
            <div className="tabs__wrap">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "1" })}
                    onClick={() => toggle("1")}
                  >
                    {t('general')}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "2" })}
                    onClick={() => toggle("2")}
                  >
                    {t('recurrence')}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "3" })}
                    onClick={() => toggle("3")}
                  >
                     {t('settings')}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: activeTab === "4" })}
                    onClick={() => toggle("4")}
                  >
                     {t('tracking_fields')}
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
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
                      {t("email")}{" "}
                      <span className="form__label-required">(*)</span>
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
                            message: t(
                              "entered value does not match email format"
                            ),
                          },
                        }}
                        isAboveError={isAboveError}
                      />
                    </div>
                  </div>
                  <div className="form__form-group">
                    <span className="form__form-group-label">
                      {t("username")}
                    </span>
                    <div className="form__form-group-field">
                      <FormField
                        name="username"
                        control={control}
                        component="input"
                        errors={errors}
                        rules={{ required: t("this is required field") }}
                        isAboveError={isAboveError}
                      />
                    </div>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <p>
                    
                  </p>
                </TabPane>
                <TabPane tabId="3">
                  <p>
                    
                  </p>
                </TabPane>
                <TabPane tabId="4">
                  <p>
                   
                  </p>
                </TabPane>
              </TabContent>
            </div>
            </Col>
            
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">
                {t("update")}
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

MeetingForm.propTypes = {
  isHorizontal: PropTypes.bool,
  isAboveError: PropTypes.bool,
};

MeetingForm.defaultProps = {
  isHorizontal: true,
  isAboveError: false,
};

export default MeetingForm;
