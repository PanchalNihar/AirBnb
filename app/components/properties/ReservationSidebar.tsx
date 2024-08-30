"use client";
import { useState, useEffect } from "react";
import { Range } from "react-date-range";
import apiService from "@/app/services/apiService";
import useLoginModal from "@/app/hooks/useLoginModal";
const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};
export type Property = {
  id: string;
  guests: number;
  price_per_night: number;
};
interface ReservationSidebarProps {
  userId: string | null;
  property: Property;
}
const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
  property,
}) => {
  const loginModal = useLoginModal();
  const [fee, setFee] = useState<number>(0);
  const [nights, setNights] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const [minDate, setMinDate] = useState<Date>(new Date());
  const [maxDate, setMaxDate] = useState<Date>(new Date());
  const [guests, setGuests] = useState<string>("1");
  const guestRange = Array.from(
    { length: property.guests },
    (_, index) => index + 1
  );
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">
        ${property.price_per_night} price_per_night
      </h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="mb-2 block font-bold text-xs">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="w-full -ml-l text-sm "
        >
          {guestRange.map((number) => (
            <option key={number} value={number}>{number}</option>
          ))}
        </select>
      </div>
      <div className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl hover:bg-airbnb-dark">
        Book
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>$200 * 4 nights</p>
        <p>$800</p>
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>airbnb fee</p>
        <p>$40</p>
      </div>
      <div className="mt-4 flex justify-between align-center">
        <p>Total</p>
        <p>$840</p>
      </div>
    </aside>
  );
};
export default ReservationSidebar;
