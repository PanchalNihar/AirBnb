'use client';
import useSearchModal from "@/app/hooks/useSearchModal";
const SearchFilters = () => {
  const searchModal = useSearchModal();
  return (
    <div 
      onClick={() => searchModal.open('location')}
      className="h-[48px] lg:h-[64px] flex flex-row items-center justify-between border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="hidden lg:block">
        <div className="flex flex-row items-center justify-between">
          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-3xl hover:bg-gray-200 transition-colors">
            <p className="text-xs font-semibold text-gray-600">Where</p>
            <p className="text-sm text-gray-900">Search Destinations</p>
          </div>

          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-3xl hover:bg-gray-200 transition-colors">
            <p className="text-xs font-semibold text-gray-600">Check-in</p>
            <p className="text-sm text-gray-900">Add Dates</p>
          </div>

          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-3xl hover:bg-gray-200 transition-colors">
            <p className="text-xs font-semibold text-gray-600">Check-out</p>
            <p className="text-sm text-gray-900">Add Dates</p>
          </div>

          <div className="cursor-pointer h-[48px] lg:h-[64px] px-8 flex flex-col justify-center rounded-3xl hover:bg-gray-200 transition-colors">
            <p className="text-xs font-semibold text-gray-600">Who</p>
            <p className="text-sm text-gray-900">Add Guests</p>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="p-2 lg:p-4 bg-airbnb rounded-full lg:rounded-3xl hover:bg-airbnb-dark transition-all transform hover:scale-105 cursor-pointer">
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: "none",
              height: "16px",
              width: "16px",
              stroke: "currentcolor",
              strokeWidth: "4",
              overflow: "visible",
            }}
          >
            <path
              fill="none"
              d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default SearchFilters;
