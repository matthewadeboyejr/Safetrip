import { GoKebabHorizontal } from "react-icons/go";

const DriversTable = () => {
  return (
    <div className=" overflow-x-auto rounded-lg">
      <table className=" table-auto text-left  w-full rtl:text-right">
        <thead className="font-medium text-sm bg-slate-100 ">
          <tr className="whitespace-nowrap">
            <th scope="col" className="px-6 py-3 ">
              No.
            </th>
            <th scope="col" className="px-6 py-3">
              Driver name
            </th>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="text-sm whitespace-nowrap ">
          <tr className="border-b">
            <td className=" px-6 py-4">1</td>
            <td className="  px-6 py-4 ">
              <div className="">
                <img src="" alt=""></img>
                <div>Mr. Alex Momo</div>
              </div>
            </td>
            <td className="  px-6 py-4">45532</td>
            <td className=" px-6 py-4">4.3 </td>
            <td className="flex justify-start  px-6 py-4">
              <div className=" rounded px-2 bg-green-300 ">Active</div>
            </td>
            <td className=" px-6 py-4">
              <div className="flex justify-start">
                <GoKebabHorizontal />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DriversTable;
