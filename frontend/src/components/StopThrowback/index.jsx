import React from "react";
import axios from "axios";

import { Button } from "antd";

import "./style.less";

function postRequest() {
  axios
    .post("http://localhost:8081/start-throwback", {
      startThrowback: false
    })
    .then(response => {
      alert("Added!");
    })
    .catch(error => {
      alert(error);
    });
}

const StopThrowback = props => {
  return (
    <div className="button">
      <Button onSubmit={postRequest} className="stop-throwback">
        stop throwback
      </Button>
    </div>
  );
};

  export default StopThrowback;
