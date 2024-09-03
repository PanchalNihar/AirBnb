"use client";
import { useEffect, useState } from "react";
import Propertylistitems from "./Propertylistitems";
import apiService from "@/app/services/apiService";

export type PropertyType = {
  id: string;
  title: string;
  image_url: string;
  price_per_night: number;
  is_favourite:boolean;
};
interface PropertyListProps{
  landlord_id?:string | null
}
const Propertylist:React.FC<PropertyListProps> = ({landlord_id}) => {
  const markFavourite=(id:string,is_favorite:boolean)=>{
    const tmpProperties=properties.map((property:PropertyType)=>{
      if(property.id===id){
        property.is_favourite=is_favorite
        if(is_favorite){
          console.log("Added to Favourites")
        }else{
          console.log("Removed from Favourites")
        }
      }
      return property
    })
    setProperties(tmpProperties)
  }
  const [properties, setProperties] = useState<PropertyType[]>([]);
  const getProperties = async () => {
    let url='/api/properties/'
    if(landlord_id){
      url+=`?landlord_id=${landlord_id}`
    }
    const tmpProperties = await apiService.get(url);
    setProperties(tmpProperties.data.map((property:PropertyType)=>{
      if(tmpProperties.favourites.includes(property.id)){
        property.is_favourite=true
      }else{
        property.is_favourite=false
      }
      return property
    }));
  };
  useEffect(() => {
    getProperties();
  }, []);
  return (
    <>
      {properties.map((property) => {
        return <Propertylistitems key={property.id} property={property} markFavourite={(is_favourite:any)=>markFavourite(property.id,is_favourite)}/>;
      })}
    </>
  );
};
export default Propertylist;
