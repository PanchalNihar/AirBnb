import Image from "next/image";
const MyReservation = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className=" my-6 mb-6 text-2xl">My Reservation</h1>
      <div>
        <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/farm-house.jpg"
                fill
                alt="reservation"
                className="hover:scale-110 object-cover transition w-full h-full"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 p-3 pt-2">
            <h2 className="mb-4 text-xl">name</h2>
            <p  className="mb-2">
              <strong>Check-in date:</strong>25/08/2024
            </p>
            <p className="mb-2">
              <strong>Check-out date:</strong>29/08/2024
            </p>

            <p className="mb-2">
              <strong>Number of night:</strong>2
            </p>
            <p className="mb-2">
              <strong>Total Price:</strong>$200
            </p>
            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Go to property</div>
          </div>
        </div>
        <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                src="/farm-house.jpg"
                fill
                alt="reservation"
                className="hover:scale-110 object-cover transition w-full h-full"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 p-3 pt-2">
            <h2 className="mb-4 text-xl">name</h2>
            <p className="mb-2">
              <strong>Check-in date:</strong>25/08/2024
            </p>
            <p className="mb-2">
              <strong>Check-out date:</strong>29/08/2024
            </p>

            <p className="mb-2">
              <strong>Number of night:</strong>2
            </p>
            <p  className="mb-2">
              <strong>Total Price:</strong>$200
            </p>
            <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">Go to property</div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MyReservation;
