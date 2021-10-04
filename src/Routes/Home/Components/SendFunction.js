import React from 'react';
import { Tooltip, Button, LinearProgress } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
const SendFunction = (props) => {
  return (
    <div>
      <h1 className="text-gray-600 text-3xl font-bold ">3. Upload your file</h1>
      <div className="mt-5">
        {props.isLoading ? (
          <LinearProgress />
        ) : (
          <Tooltip placement="right" title="Send the function file to the server and wait for the response">
            <Button startIcon={<SendIcon />} disabled={props.isDisabled} onClick={props.handleClick} variant="contained" color="primary" component="label">
              Upload to server
            </Button>
          </Tooltip>
        )}
      </div>

    </div>
  );
};

export default SendFunction;
