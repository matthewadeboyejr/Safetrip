import React from "react";
import useFormContext from "../../../hooks/useFormContext";
import KinDetail from "../driverform/KinDetail";
import DriverDetail from "../driverform/DriverDetail";
import DocDetail from "../driverform/DocDetail";
import DriverPreview from "./DriverPreview";

function DriverFormInputs() {
  const { page } = useFormContext();

  const display = {
    0: <DriverDetail />,
    1: <KinDetail />,
    2: <DocDetail />,
    3: <DriverPreview />,
  };

  return <div>{display[page]}</div>;
}

export default DriverFormInputs;
