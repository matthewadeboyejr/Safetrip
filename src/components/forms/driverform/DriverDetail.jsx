import useFormContext from "../../../hooks/useFormContext";

const DriverDetail = () => {
  const { data, handleChange } = useFormContext();

  console.log(data, "helllllloooooooo");

  return (
    <div className="space-y-6 ">
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col md:w-1/2 w-full gap-2 ">
          <label htmlFor="personalNin" className="text-sm font-medium px-3">
            NIN
          </label>
          <input
            onChange={handleChange}
            value={data.personalNin}
            type="number"
            id="personalNin"
            name="personalNin"
            placeholder="National identification number"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
          />
        </div>
        <div className="flex flex-col md:w-1/2 w-full gap-2">
          <label htmlFor="driverLicense" className="text-sm font-medium px-3">
            Driver license
          </label>
          <input
            onChange={handleChange}
            value={data.personalLicense}
            type="number"
            id="personalLicense"
            name="personalLicense"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter Driver license no."
          />
        </div>
      </div>
      <div className="flex gap-6 md:flex-row flex-col">
        <div className="flex flex-col md:w-1/2 w-full gap-2">
          <label htmlFor="personalFName" className="text-sm font-medium px-3">
            First Name
          </label>
          <input
            onChange={handleChange}
            value={data.personalFName}
            type="text"
            id="personalFName"
            name="personalFName"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter First Name"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label htmlFor="lastName" className="text-sm font-medium px-3">
            Last Name
          </label>
          <input
            onChange={handleChange}
            value={data.personalLName}
            type="text"
            id="personalLName"
            name="personalLName"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter Last Name"
          />
        </div>
      </div>
      <div className="flex space-x-6">
        <div className="flex flex-col w-full gap-2 ">
          <label htmlFor="personalContact" className="text-sm font-medium px-3">
            Phone number
          </label>
          <input
            onChange={handleChange}
            value={data.personalContact}
            type="number"
            id="personalContact"
            name="personalContact"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter valid number"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-6">
        <div className="flex flex-col md:1/2 w-full gap-2">
          <label htmlFor="personalDob" className="text-sm font-medium px-3">
            DOB
          </label>
          <input
            onChange={handleChange}
            value={data.personalDob}
            type="date"
            id="personalDob"
            name="personalDob"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Date of birth"
          />
        </div>
        <div className="flex flex-col md:1/2 w-full gap-2">
          <label htmlFor="personalGender" className="text-sm font-medium px-3">
            Gender
          </label>
          <select
            onChange={handleChange}
            value={data.personalGender}
            type="text"
            id="personalGender"
            name="personalGender"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
          >
            <option>Male </option>
            <option>Female </option>
          </select>
        </div>
      </div>
      <div className="flex space-x-6">
        <div className="flex flex-col flex-1 gap-2 ">
          <label htmlFor="personalAddress" className="text-sm font-medium px-3">
            Address
          </label>
          <input
            onChange={handleChange}
            value={data.personalAddress}
            type="address"
            id="personalAddress"
            name="personalAddress"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Address"
          />
        </div>
      </div>
      <div className="flex gap-6  md:flex-row flex-col">
        <div className="flex flex-col w-full gap-2 ">
          <label htmlFor="personalCity" className="text-sm font-medium px-3">
            City
          </label>
          <input
            onChange={handleChange}
            value={data.personalCity}
            type="text"
            id="personalCity"
            name="personalCity"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter city of origin"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="personalState" className="text-sm font-medium px-3">
            State
          </label>
          <input
            onChange={handleChange}
            value={data.personalState}
            type="state"
            id="personalState"
            name="personalState"
            className="rounded-md p-3 w-full bg-msp-blue bg-opacity-10 placeholder:text-sm focus:outline-none"
            placeholder="Enter State of origin"
          />
        </div>
      </div>
    </div>
  );
};
export default DriverDetail;
