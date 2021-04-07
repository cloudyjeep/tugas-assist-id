import React from "react";

import TextField from "@material-ui/core/TextField";
import Avatar from "react-avatar";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import {
  FormSelectProvince,
  FormSelectRegency,
  FormSelectSubDistrict,
  FormSelectUrbanVillage
} from "../component/Forms";

export const columnsConfig = [
  { title: "id", field: "id", hidden: true },
  {
    title: "",
    render: (rowData) => (
      <Avatar
        maxInitials={1}
        size={40}
        round={true}
        name={rowData === undefined ? "M" : rowData.name}
      />
    )
  },
  {
    title: "Nama Lengkap",
    field: "name"
    // editComponent: (x) => (
    //   console.log({ x }),
    //   (
    //     <TextField
    //       value={x.value}
    //       onChange={(e) =>
    //         // console.log(e.target.value)
    //         x.onChange(e.target.value)
    //       }
    //       id="standard-basic"
    //       label="Standard"
    //     />
    //   )
    // )
  },

  {
    title: "Jenis Kelamin",
    field: "gender",
    editComponent: (x) => (
      console.log({ xxx: x }),
      (
        <FormControl size="small" component="fieldset">
          <RadioGroup
            aria-label="gender"
            value={x.value}
            onChange={(e) => {
              x.onChange(e.target.value);
            }}
          >
            <FormControlLabel
              value="Pria"
              control={<Radio size="small" />}
              label="Pria"
            />
            <FormControlLabel
              value="Wanita"
              control={<Radio size="small" />}
              label="Wanita"
            />
          </RadioGroup>
        </FormControl>
      )
    )
  },
  { title: "Email", field: "email" },
  {
    title: "Provinsi",
    field: "province",
    editComponent: (x) => <FormSelectProvince data={x} />
  },
  {
    title: "Kabupaten",
    field: "regency",
    editComponent: (x) => (
      <FormSelectRegency data={x} province={x.rowData.province} />
    )
  },
  {
    title: "Kecamatan",
    field: "subDistrict",
    editComponent: (x) => (
      <FormSelectSubDistrict data={x} regency={x.rowData.regency} />
    )
  }
];
