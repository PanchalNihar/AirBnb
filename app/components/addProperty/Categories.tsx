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
          onClick={() => setCategory("farm")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "farm" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/farm.png" alt="farm" width={30} height={30} />
          <span className="text-xs">Farms</span>
        </div>

        <div
          onClick={() => setCategory("pool")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "pool" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/pool.png" alt="pool" width={30} height={30} />
          <span className="text-xs">Pool</span>
        </div>

        <div
          onClick={() => setCategory("lakeView")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "lakeView" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/lake.png" alt="lake" width={30} height={30} />
          <span className="text-xs">Lakeview</span>
        </div>

        <div
          onClick={() => setCategory("golfing")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "golfing" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/golf.png" alt="golf" width={30} height={30} />
          <span className="text-xs">Golfing</span>
        </div>

        <div
          onClick={() => setCategory("trending")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "trending" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/trending.png" alt="tending" width={30} height={30} />
          <span className="text-xs">Trending</span>
        </div>

        <div
          onClick={() => setCategory("amazingVew")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "amazingView" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-300 hover:opacity-100`}
        >
          <Image src="/view.png" alt="view" width={30} height={30} />
          <span className="text-xs">Amazing View</span>
        </div>

        <div
          onClick={() => setCategory("cabin")}
          className={`pd-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "cabin" ? "border-gray-800" : "border-white"
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
