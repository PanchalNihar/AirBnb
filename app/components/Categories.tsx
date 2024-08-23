import Image from "next/image";
const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pd-6 flex items-center space-x-12 ">
      <div className="pd-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
        <Image src="/farm.png" alt="farm" width={30} height={30} />
        <span className="text-xs">Farms</span>
      </div>

      <div className="pd-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
        <Image src="/pool.png" alt="pool" width={30} height={30} />
        <span className="text-xs">Pool</span>
      </div>

      <div className="pd-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
        <Image src="/lake.png" alt="lake" width={30} height={30} />
        <span className="text-xs">Lakeview</span>
      </div>

      <div className="pd-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
        <Image src="/golf.png" alt="golf" width={30} height={30} />
        <span className="text-xs">Golfing</span>
      </div>

      <div className="pd-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
        <Image src="/trending.png" alt="tending" width={30} height={30} />
        <span className="text-xs">Trending</span>
      </div>

      <div className="pd-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
        <Image src="/view.png" alt="view" width={30} height={30} />
        <span className="text-xs">Amazing View</span>
      </div>

      <div className="pd-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
        <Image src="/cabin.png" alt="cabin" width={30} height={30} />
        <span className="text-xs">Cabin</span>
      </div>

      <div className="pd-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-300 hover:opacity-100">
        <Image src="/beach.png" alt="beach" width={30} height={30} />
        <span className="text-xs">Beachview</span>
      </div>
    </div>
  );
};
export default Categories;
