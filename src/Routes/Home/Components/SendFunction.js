import React from 'react';
import { Tooltip, Button, LinearProgress, IconButton, Box } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import CancelIcon from '@material-ui/icons/Cancel';
const SendFunction = (props) => {
  return (
    <div>
      <h1 className="text-gray-600 text-3xl font-bold ">{props.isLoading ? 'Your file is being processed' : '3. Upload your file'}</h1>
      <div className="mt-5">
        {props.isLoading ? (
          <div className="space-y-8">
            <LinearProgress />
          </div>
        ) : (
            <Box display="flex" flexDirection="row" gridGap={8} bgcolor="background.paper">
            <Tooltip placement="right" title="Send the function file to the server and wait for the response">
              <Button startIcon={<SendIcon />} onClick={props.handleClick} disabled={props.isDisabled} variant="contained" color="primary" component="label">
                Run function
              </Button>
            </Tooltip>
            <Tooltip placement="right" title="Choose file and run all the functions">
              <Button startIcon={<SendIcon />} onClick={props.handleAllFunctions} disabled={props.isDisabled} variant="contained" color="primary" component="label">
                Run All
              </Button>
            </Tooltip>
            </Box>
        )}
      </div>
    </div>
  );
};

export default SendFunction;
