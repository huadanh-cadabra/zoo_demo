import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import MemberDataTable from './components/MemberDataTable';
import { useTranslation } from 'react-i18next';
import CreateMemberData from './CreateMemberData';
const Member = () => {
  const { t } = useTranslation('common');
  return(
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t("member list")}</h3>
        </Col>
      </Row>
      <Row>
        <MemberDataTable reactTableData={CreateMemberData}/>
      </Row>
    </Container>
  )
};

export default Member;
