import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Select from "react-select";
import filtersSlice from '../Filter/filterSlice';
const MultiSelect = () => {
  const [filterPriorities, setFilterPriorities] = useState([]);
  const dispatch = useDispatch()
  const handlePriorityChange = (value) => {
    const selectedValues = value.map(option => option.value);
    console.log(filterPriorities);
    setFilterPriorities(selectedValues);
    dispatch(filtersSlice.actions.prioritiesFilterChange(selectedValues));
  }
    const colourOptions = [
        { value: "High", label: "High"},
        { value: "Medium", label: "Medium"},
        { value: "Low", label: "Low"},
      ];


    return (

        <div className="container mx-auto mt-5">
        <Select
          defaultValue={filterPriorities ? [filterPriorities] : null }
          isMulti
          options={colourOptions}      
          className="w-full"
          classNamePrefix="select"
          onChange={handlePriorityChange}
        />
      </div>

    )
}

export default MultiSelect