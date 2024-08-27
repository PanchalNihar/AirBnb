"use client";
import Image from "next/image";
import Modal from "./Modals";
import Categories from "../addProperty/Categories";
import LoginModal from "./LoginModal";
import usePropertyModal from "@/app/hooks/usePropertyModal";
import CustomButtons from "../forms/CustomButtons";
import { ChangeEvent, useState } from "react";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";
import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";
const AddPropertModal = () => {
  const addPropertymodal = usePropertyModal();
  const router=useRouter()
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBathrooms, setDataBathrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
  const [dataImage, setDataImage] = useState<File | null>(null);
  const setCategory = (category: string) => {
    setDataCategory(category);
  };
  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const tmpImage = event.target.files[0];
      setDataImage(tmpImage);
    }else{
      console.log('error')
    }
  };

  const submitForm = async () => {
    console.log("Submit form");
    if (
      dataTitle &&
      dataDescription &&
      dataPrice &&
      dataCountry &&
      dataImage &&
      dataCategory
    ) {
      const formData = new FormData();
      formData.append("title", dataTitle);              // Matches 'title'
      formData.append("description", dataDescription);  // Matches 'description'
      formData.append("price_per_night", dataPrice);    // Matches 'price_per_night'
      formData.append("bedrooms", dataBedrooms);        // Matches 'bedrooms'
      formData.append("bathrooms", dataBathrooms);      // Matches 'bathrooms'
      formData.append("guests", dataGuests);            // Matches 'guests'
      formData.append("country", dataCountry.label);    // Matches 'country'
      formData.append("country_code", dataCountry.value); // Matches 'country_code'
      formData.append("image", dataImage);              // Matches 'image'
      
      const response =await apiService.post('/api/properties/create/',formData)
      if(response.success){
        console.log("Success")
        router.push('/')
        addPropertymodal.close() //check this
      }
      
    }
  };
  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">Choose Category</h2>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButtons label="Next" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="mb-6 text-2xl">Describe your place</h2>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => {
                  setDataTitle(e.target.value);
                }}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => {
                  setDataDescription(e.target.value);
                }}
                className="w-full h-[2-00px] p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <CustomButtons
            label="previous"
            onClick={() => setCurrentStep(1)}
            className="mb-2 bg-black hob=ver:bg-gray-800"
          />
          <CustomButtons label="Next" onClick={() => setCurrentStep(3)} />
        </>
      ) : currentStep == 3 ? (
        <>
          <h2 className="mb-6 text-2xl">Details</h2>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Price per night</label>
              <input
                type="text"
                value={dataPrice}
                onChange={(e) => {
                  setDataPrice(e.target.value);
                }}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Bedrooms</label>
              <input
                type="text"
                value={dataBedrooms}
                onChange={(e) => {
                  setDataBedrooms(e.target.value);
                }}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Bathrooms</label>
              <input
                type="text"
                value={dataBathrooms}
                onChange={(e) => {
                  setDataBathrooms(e.target.value);
                }}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Maximum Guests</label>
              <input
                type="text"
                value={dataGuests}
                onChange={(e) => {
                  setDataGuests(e.target.value);
                }}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <CustomButtons
            label="previous"
            onClick={() => setCurrentStep(2)}
            className="mb-2 bg-black hob=ver:bg-gray-800"
          />
          <CustomButtons label="Next" onClick={() => setCurrentStep(4)} />
        </>
      ) : currentStep == 4 ? (
        <>
          <h2 className="mb-6 text-2xl">Location</h2>
          <div className="pt-3 pb-6 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
            />
          </div>
          <CustomButtons
            label="previous"
            onClick={() => setCurrentStep(3)}
            className="mb-2 bg-black hob=ver:bg-gray-800"
          />
          <CustomButtons label="Next" onClick={() => setCurrentStep(5)} />
        </>
      ) : (
        <>
          <h2 className="mb-6 text-2xl">Image</h2>
          <div className="pt-3 pb-6 space-y-4">
            <div className="py-4 [x-6 bg-gray-600 text-white rounded-xl">
              <input type="file" accept="image/*" onChange={setImage} />
            </div>
            {dataImage && (
              <div className="w-[200px] h-[150px] relative">
                <Image
                  fill
                  alt="Uploaded Image"
                  src={URL.createObjectURL(dataImage)}
                  className="h-full w-full object-cover rounded-xl"
                ></Image>
              </div>
            )}
          </div>
          <CustomButtons
            label="previous"
            onClick={() => setCurrentStep(4)}
            className="mb-2 bg-black hob=ver:bg-gray-800"
          />
          <CustomButtons label="Submit" onClick={submitForm} />
        </>
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={addPropertymodal.isOpen}
        close={addPropertymodal.close}
        label="Add Property"
        content={content}
      />
    </>
  );
};
export default AddPropertModal;
