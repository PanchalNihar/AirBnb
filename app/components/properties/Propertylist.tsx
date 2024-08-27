"use client";
import { useEffect, useState } from "react";
import Propertylistitems from "./Propertylistitems";
import apiService from "@/app/services/apiService";
import { data } from "autoprefixer";
export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_night: number;
};
const Propertylist = () => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const getProperties = async () => {
    const tmpProperties = await apiService.get("/api/properties/");
    setProperties(tmpProperties.data);
  };

  useEffect(() => {
    getProperties();
  }, []);
  return (
    <>
      {properties.map((property) => {
        return <Propertylistitems key={property.id} property={property} />;
      })}
    </>
  );
};
export default Propertylist;
