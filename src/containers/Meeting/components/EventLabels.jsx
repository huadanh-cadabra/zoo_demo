import React from 'react';
import {
  Card, CardBody, Col, Button, ButtonToolbar, ButtonGroup,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';
const EventLabels = () => {
    const { t } = useTranslation('common');
    return(
  <Col md={12} lg={12} xl={3}>
    <Card className="card--not-full-height">
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">{t('event note')}</h5>
        </div>
        <p className="typography-message">
          <span className="calendar-label calendar-label--red" /> {t('high Priority events')}
        </p>
        <p className="typography-message">
          <span className="calendar-label calendar-label--green" /> {t('company events')}
        </p>
        <p className="typography-message">
          <span className="calendar-label calendar-label--blue" /> {t('non-priority events')}
        </p>
        <ButtonToolbar>
          <ButtonGroup className="btn-group--justified">
           
          </ButtonGroup>
        </ButtonToolbar>
      </CardBody>
    </Card>
  </Col>
)};

export default EventLabels;
