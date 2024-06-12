import { createContext, useState } from "react";
//import { useNavigate } from "react-router-dom";

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  //const navigate = useNavigate();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const title = {
    0: " Personal",
    1: "Next Of Kin",
    2: "Document Upload",
    3: "Preview ",
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    //Driver details
    personalNin: "",
    personalLicense: "",
    personalFName: "",
    personalLName: "",
    personalContact: "",
    personalDob: "",
    personalGender: "",
    personalAddress: "",
    personalCity: "",
    personalState: "",
    //kin details
    kinNin: "",
    kinLicense: "",
    kinFName: "",
    kinLName: "",
    kinContact: "",
    kinGender: "",
    kinRelationship: "",
    kinAddress: "",
    kinCity: "",
    kinState: "",
    //doc details
    docEd: "",
    docLicenseUpload: "",
    docSupportDoc: "",
  });

  console.log(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((preValue) => ({ ...preValue, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(data));

    setOpenSuccessModal(true);
  };

  const { kNin, supportDoc, ...requiredInputs } = data;
  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) &&
    page === Object.keys(title).length - 1;

  const canNextPage1 = Object.keys(data)
    .filter((key) => key.startsWith("personal"))
    .map((key) => data[key])
    .every(Boolean);

  const canNextPage2 = Object.keys(data)
    .filter((key) => key.startsWith("kin") && key !== "kinNin ")
    .map((key) => data[key])
    .every(Boolean);

  console.log(canNextPage2, "can next page 2");

  const disablePrev = page === 0;

  const disableNext =
    page === Object.keys(title).length - 1 ||
    (page === 0 && !canNextPage1) ||
    (page === 1 && !canNextPage2);

  console.log(disableNext, "disable next");

  const prevHide = page === 0 && "hidden";

  const nextHide = page === Object.keys(title).length - 1 && "hidden ";

  const submitHide = page !== Object.keys(title).length - 1 && "hidden";

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        handleChange,
        canSubmit,
        disablePrev,
        disableNext,
        prevHide,
        nextHide,
        submitHide,
        handleSubmit,
        openSuccessModal,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
