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
interface PropertyListProps{
  landlord_id?:string | null
}
const Propertylist:React.FC<PropertyListProps> = ({landlord_id}) => {
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const getProperties = async () => {
    let url='/api/properties/'
    if(landlord_id){
      url+=`?landlord_id=${landlord_id}`
    }
    const tmpProperties = await apiService.get(url);
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
