import React, { useState } from "react";
import KaniText from "../assets/text_kani_black.png";

const WelcomePage = () => {
  const [step, setStep] = useState<Number>(0);
  const [name, setName] = useState<String>("");
  const startClick = () => {
    setStep(1)
  };
  return (
    <>
      {step ? (
        0
      ) : (
        <div className="bg-purple-500 min-h-screen flex flex-col justify-between relative overflow-hidden">
          <h2 className="text-2xl text-purple-50 ml-12 mt-11 font-bold">
            Bienvenido
          </h2>
          <div className="relative max-w-xl">
            <svg viewBox="0 0 200 200">
              <path
                fill="#F2F4F8"
                d="M65.4,-0.1C65.4,32.1,32.7,64.3,-0.2,64.3C-33,64.3,-66.1,32.1,-66.1,-0.1C-66.1,-32.4,-33,-64.9,-0.2,-64.9C32.7,-64.9,65.4,-32.4,65.4,-0.1Z"
                transform="translate(100 100)"
              />
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img src={KaniText} alt="KANI" />
            </div>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 390 206"
              fill="none"
              className=""
            >
              <path
                d="M413 140.5C413 224.171 310.862 308 194.924 308C78.9861 308 -15 240.171 -15 156.5C-15 72.8289 -12.7281 0 103.21 0C219.147 0 413 56.8288 413 140.5Z"
                fill="white"
              />
            </svg>
            <button
              className="block bg-amber-400 text-lg text-amber-50 w-max mx-auto py-3 px-6 rounded-md shadow-xl font-bold absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              onClick={startClick}
            >
              Click para iniciar
            </button>
          </div>
        </div>
      )}
      {
        step ? 1 :(
          <div></div>
        )
      }
      {
        step ? 2 : (
          <div></div>
        )
      }
    </>
  );
};

export default WelcomePage;
