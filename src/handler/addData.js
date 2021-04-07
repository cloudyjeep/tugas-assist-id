import { APIcreateData } from "../api";
import { isUndefined, validateEmail } from "./toolkit";

const handleAddData = ([data, setData], [errorMessage, setErrorMessage]) => (
  newData,
  resolve
) => {
  //validation
  let errorList = [];

  ["name", "gender", "province", "regency", "subDistrict"].map((p) => {
    if (newData[p] == "" || isUndefined(newData[p]))
      errorList.push("Please enter " + p);
  });

  if (newData.email === undefined || validateEmail(newData.email) === false) {
    errorList.push("Please enter a valid email");
  }

  if (errorList.length < 1) {
    //no error
    newData.xyz = true;
    // console.log({ newData });
    APIcreateData(newData)
      .then((res) => {
        let dataToAdd = [newData, ...data];
        setData(dataToAdd);
        resolve();
        setErrorMessage([]);
      })
      .catch((error) => {
        setErrorMessage(["Cannot add data. Server error!"]);
        resolve();
      });
  } else {
    setErrorMessage(errorList);
    resolve();
  }
};

export default handleAddData;
