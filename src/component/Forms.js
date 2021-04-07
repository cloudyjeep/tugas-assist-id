import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  APILocationProvince,
  APILocationRegency,
  APILocationSubDistrict,
  APILocationUrbanVillage
} from "../api";
import { isUndefined } from "../handler/toolkit";
import { store, useData } from "../store";
import { setData as setDataAction } from "../store/actions";

let linkId = {};

let data_location = {
  [APILocationProvince]: [],
  [APILocationRegency]: [],
  [APILocationSubDistrict]: [],
  [APILocationUrbanVillage]: []
};

export const FormAutocomplete = ({
  value,
  onChange,
  onRowDataChange,
  rowData,
  api,
  alias = "nama",
  api_alias = "",
  handler,
  disabled
}) => {
  const [data, setData] = useState([]);
  const anydata = data.length > 0;
  const index = data.findIndex((p) => {
    const find = p[alias] === value;
    if (find) linkId[value] = p.id;
    return find;
  });
  const selected = data[index] || {};

  console.log({ selected, data });

  // // let compare = [value, disabled];
  // let compare;
  // if (api === "kota_kabupaten") {
  //   compare = rowData.province;
  // } else if (api === "kecamatan") {
  //   compare = rowData.regency;
  // } else if (api === "kelurahan") {
  //   compare = rowData.subDistrict;
  // }

  useEffect(() => {});

  let l = data_location[api];
  useEffect(() => {
    // if (l.length === 0) {
    api()
      .then((res) => {
        setData((api_alias ? res.data[api_alias] : res.data) || []);

        // if(s)
      })
      .catch((error) => {
        console.log("Error");
      });
    // }
  }, [value, disabled]);

  return (
    <Autocomplete
      disabled={disabled}
      size="small"
      disabled={disabled}
      options={data}
      getOptionLabel={(p) => p[alias]}
      style={{ width: 300 }}
      onChange={(a, b) => {
        if (b) {
          const label = b[alias];
          linkId[label] = b.id;
          onChange(label);
          // let d = rowData;
          // if (api === APILocationProvince) {
          //   d.province = label;
          //   d.regency = "";
          //   d.subDistrict = "";
          //   d.urbanVillage = "";
          // } else if (api === APILocationRegency) {
          //   d.regency = label;
          //   d.subDistrict = "";
          //   d.urbanVillage = "";
          // } else if (api === APILocationSubDistrict) {
          //   d.subDistrict = label;
          //   d.urbanVillage = "";
          // } else if (api === APILocationUrbanVillage) {
          //   d.urbanVillage = label;
          // }
          // onRowDataChange(d);
        }
      }}
      value={selected}
      renderInput={(params) => <TextField {...params} label="" />}
    />
  );
};

export const FormSelectProvince = ({ data }) => {
  console.log({ store });
  return (
    <FormAutocomplete
      {...data}
      api={APILocationProvince}
      api_alias="provinsi"
    />
  );
};

export const FormSelectRegency = ({ data, province }) => {
  // if (isUndefined(linkId[province])) return "";
  const api = APILocationRegency.bind(null, linkId[province]);
  return (
    <FormAutocomplete
      {...data}
      api={api}
      disabled={isUndefined(linkId[province]) || !province}
      api_alias="kota_kabupaten"
    />
  );
};

export const FormSelectSubDistrict = ({ data, regency }) => {
  // if (isUndefined(linkId[regency])) return "";
  const api = APILocationSubDistrict.bind(null, linkId[regency]);
  return (
    <FormAutocomplete
      {...data}
      api={api}
      disabled={isUndefined(linkId[regency]) || !regency}
      api_alias="kecamatan"
    />
  );
};

export const FormSelectUrbanVillage = ({ data, subDistrict }) => {
  // if (isUndefined(linkId[subDistrict])) return "";
  const api = APILocationUrbanVillage.bind(null, linkId[subDistrict]);
  return (
    <FormAutocomplete
      {...data}
      api={api}
      disabled={isUndefined(linkId[subDistrict]) || !subDistrict}
      api_alias="kelurahan"
    />
  );
};
