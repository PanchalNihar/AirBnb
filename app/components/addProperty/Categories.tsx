import Image from "next/image";
interface CategoriesProp {
  dataCategory: string;
  setCategory: (category: string) => void;
}
const Categories: React.FC<CategoriesProp> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div
          onClick={() => setCategory("Farm")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Farm" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/farm.png" alt="farm" width={30} height={30} />
          <span className="text-xs">Farms</span>
        </div>

        <div
          onClick={() => setCategory("Pool")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Pool" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/pool.png" alt="pool" width={30} height={30} />
          <span className="text-xs">Pool</span>
        </div>

        <div
          onClick={() => setCategory("LakeView")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "LakeView" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/lake.png" alt="lake" width={30} height={30} />
          <span className="text-xs">Lakeview</span>
        </div>

        <div
          onClick={() => setCategory("Golfing")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Golfing" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/golf.png" alt="golf" width={30} height={30} />
          <span className="text-xs">Golfing</span>
        </div>

        <div
          onClick={() => setCategory("Trending")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Trending" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/trending.png" alt="tending" width={30} height={30} />
          <span className="text-xs">Trending</span>
        </div>

        <div
          onClick={() => setCategory("AmazingVew")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "AmazingView" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/view.png" alt="view" width={30} height={30} />
          <span className="text-xs">Amazing View</span>
        </div>

        <div
          onClick={() => setCategory("Cabin")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Cabin" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/cabin.png" alt="cabin" width={30} height={30} />
          <span className="text-xs">Cabin</span>
        </div>
      </div>
    </>
  );
};
export default Categories;
