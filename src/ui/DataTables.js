import React from "react";
import MaterialTable from "material-table";

import handleUpdateData from "../handler/updateData";
import handleAddData from "../handler/addData";
import handleDeleteData from "../handler/deleteData";
import DataTableIcons from "./DataTableIcons";
import { columnsConfig } from "./DataTablesConfig";

export default function DataTables({ storeHooks }) {
  const [dataHooks] = storeHooks;
  const [data] = dataHooks;

  return (
    <MaterialTable
      title="Data Merchant"
      columns={columnsConfig}
      data={data}
      icons={DataTableIcons}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            handleUpdateData(...storeHooks)(newData, oldData, resolve);
          }),
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            handleAddData(...storeHooks)(newData, resolve);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            handleDeleteData(...storeHooks)(oldData, resolve);
          })
      }}
    />
  );
}
