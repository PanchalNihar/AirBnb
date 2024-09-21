'use client';
import usePropertyModal from "@/app/hooks/usePropertyModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyButtonProp {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProp> = ({
  userId
}) => {
  const loginModal = useLoginModal();
  const addPropertyModal = usePropertyModal();

  const airbnbYourHome = () => {
    if (userId) {
      addPropertyModal.open();
    } else {
      loginModal.open();
    }
  };

  return (
    <div
      onClick={airbnbYourHome}
      className="p-3 px-6 text-sm font-semibold text-gray-800 border border-gray-300 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-gray-100 cursor-pointer transform hover:scale-105 active:scale-95"
    >
      VacyStay your home
    </div>
  );
};

export default AddPropertyButton;
