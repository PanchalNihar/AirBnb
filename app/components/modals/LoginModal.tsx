"use client";
import Modal from "./Modals";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import CustomButtons from "../forms/CustomButtons";
const LoginModal = () => {
  const loginModal = useLoginModal();
  const [showModal, setShowModal] = useState(false);
  const content = (
    <>
      <form className="space-y-4">
        <input type="email" placeholder="email address" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"/>
        <input type="password" placeholder="password" className="w-full px-4 h-[54px] border border-gray-100 rounded-xl"/>
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">Error</div>
        <CustomButtons label="submit"
        onClick={()=>{console.log("submitted")}}/>
      </form>
    </>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="login"
      content={content}
    />
  );
};
export default LoginModal;
