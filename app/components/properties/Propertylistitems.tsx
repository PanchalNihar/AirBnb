import Image from "next/image";
const Propertylistitems = () => {
  return (
    <div className="cursor-pointer ">
        <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image fill src="/farm-house.jpg" sizes="(max-width:768px) 768px,(max-width:1200):768px,768px"
            alt="property image" 
            className="hover:scale-110 object-cover transition h-full w-full"/>
        </div>
        <div className="mt-2">
            <p className="text-lg font-bold">Farm House</p>
        </div>
        <div className="mt-2">
            <p className="text-sm text-gray-500 ">$200 per night</p>
        </div>
    </div>
  );
};
export default Propertylistitems;
