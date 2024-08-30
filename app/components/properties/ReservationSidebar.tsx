export type Property={
  id:string;
  price_per_night:number;
}
interface ReservationSidebarProps{
  property:Property,

}
const ReservationSidebar:React.FC<ReservationSidebarProps> = ({property}) => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
      <h2 className="mb-5 text-2xl">${property.price_per_night} price_per_night</h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="mb-2 block font-bold text-xs">Guests</label>
        <select className="w-full -ml-l text-sm ">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>

      </div>
      <div className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl hover:bg-airbnb-dark" >Book</div>
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
