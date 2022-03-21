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
      schedule_for: model ? model.schedule_for : "",
      agenda: model ? model.agenda : "",
      email: model ? model.email : "",
      duration: model ? model.duration : "",
      password: model ? model.password : "",
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
                      {t("meetingId")}
                    </span>
                    <div className="form__form-group-field">
                      <label> {model?.meetingId}</label>
                    </div>
                  </div>
                  <div className="form__form-group">
                    <span className="form__form-group-label">
                      {t("schedule_for")}
                    </span>
                    <div className="form__form-group-field">
                      <FormField
                        name="schedule_for"
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
                      {t("registrants")}
                    </span>
                    <div className="form__form-group-field">
                    {model?.registrants.map((registrant) => (
                    <label className="form__form-group-tag-name" >
                      {registrant.last_name} {registrant.first_name}
                    </label>
                  ))}
                    </div>
                  </div>
                  <div className="form__form-group">
                    <span className="form__form-group-label">
                      {t("agenda")}
                    </span>
                    <div className="form__form-group-field">
                      <FormField
                        name="agenda"
                        control={control}
                        component="input"
                        errors={errors}
                        isAboveError={isAboveError}
                      />
                    </div>
                  </div>
                  <div className="form__form-group">
                    <span className="form__form-group-label">
                      {t("duration")}
                    </span>
                    <div className="form__form-group-field">
                      <FormField
                        name="duration"
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
                      password
                    </span>
                    <div className="form__form-group-field">
                      <FormField
                        name="password"
                        type={isPasswordShown ? 'text' : 'password'}
                        control={control}
                        component="input"
                        errors={errors}
                        rules={{ required: t("this is required field") }}
                        isAboveError={isAboveError}
                      />
                       <button
                  type="button"
                  className={`form__form-group-button${isPasswordShown ? ' active' : ''}`}
                  onClick={showPassword}
                ><EyeIcon />
                </button>
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
