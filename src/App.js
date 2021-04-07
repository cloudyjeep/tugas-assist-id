import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";

import { APIgetData } from "./api";
import Alert from "@material-ui/lab/Alert";
import DataTables from "./ui/DataTables";
import { useData, useErrorMessage } from "./store";
import AutocompleteField from "./component/Autocomplete";
import { resolveDataFromAPI } from "./handler/toolkit";

function App() {
  // get data from redux with hook style
  const [data, setData] = useData([]);
  const [errorMessage, setErrorMessage] = useErrorMessage([]);
  const iserror = errorMessage.length > 0;

  useEffect(() => {
    APIgetData()
      .then((res) => {
        setData(resolveDataFromAPI(res.data));
        console.log({ api: resolveDataFromAPI(res.data) });
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);

  return (
    <div className="App">
      <div>
        {iserror && (
          <Alert severity="error">
            {errorMessage.map((msg, i) => {
              return <div key={i}>{msg}</div>;
            })}
          </Alert>
        )}{" "}
        /
      </div>
      <DataTables
        storeHooks={[
          [data, setData],
          [errorMessage, setErrorMessage]
        ]}
      />
    </div>
  );
}

export default connect()(App);
