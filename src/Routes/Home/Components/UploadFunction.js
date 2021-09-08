import React from "react";
import { CloudUpload } from "@material-ui/icons";
import { Tooltip, Button } from "@material-ui/core";
const UploadFunction = (props) => {
  return (
    <>
      <h1 className="text-gray-600 text-3xl font-bold ">2. Choose file</h1>

      <br />
      <form>
        <Tooltip placement="right" title="Select the function file from your device">
          <Button
            startIcon={<CloudUpload />}
            variant="contained"
            component="label"
            >
            {props.selectedFileName ?? "Choose File"}
            <input
              type="file"
              hidden
              name="file"
              onChange={(e) => props.handleChange(e.target.files)}
            />
          </Button>
        </Tooltip>
      </form>
      <hr className="mt-5 mb-2" />
    </>
  );
};

export default UploadFunction;
