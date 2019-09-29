import React from "react";
import axios from "axios";

import { Button } from "antd";

import "./style.less";

function postRequest() {
  axios
    .post("http://localhost:8081/start-throwback", {
      startThrowback: true
    })
    .then(response => {
      alert("Added!");
    })
    .catch(error => {
      alert(error);
    });
}

const StartThrowback = props => {
  return (
    <div className="button">
      <Button onSubmit={postRequest} className="start-throwback">
        start throwback
      </Button>
    </div>
  );
};

postRequest()

export default StartThrowback;
