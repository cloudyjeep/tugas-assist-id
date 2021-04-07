import { APIupdateData } from "../api";
import { isUndefined, validateEmail } from "./toolkit";

const handleUpdateData = ([data, setData], [errorMessage, setErrorMessage]) => (
  newData,
  oldData,
  resolve
) => {
  //validation
  let errorList = [];
  ["name", "gender", "province", "regency", "subDistrict"].map((p) => {
    if (newData[p] == "" || isUndefined(newData[p]))
      errorList.push("Please enter " + p);
  });
  if (newData.email === "" || validateEmail(newData.email) === false) {
    errorList.push("Please enter a valid email");
  }

  if (errorList.length < 1) {
    let postData = { xyz: true };
    for (const key in newData) {
      if (key !== "id") postData[key] = newData[key];
    }
    console.log({ newData, postData });
    APIupdateData(newData.id, newData)
      .then((res) => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);
        resolve();
        setErrorMessage([]);
      })
      .catch((error) => {
        setErrorMessage(["Update failed! Server error"]);
        resolve();
      });
  } else {
    setErrorMessage(errorList);
    resolve();
  }
};

export default handleUpdateData;
