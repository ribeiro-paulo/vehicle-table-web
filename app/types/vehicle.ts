import { StaticImageData } from "next/image";

export type VehicleStatus = "Available";

export type VehicleType = {
  img: StaticImageData;
  name: string;
  status: VehicleStatus;
  reservation: string;
  stars: number;
};
