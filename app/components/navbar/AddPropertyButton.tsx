"use client";
import usePropertyModal from "@/app/hooks/usePropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";
interface AddPropertyButtonProp{
  userId?:string|null
}
const AddPropertyButton:React.FC<AddPropertyButtonProp> = ({
  userId
}) => {
  const loginModal=useLoginModal()
  const addPropertyModal = usePropertyModal();
  const airbnbYourHome = () => {
    if(userId){
      addPropertyModal.open();
    }
    else{
      loginModal.open();
    }
  };
  return (
    <div
      onClick={airbnbYourHome}
      className="p-2 text-sm font-semibold rounded-full hover:bg-gray-200 cursor-pointer"
    >
      AirBnb your home
    </div>
  );
};
export default AddPropertyButton;
