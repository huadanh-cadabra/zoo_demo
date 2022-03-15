import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import MemberTable from './components/MemberTable';
import { useTranslation } from 'react-i18next';
import CreateMemberData from './CreateMemberData';
const Member = () => {
  const { t } = useTranslation('common');
  const createMemberData = CreateMemberData();
  return(
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t("member list")}</h3>
        </Col>
      </Row>
      <Row>
        <MemberTable createMemberData={createMemberData}/>
      </Row>
    </Container>
  )
};

export default Member;
