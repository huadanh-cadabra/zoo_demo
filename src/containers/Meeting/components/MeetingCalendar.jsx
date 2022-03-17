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
import MeetingForm from "./MeetingForm";
import Calendar from '@/shared/components/Calendar';
import events from './events';

const reorder = (rows, startIndex, endIndex) => {
  const result = Array.from(rows);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const MeetingCalendar = (createMeetingData) => {
  const [rows, setData] = useState(
    createMeetingData.createMeetingData.tableRowsData
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

  const handleSubmit = () => {
  
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
    <Col md={12} lg={12} xl={9}>
    <Card>
      <CardBody>
        <Calendar events={events} />
      </CardBody>
    </Card>
  </Col>
  );
};

MeetingCalendar.propTypes = {
  createMeetingData: PropTypes.shape({
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

export default MeetingCalendar;
