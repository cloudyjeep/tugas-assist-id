/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { APILocationProvince } from "../api";

export default function AutocompleteField() {
  const [data, setData] = useState([]);

  useEffect(() => {
    APILocationProvince()
      .then((res) => {
        setData(res.data.provinsi || []);
      })
      .catch((error) => {
        console.log("Error");
      });
  }, []);
  return (
    <Autocomplete
      id="combo-box-demo"
      options={data}
      getOptionLabel={(option) => option.nama}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
    />
  );
}
