import React from "react";
import Image from "next/image";
import { HiDotsVertical } from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { VehicleType } from "../types/vehicle";

const VehicleCard = (props: { vehicle: VehicleType }) => {
  const { vehicle } = props;
  return (
    <div className="flex items-start rounded-md p-1 shadow">
      <div className="flex items-center gap-4 w-72">
        <div className="relative">
          <FaCheckCircle
            size={24}
            className="absolute top-0 left-0 text-green-600 "
          />
          <Image src={vehicle.img} alt={vehicle.name} width={85} height={85} />
        </div>
        <div className="flex flex-col">
          <span className="font-bold">{vehicle.name}</span>
          <span className="text-sm text-gray-400">
            Next reservation: {vehicle.reservation}
          </span>
          <p>
            {Array.from({ length: vehicle.stars }, (_, i) => (
              <span key={i}>★</span>
            ))}
          </p>
        </div>
      </div>
      <button>
        <HiDotsVertical size={24} />
      </button>
    </div>
  );
};

export default VehicleCard;
