import React,  { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card,CardBody,Col, Container, Row ,Button, ButtonToolbar} from "reactstrap";
import ReactTableBase from "@/shared/components/table/ReactTableBase";
import PropTypes from 'prop-types';
import PlusIcon from 'mdi-react/PlusIcon';

const reorder = (rows, startIndex, endIndex) => {
  const result = Array.from(rows);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const MemberDataTable = (reactTableData) => {
  const [rows, setData] = useState(reactTableData.tableRowsData);
  const [isEditable, setIsEditable] = useState(false);
  const [isResizable, setIsResizable] = useState(false);
  const [isSortable, setIsSortable] = useState(false);
  const [isDisabledDragAndDrop, setIsDisabledDragAndDrop] = useState(false);
  const [isDisabledEditable, setIsDisabledEditable] = useState(false);
  const [isDisabledResizable, setIsDisabledResizable] = useState(false);
  const [withDragAndDrop, setWithDragAndDrop] = useState(false);
  const [withPagination, setWithPaginationTable] = useState(false);
  const [withSearchEngine, setWithSearchEngine] = useState(true);
  const { t } = useTranslation("common");
  const handleClickIsEditable = () => {
    if (!withDragAndDrop) setIsDisabledResizable(!isDisabledResizable);
    setIsResizable(false);
    setIsEditable(!isEditable);
  };
  const handleClickIsResizable = () => {
    setIsEditable(false);
    setWithDragAndDrop(false);
    setIsDisabledDragAndDrop(!isDisabledDragAndDrop);
    setIsDisabledEditable(!isDisabledEditable);
    setIsResizable(!isResizable);
  };
  const handleClickIsSortable = () => {
    setIsSortable(!isSortable);
  };
  const handleClickWithDragAndDrop = () => {
    if (!isEditable) setIsDisabledResizable(!isDisabledResizable);
    setIsResizable(false);
    setWithDragAndDrop(!withDragAndDrop);
  };
  const handleClickWithPagination = () => {
    setWithPaginationTable(!withPagination);
  };
  const handleClickWithSearchEngine = () => {
    setWithSearchEngine(!withSearchEngine);
  };

  const updateDraggableData = (result) => {
    const items = reorder(rows, result.source.index, result.destination.index);
    setData(items);
  };

  const updateEditableData = (rowIndex, columnId, value) => {
    setData((old) =>
      old.map((item, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          };
        }
        return item;
      })
    );
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
                            <Button className="create" color="primary" onClick={() => { handleCreate() }}><PlusIcon /></Button>
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
                columns={reactTableData.tableHeaderData}
                data={rows}
                updateEditableData={updateEditableData}
                updateDraggableData={updateDraggableData}
                tableConfig={tableConfig}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

MemberDataTable.propTypes = {
    reactTableData: PropTypes.shape({
      tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        name: PropTypes.string,
      })),
      tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
      defaultTableHeaderData: PropTypes.arrayOf(PropTypes.shape()),
      defaultTableRowData: PropTypes.arrayOf(PropTypes.shape()),
    }).isRequired,
  };

export default MemberDataTable;
