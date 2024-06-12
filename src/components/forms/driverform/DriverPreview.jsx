import useFormContext from "../../../hooks/useFormContext";
//import { useState } from "react";

const DriverPreview = () => {
  const { data } = useFormContext();

  return (
    <section className=" space-y-12">
      <div className="flex flex-col gap-5  ">
        <h4 className=" font-medium bg-msp-blue/20 p-3 rounded-md text-msp-blue">
          Drivers Details
        </h4>
        <div className="grid md:grid-cols-4 grid-cols-3 gap-4 md:px-5 px-2  text-sm">
          <div>
            <h5 className="text-sm opacity-40">NIN</h5>
            <p>{data.personalNin}</p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">License</h5>
            <p>{data.personalLicense}</p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">First Name</h5>
            <p>{data.personalFName}</p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">Last Name</h5>
            <p>{data.personalLName} </p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">Contact</h5>
            <p>{data.personalContact} </p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">DOB</h5>
            <p>{data.personalDob}</p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">Gender</h5>
            <p>{data.personalGender}</p>
          </div>
          <div className="md:col-auto col-span-2">
            <h5 className="text-sm opacity-40">Addresss</h5>
            <p>
              {data.personalAddress + data.personalCity + data.personalState}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className=" font-medium bg-msp-blue/20 p-3 rounded-md text-msp-blue">
          Next of kin details{" "}
        </h4>
        <div className="grid md:grid-cols-4 grid-cols-3 md:px-5 px-2 gap-4 text-sm">
          {" "}
          <div>
            <h5 className="text-sm opacity-40">First Name</h5>
            <p>{data.kinFName} </p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">Last Name</h5>
            <p>{data.kinLName} </p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">Contact</h5>
            <p>{data.kinContact}</p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">Relationship</h5>
            <p>{data.kinRelationship}</p>
          </div>
          <div className="md:col-auto col-span-2">
            <h5 className="text-sm opacity-40 ">Addresss</h5>
            <p> {data.kinAddress + data.kinCity + data.kinState}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h4 className=" font-medium bg-msp-blue/20 p-3 rounded-md text-msp-blue ">
          Document Upload
        </h4>
        <div className="grid md:grid-cols-4 grid-cols-3 gap-4 md:px-5 px-2  text-sm">
          <div>
            <h5 className="text-sm opacity-40">Expire date</h5>
            <p>{data.docEd} </p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">Uploaded license </h5>
            <p>{data.docLicenseUpload} </p>
          </div>
          <div>
            <h5 className="text-sm opacity-40">Other supporting document</h5>
            <p>{data.docSupportDoc} </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverPreview;
