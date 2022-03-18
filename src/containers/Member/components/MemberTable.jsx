import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Button,
  ButtonToolbar,
} from "reactstrap";
import ReactTableBase from "@/shared/components/table/ReactTableBase";
import PropTypes from "prop-types";
import PlusIcon from "mdi-react/PlusIcon";
import ModalComponent from "@/shared/components/Modal";
import MemberForm from "./MemberForm";
import { showNotification } from '@/shared/components/Notification';

const reorder = (rows, startIndex, endIndex) => {
  const result = Array.from(rows);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const MemberTable = (createMemberData) => {
  const [rows, setData] = useState(
    createMemberData.createMemberData.tableRowsData
  );
  const [isEditable, setIsEditable] = useState(false);
  const [isResizable, setIsResizable] = useState(false);
  const [isSortable, setIsSortable] = useState(false);
  const [withDragAndDrop, setWithDragAndDrop] = useState(false);
  const [withSearchEngine, setWithSearchEngine] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation("common");
  const [actionModel, setActionModel] = useState("insert");
  const [model, setModel] = useState(null);

  const createData = () => {
    setActionModel("create");
    setModel(null);
    setOpenModal(true);
  };

  const closeModal = () => {
    setActionModel("create");
    setModel(null);
    setOpenModal(false);
  };
  const handleCreate = () => {
    createData();
  };

  const handleSuccess = (data) => {
    setOpenModal(false);
    showNotification(t('create member success'), null, 'success');
  };
  const showActionForm = async (action, object) => {
    setModel(object);
    setActionModel(action);
    if (action == 'update') {
        setOpenModal(true);
    }
  };

  

  const tableConfig = {
    isEditable,
    isResizable,
    isSortable,
    withDragAndDrop,
    withPagination: true,
    withSearchEngine,
    manualPageSize: [10, 20, 30, 40],
    placeholder: t("search by zoom account"),
  };

  return (
    <Container>
      <Row>
        <Col md={12}></Col>
      </Row>
      <Row>
        <Col md={12} lg={12}>
          <Card>
            <CardBody>
              <div className="react-table__wrapper">
                <div className="card__title">
                  <div className="card-head">
                    <ButtonToolbar>
                      <Button
                        className="create"
                        color="primary"
                        onClick={() => {
                          handleCreate();
                        }}
                      >
                        <PlusIcon />
                      </Button>
                    </ButtonToolbar>
                  </div>
                </div>
              </div>
              <ReactTableBase
                key={
                  withSearchEngine || isResizable || isEditable
                    ? "modified"
                    : "common"
                }
                columns={createMemberData.createMemberData.tableHeaderData}
                data={rows}
               
                tableConfig={tableConfig}
                createData={createData}
                showActionForm={showActionForm}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <ModalComponent
        isOpen={openModal}
        closeModal={closeModal}
        title="member_registration"
        form={<MemberForm 
          action={actionModel} 
          model={model}
          handleSuccess={handleSuccess}
        />}
        isFooter={false}
        model={model}
        
      />
    </Container>
  );
};

MemberTable.propTypes = {
  createMemberData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableHeaderData: PropTypes.arrayOf(PropTypes.shape()),
    defaultTableRowData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default MemberTable;
