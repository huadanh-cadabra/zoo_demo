import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import RoleTable from './components/RoleTable';
import { useTranslation } from 'react-i18next';
import CreateRoleData from './CreateRoleData';
const Role = () => {
  const { t } = useTranslation('common');
  const createRoleData = CreateRoleData();
  return(
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t("role list")}</h3>
        </Col>
      </Row>
      <Row>
        <RoleTable createRoleData={createRoleData}/>
      </Row>
    </Container>
  )
};

export default Role;
