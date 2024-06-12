import React from "react";
import useFormContext from "../../../hooks/useFormContext";

const DocDetail = () => {
  const { data, handleChange } = useFormContext();
  return (
    <div>
      <div className="border p-7  space-y-6">
        <div className="text-sm ">
          {" "}
          <h4 className=" font-bold">Drivers License</h4>
          <p className="text-sm opacity-50">
            Please provide a clear driver’s license showing the license number,
            your name, and date of birth.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="docEd" className="text-sm font-medium pl-2">
              Expire date
            </label>
            <input
              onChange={handleChange}
              value={data.docEd}
              type="date"
              id="docEd"
              name="docEd"
              className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            />
          </div>

          <input
            onChange={handleChange}
            value={data.docLicenseUpload}
            type="file"
            id="docLicenseUpload"
            name="docLicenseUpload"
            className="rounded-md md:mt-6 p-3 w-full  bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
          />
        </div>
      </div>
      <div className="border p-7  space-y-6">
        <div className="text-sm ">
          <h4 className=" font-bold">Other supporting document</h4>
          <p className="text-sm opacity-50">
            provide clear copy of any other supporting documents
          </p>
        </div>

        <div className="flex justify-between items-center gap-5">
          <input
            onChange={handleChange}
            value={data.docSupportDoc}
            type="file"
            id="docSupportDoc"
            name="docSupportDoc"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DocDetail;
