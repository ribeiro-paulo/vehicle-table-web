import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import { vehiclesMock } from "../mocks/vehicle-mock";

const VehicleTable = () => {
  const header = ["CAR", "NEXT RESERVATION", "STATUS", "RATING"];
  return (
    <table className="w-full divide-y divide-gray-200 shadow border">
      <thead className="bg-gray-50">
        <tr className=" text-xs font-medium text-gray-500 uppercase tracking-wider">
          {header.map((head, index) => (
            <th className="p-4 text-left" key={index} scope="col">
              {head}
            </th>
          ))}
          <th scope="col" className="p-4 text-center">
            ACTIONS
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        {vehiclesMock.map((car, index) => (
          <tr key={index}>
            <td className="px-4 py-1  whitespace-nowrap">
              <div className="flex gap-1 items-center h-12">
                <Image src={car.img} alt={car.name} width={48} height={48} />
                <span className="text-sm font-medium text-black">
                  {car.name}
                </span>
              </div>
            </td>
            <td className="px-6 py-1">
              <p className="text-gray-400">{car.reservation}</p>
            </td>
            <td className="px-6 py-">
              <span className="px-2 py-1 inline-flex  text-xs font-semibold rounded-md bg-green-100 text-green-600">
                {car.status}
              </span>
            </td>
            <td className="px-6 py-1 text-lg">
              {Array.from({ length: car.stars }, (_, i) => (
                <span key={i}>★</span>
              ))}
            </td>
            <td className="px-6 py-1">
              <div className="flex justify-center">
                <button>
                  <HiDotsVertical size={24} />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default VehicleTable;
