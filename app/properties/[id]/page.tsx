import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className=" mb-4w-full h-[70vh] overflow-hidden rounded-xl relative">
        <Image
          src="/farm-house.jpg"
          alt="img"
          className="object-cover w-full h-full"
          fill
        />
      </div>
      <div className="grid  grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3 ">
          <h1 className="mb-2 text-2xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            4 guests - 2 bedroom - 1 barthroom
          </span>

          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/1.jpg"
              alt="landlordpic"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>
              <strong>Hosted by John Doe</strong>
            </p>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          </p>
        </div>
        <div>
          <ReservationSidebar />
        </div>
      </div>
    </main>
  );
};
export default PropertyDetailPage;
