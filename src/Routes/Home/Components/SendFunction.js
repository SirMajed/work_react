import React from 'react';
import { Tooltip, Button, LinearProgress, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import CancelIcon from '@material-ui/icons/Cancel';
const SendFunction = (props) => {
  return (
    <div>
      <h1 className="text-gray-600 text-3xl font-bold ">3. Upload your file</h1>
      <div className="mt-5">
        {props.isLoading ? (
          <div className="space-y-8">
            <LinearProgress />
            <Button className="" variant="contained" color="primary" startIcon={<CancelIcon />} onClick={props.killServer}>
              Cancel request
              
            </Button>
          </div>
        ) : (
          <Tooltip placement="right" title="Send the function file to the server and wait for the response">
            <Button startIcon={<SendIcon />} onClick={props.handleClick} disabled={props.isDisabled} variant="contained" color="primary" component="label">
              Upload to server
            </Button>
          </Tooltip>
        )}
      </div>
      {/* <div className="flex justify-end mt-3 md:w-5/6 rounded-lg text-center text-justify mx-2 md:mx-auto">
      <Link to="/test">
      <Button
        variant="contained"
        color="primary"
        endIcon={<SendIcon/>}>
        For testing only
      </Button>
      </Link>
      </div> */}
    </div>
  );
};

export default SendFunction;
