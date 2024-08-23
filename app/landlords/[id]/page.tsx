import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import Propertylist from "@/app/components/properties/Propertylist";
const LandlordPage = () => {
    return (
      <div className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
            <Image
              src="/1.jpg"
              alt="pic"
              width={200}
              height={200}
              className="rounded-full"
            />
            <h1 className="mt-6 text-2xl">John Doe</h1>
            <ContactButton />
          </div>
        </div>
        <div className=" col-span-1 md:col-span-3 pl-0 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            <Propertylist />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LandlordPage;
