import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Button,
  ButtonToolbar,
} from "reactstrap";
import { useTranslation } from "react-i18next";
const ReactTableCell = ({ value: initialValue, state, column }) => {
  const { t } = useTranslation("common");
  return (
  <Fragment>
    <Fragment>
    {column.controller ? (
      <div>
      {column.controller == "Action" && (
        <ButtonToolbar className="table__button">
          {column?.buttons?.map((item) => (
            <Button
              color={item.color}
              size="sm"
              onClick={() => {
                handleButtonClick(item.title);
              }}
              className={`table_button--${item.title}`}
            >
              {t(item.title)}
            </Button>
          ))}
        </ButtonToolbar>
      )}
      </div>
    ):(initialValue)}
     
      
    </Fragment>
  </Fragment>
)};

ReactTableCell.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  state: PropTypes.shape({
    globalFilter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
  column: PropTypes.shape().isRequired,
};

export default ReactTableCell;
