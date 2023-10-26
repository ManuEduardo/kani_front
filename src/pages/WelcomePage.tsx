import React, { useState } from "react";
import KaniText from "../assets/text_kani_black.png";
import animal_icon from "../assets/animal_icon.png";
import yoga_icon from "../assets/yoga_icon.png";

const WelcomePage = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const startClick = () => {
    setStep(1);
  };

  return (
    <>
      {step === 0 && (
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

      {step === 1 && (
        <div>
          <div className="absolute top-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="88"
              height="185"
              viewBox="0 0 88 185"
              fill="none"
            >
              <path
                d="M274 118.5C274 182.289 217.14 185 147 185C76.8598 185 0 164.289 0 100.5C0 36.7111 56.8598 -15 127 -15C197.14 -15 274 54.7111 274 118.5Z"
                fill="#925CF1"
              />
            </svg>
          </div>

          <div className="flex flex-col items-center justify-center h-screen">
            <img src={animal_icon} alt="animal" className="mx-auto" />
            <div className="text-center">
              <p className="mt-6 text-center text-lg font-outfit font-normal text-opacity-70 leading-8 tracking-widest">
                ¿Cómo deseas llamarte?
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="295"
              height="78"
              viewBox="0 0 295 78"
              fill="none"
            >
              <g filter="url(#filter0_ddd_344_41)">
                <path
                  d="M4 6C4 2.68629 6.68629 0 10 0H285C288.314 0 291 2.68629 291 6V64C291 67.3137 288.314 70 285 70H10C6.68629 70 4 67.3137 4 64V6Z"
                  fill="#FEBF01"
                />
              </g>
              <defs>
                <filter
                  id="filter0_ddd_344_41"
                  x="0"
                  y="0"
                  width="295"
                  height="78"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_344_41"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_344_41"
                    result="effect2_dropShadow_344_41"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect2_dropShadow_344_41"
                    result="effect3_dropShadow_344_41"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect3_dropShadow_344_41"
                    result="shape"
                  />
                </filter>
              </defs>
              <foreignObject x="50" y="25" width="200" height="20">
                <input
                  type="text"
                  className="text-center text-opacity-70 tracking-widest bg-transparent border-none outline-none w-full h-full leading-8 font-black text-2xl"
                  onKeyDown={(e) => {
                    if (
                      e.key === "Enter" &&
                      e.target instanceof HTMLInputElement
                    ) {
                      setName(e.target.value);
                      setStep(2);
                    }
                  }}
                />
              </foreignObject>
            </svg>
          </div>

          <div className="absolute bottom-0">
            {
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="188"
                height="117"
                viewBox="0 0 188 117"
                fill="none"
              >
                <g filter="url(#filter0_d_344_44)">
                  <path
                    d="M184 133.373C158 287.373 155.349 164.373 83.0001 164.373C10.6508 164.373 -47.9999 102.14 -47.9999 25.3729C-47.9999 -51.3947 10.6508 71.3729 83.0001 71.3729C155.349 71.3729 184 56.6053 184 133.373Z"
                    fill="#925CF1"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_344_44"
                    x="-51.9999"
                    y="0.123169"
                    width="240"
                    height="218.771"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_344_44"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_344_44"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
          </div>
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-col min-h-screen">
          <div className="items-center h-[8%] w-[30%] flex mx-auto mb-8 mt-8">
            <img src={KaniText} alt="KANI" className="pt-4 pb-2" />
          </div>
          <div className="items-center mb-10">
            <img src={yoga_icon} alt="yoga" className="mx-auto w-3/5 h-3/5" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-purple-500 p-4 rounded-t-lg">
            <div className="flex flex-col items-start">
              <p className="mt-2 text-left text-white text-lg font-otomanopee-one leading-8 tracking-widest ">
                Sabías que....
              </p>
              <p className="mt-2 text-left text-white text-sm font-outfit leading-5 tracking-wide">
                El GABA, o ácido gamma-aminobutírico, es un aminoácido y
                neurotransmisor que regula la excitabilidad cerebral
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomePage;
