import { useState } from "react";
import animal_icon from "../../assets/animal_icon.png";
import { useStore } from "../../context/PageProvider";
import { EmptyUser } from "../../models";
import { useSetUserContext } from "../../context/UserProvider";

const RegisterPage = () => {
    const [nameUser, setNameUser] = useState("");
    const { dispatch } = useStore()
    const setUser = useSetUserContext()

    const pageNext = () => {
        dispatch({ type: 'NEXT' });
    };
    
    return (
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
                            value={nameUser}
                            className="text-center text-opacity-70 tracking-widest bg-transparent border-none outline-none w-full h-full leading-8 font-black text-2xl"
                            onKeyDown={(e) => {
                                if (
                                    e.key === "Enter" &&
                                    e.target instanceof HTMLInputElement
                                ) {
                                    pageNext();
                                    console.log(nameUser);
                                    setUser({ ...EmptyUser, name: nameUser });
                                }
                            }}
                            onChange={(e) => {
                                setNameUser(e.target.value);
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
    )
}

export default RegisterPage