import React, { Component, useState } from "react";
import "../styles/App.css";
import Heading from "./component/Heading";
import InputQuery from "./component/InputQuery";
import SubHeading from "./component/SubHeading";
import SubmitButton from "./component/SubmitButton";
const App = () => {
  // const [state , setState] = useState();
  return (
    <div id="main">
      <Heading />
      <InputQuery />
      <SubHeading />
      <SubmitButton />
    </div>
  );
};
export default App;
