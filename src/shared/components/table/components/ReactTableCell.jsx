import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const ReactTableCell = ({ value: initialValue, state, column }) => (
  <Fragment>
      <Fragment>{initialValue}</Fragment>
  </Fragment>
);

ReactTableCell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  state: PropTypes.shape({
    globalFilter: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
  column: PropTypes.shape().isRequired,
};

export default ReactTableCell;
