"use client";
import Modal from "./Modals";
import { useState } from "react";
import useSignupModal from "@/app/hooks/useSingupModal";
import CustomButtons from "../forms/CustomButtons";
const SignupModal = () => {
  const signupModal =useSignupModal();
  const [showModal, setShowModal] = useState();
  const content = (
    <>
      <form className="space-y-4">
        <input type="email" placeholder="email address" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"/>
        <input type="password" placeholder="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"/>
        <input type="password" placeholder="repeat password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"/>
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">Error</div>
        <CustomButtons label="submit"
        onClick={()=>{console.log("submitted")}}/>
      </form>
    </>
  );
  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Signup"
      content={content}
    />
  );
};
export default SignupModal;
