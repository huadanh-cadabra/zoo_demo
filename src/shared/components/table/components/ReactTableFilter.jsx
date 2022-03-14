import React, { useState } from "react";
import PropTypes from "prop-types";
import { useAsyncDebounce } from "react-table";
import { Input ,Button } from "reactstrap";
import { BiSearch } from "react-icons/bi";
import { FaEraser } from 'react-icons/fa';
const ReactTableFilter = ({
  rows,
  setGlobalFilter,
  setFilterValue,
  globalFilter,
  placeholder,
  dataLength,
}) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((item) => {
    setGlobalFilter(item || undefined);
  }, 200);
  if (value) {
    setFilterValue(value);
  }

  return (
    <div className="table__search">
      <Input
        className="table__search table__search-input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${placeholder}`}
      />
      <Button className="table__search-button" color="success" type="submit">
        <BiSearch />
      </Button>
      <Button
        className="table__search-button"
        color="success"
        type="reset"
      >
        <FaEraser />
      </Button>
      
    </div>
  );
};

const filterGreaterThan = (rows, id, filterValue) =>
  rows.filter((row) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });

filterGreaterThan.autoRemove = (val) => typeof val !== "number";

ReactTableFilter.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
  setFilterValue: PropTypes.func,
  globalFilter: PropTypes.string,
  placeholder: PropTypes.string,
  dataLength: PropTypes.number.isRequired,
};

ReactTableFilter.defaultProps = {
  setFilterValue: () => {},
  globalFilter: undefined,
  placeholder: "Search...",
};

export default ReactTableFilter;
