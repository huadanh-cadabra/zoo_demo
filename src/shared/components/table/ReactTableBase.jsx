import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useFlexLayout } from 'react-table';
import ReactTableConstructor from './components/ReactTableConstructor';
import ReactTableCell from './components/ReactTableCell';
import ReactTableCellEditable from './components/ReactTableEditableCell';
import { useTranslation } from "react-i18next";

const ReactTableBase = ({
  tableConfig,
  columns,
  data,
  updateDraggableData,
  updateEditableData,
  showActionForm
}) => {
  const { t } = useTranslation("common");
  const {
    isEditable,
    isResizable,
    isSortable,
    withDragAndDrop,
    withPagination,
    withSearchEngine,
    manualPageSize,
  } = tableConfig;
  const [filterValue, setFilterValue] = useState(null);
  const tableOptions = {
    columns,
    data,
    updateDraggableData,
    updateEditableData,
    showActionForm,
    setFilterValue,
    defaultColumn: {},
    isEditable,
    withDragAndDrop: withDragAndDrop || false,
    dataLength: data.length,
    autoResetPage: false,
    disableSortBy: !isSortable,
    manualSortBy: !isSortable,
    manualGlobalFilter: !withSearchEngine,
    manualPagination: !withPagination,
    initialState: {
      pageIndex: 0,
      pageSize: manualPageSize ? manualPageSize[0] : 10,
      globalFilter: withSearchEngine && filterValue ? filterValue : undefined,
    },
  };
  
  let tableOptionalHook = [];
  if (isResizable) tableOptionalHook = [useFlexLayout];
  if (withSearchEngine) {
    tableOptions.defaultColumn = {
      Cell: ReactTableCell,
    };
  }
  if (isEditable) {
    tableOptions.defaultColumn = {
      Cell: ReactTableCellEditable,
    };
  }

  return (
    <ReactTableConstructor
      key={isResizable || isEditable ? 'modified' : 'common'}
      tableConfig={tableConfig}
      tableOptions={tableOptions}
      tableOptionalHook={tableOptionalHook}
    />
  );
};

ReactTableBase.propTypes = {
  tableConfig: PropTypes.shape({
    isEditable: PropTypes.bool,
    isResizable: PropTypes.bool,
    isSortable: PropTypes.bool,
    withDragAndDrop: PropTypes.bool,
    withPagination: PropTypes.bool,
    withSearchEngine: PropTypes.bool,
    manualPageSize: PropTypes.arrayOf(PropTypes.number),
  }),
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    name: PropTypes.string,
  })),
  data: PropTypes.arrayOf(PropTypes.shape()),
  updateDraggableData: PropTypes.func,
  updateEditableData: PropTypes.func,
};

ReactTableBase.defaultProps = {
  tableConfig: {
    isEditable: false,
    isResizable: false,
    isSortable: false,
    withDragAndDrop: false,
    withPagination: false,
    withSearchEngine: false,
    manualPageSize: [],
    showActionForm:PropTypes.func,
  },
  columns: [
  ],
  data: [
  ],
  updateDraggableData: () => {},
  updateEditableData: () => {},
  showActionForm: () => { },
};

export default ReactTableBase;
