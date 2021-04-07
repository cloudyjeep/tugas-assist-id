import { APIdeleteData } from "../api";

const handleDeleteData = ([data, setData], [errorMessage, setErrorMessage]) => (
  oldData,
  resolve
) => {
  APIdeleteData(oldData.id)
    .then((res) => {
      const dataDelete = [...data];
      const index = oldData.tableData.id;
      dataDelete.splice(index, 1);
      setData([...dataDelete]);
      setErrorMessage([]);
      resolve();
    })
    .catch((error) => {
      setErrorMessage(["Delete failed! Server error"]);
      resolve();
    });
};

export default handleDeleteData;
