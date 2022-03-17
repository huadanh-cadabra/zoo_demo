import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import MeetingCalendar from './components/MeetingCalendar';
import EventLabels from './components/EventLabels';
import { useTranslation } from 'react-i18next';
import CreateMeetingData from './CreateMeetingData';
const Meeting = () => {
  const { t } = useTranslation('common');
  const createMeetingData = CreateMeetingData();
  return(
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t("meeting list")}</h3>
        </Col>
      </Row>
      <Row>
        <MeetingCalendar createMeetingData={createMeetingData}/>
        <EventLabels />
      </Row>
    </Container>
  )
};

export default Meeting;
