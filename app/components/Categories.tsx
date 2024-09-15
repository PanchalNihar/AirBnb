"use client";
import Image from "next/image";
import { useState } from "react";
import useSearchModal, { SearchQuery } from "../hooks/useSearchModal";
const Categories = () => {
  const searchModal = useSearchModal();
  const [category, setCategory] = useState("");
  const _setCategory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
        country: searchModal.query.country,
        checkIn: searchModal.query.checkIn,
        checkOut: searchModal.query.checkOut,
        guests: searchModal.query.guests,
        bedrooms: searchModal.query.bedrooms,
        bathrooms: searchModal.query.bathrooms,
        category: _category
    }

    searchModal.setQuery(query);
}
  return (
    <div className="pt-3 cursor-pointer pd-6 flex items-center space-x-12 ">
      <div
        onClick={() => _setCategory("")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == '' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src="/farm.png" alt="farm" width={30} height={30} />
        <span className="text-xs">All</span>
      </div>
      <div
        onClick={() => _setCategory("farm")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'farm' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src="/farm.png" alt="farm" width={30} height={30} />
        <span className="text-xs">Farms</span>
      </div>

      <div
        onClick={() => _setCategory("pool")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'pool' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src="/pool.png" alt="pool" width={30} height={30} />
        <span className="text-xs">Pool</span>
      </div>

      <div
        onClick={() => _setCategory("lakeView")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'lakeView' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src="/lake.png" alt="lake" width={30} height={30} />
        <span className="text-xs">Lakeview</span>
      </div>

      <div
        onClick={() => _setCategory("golfing")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'golfing' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src="/golf.png" alt="golf" width={30} height={30} />
        <span className="text-xs">Golfing</span>
      </div>

      <div
        onClick={() => _setCategory("trending")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'trending' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src="/trending.png" alt="trending" width={30} height={30} />
        <span className="text-xs">Trending</span>
      </div>

      <div
        onClick={() => _setCategory("amazingView")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'amazingView' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src="/view.png" alt="view" width={30} height={30} />
        <span className="text-xs">AmazingView</span>
      </div>

      <div
        onClick={() => _setCategory("cabin")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${category == 'cabin' ? 'border-black' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image src="/cabin.png" alt="cabin" width={30} height={30} />
        <span className="text-xs">Cabin</span>
      </div>
    </div>
  );
};
export default Categories;
