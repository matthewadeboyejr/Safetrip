import React from "react";
import useFormContext from "../../../hooks/useFormContext";

const KinDetail = () => {
  const { data, handleChange } = useFormContext();

  return (
    <div className="space-y-6 ">
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col flex-1 gap-2 ">
          <label htmlFor="kinNin" className="text-sm font-medium px-3">
            NIN
          </label>
          <input
            onChange={handleChange}
            value={data.kinNin}
            type="number"
            id="kinNin"
            name="kinNin"
            placeholder="National identification number"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="kinLicense" className="text-sm font-medium px-3">
            Driver license
          </label>
          <input
            onChange={handleChange}
            value={data.kinLicense}
            type="number"
            id="kinLicense"
            name="kinLicense"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter Driver license no."
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="kinFName" className="text-sm font-medium px-3">
            First Name
          </label>
          <input
            onChange={handleChange}
            value={data.kinFName}
            type="text"
            id="kinFName"
            name="kinFName"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="kinLName" className="text-sm font-medium px-3">
            Last Name
          </label>
          <input
            onChange={handleChange}
            value={data.kinLName}
            type="text"
            id="kinLName"
            name="kinLName"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter Last Name"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col flex-1 gap-2 ">
          <label htmlFor="kinContact" className="text-sm font-medium px-3">
            Phone number
          </label>
          <input
            onChange={handleChange}
            value={data.kinContact}
            type="number"
            id="kinContact"
            name="kinContact"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter valid number"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="kinGender" className="text-sm font-medium px-3">
            Gender
          </label>
          <select
            onChange={handleChange}
            value={data.kinGender}
            type="text"
            id="kinGender"
            name="kinGender"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
          >
            <option>Male </option>
            <option>Female </option>
          </select>
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="kinRelationship" className="text-sm font-medium px-3">
            Relationship
          </label>
          <select
            onChange={handleChange}
            value={data.kinRelationship}
            type="text"
            id="kinRelationship"
            name="kinRelationship"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
          >
            <option>Sister </option>
            <option>Brother</option>
            <option>Others</option>
          </select>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col flex-1 gap-2 ">
          <label htmlFor="kinAddress" className="text-sm font-medium px-3">
            Address
          </label>
          <input
            onChange={handleChange}
            value={data.kinAddress}
            type="address"
            id="kinAddress"
            name="kinAddress"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Address"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col flex-1 gap-2 ">
          <label htmlFor="kinCity" className="text-sm font-medium px-3">
            City
          </label>
          <input
            onChange={handleChange}
            value={data.kinCity}
            type="text"
            id="kinCity"
            name="kinCity"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter city of origin"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="kinState" className="text-sm font-medium px-3">
            State
          </label>
          <input
            onChange={handleChange}
            value={data.kinState}
            type="text"
            id="kinState"
            name="kinState"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter State of origin"
          />
        </div>
      </div>
    </div>
  );
};

export default KinDetail;
