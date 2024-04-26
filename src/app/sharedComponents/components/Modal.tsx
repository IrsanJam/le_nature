// src/components/Modal.tsx
import React from "react";

interface ModalProps {
  imageUrl: string | undefined;
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, setPopUp }) => {
  return (
    <div className="w-screen  h-screen bg-black bg-opacity-30 fixed top-0 right-0 flex justify-center items-center">
      <div className="bg-white p-3 relative rounded-md shadow-md">
        <img src={imageUrl} alt="Image" className="md:w-[60vw] w-[80vw] h-[50vh] md:h-[80vh] object-cover rounded-md" />
        <div className="flex justify-start mt-5">
          <button className="absolute top-[-10px] right-[-10px] p-3  border-zinc-300 border-[0.2px] rounded-full bg-white hover:bg-red-500 hover:scale-110" onClick={() => setPopUp(false)}>
            <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/delete-sign--v1.png" alt="delete-sign--v1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
