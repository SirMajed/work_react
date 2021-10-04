import React from 'react';
import { InputLabel, FormControl, Tooltip, Select, MenuItem } from '@material-ui/core';
const SelectFunction = (props) => {
  return (
    <div>
      <h1 className="text-gray-600 text-3xl font-bold">1. Select function</h1>
      <Tooltip placement="right" title="Select which function you want to perform">
        <FormControl className="text-left ">
          <InputLabel className="mt-1">Select</InputLabel>
          <Select value={props.selectedFunction} onChange={(e) => props.handleD(e.target.value)} style={{ width: '200px' }}>
            <MenuItem value="fast">Fast</MenuItem>
            <MenuItem value="practRand">PractRand</MenuItem>
            <MenuItem value="ea_non_iid">ea_non_iid</MenuItem>
            <MenuItem value="ea_iid">ea_iid</MenuItem>
            <MenuItem value="dieharder">dieharder</MenuItem>
            <MenuItem value="testU01">testU01</MenuItem>
          </Select>
        </FormControl>
      </Tooltip>

      <hr className="mt-5 mb-2" />
    </div>
  );
};

export default SelectFunction;
