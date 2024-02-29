import React from "react";
import { vehiclesMock } from "../mocks/vehicle-mock";
import VehicleCard from "../components/VehicleCard";

const Mobile = () => (
  <div className="grid grid-cols-1 gap-4 md:hidden max-w-fit">
    {vehiclesMock.map((car, index) => (
      <VehicleCard vehicle={car} key={index} />
    ))}
  </div>
);

export default Mobile;
