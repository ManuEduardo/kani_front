import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import KaniText from "../assets/text_kani_white.png";
import Meditar12 from '../assets/salud_mental12.png'
import ArrowLeft from '../assets/arrow-left.png'
import PareLogo from '../assets/parelogo.png'
import FooterGaba from "../components/FooterGaba";
import AlientoImg from '../assets/stop/aliento.png';
import DetenerImg from '../assets/stop/detener.png';
import ObservacionImg from '../assets/stop/observacion.png';
import YogaImg from '../assets/stop/yoga.png';
import AImg from '../assets/autocalmarse/A.png';
import ChakraImg from '../assets/autocalmarse/chakra.png';
import Auto1Img from '../assets/autocalmarse/auto1.png';
import Auto2Img from '../assets/autocalmarse/auto2.png';
import Auto3Img from '../assets/autocalmarse/auto3.png';
import Auto4Img from '../assets/autocalmarse/auto4.png';
import { ROUTES } from '../constans';
const Controlpage = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(0);
    const [stepMenu, setStepMenu] = useState(0);
    const changeStep = (idx: number) => {
        setStep(idx)
        setStepMenu(0)
    };

    return (
        <>
            <div className="h-[7%] bg-purple-500 shadow-2xl">
                <img src={KaniText} alt="KANI" className=" h-full mx-auto pt-4 pb-2" />
            </div>
            {step === 0 ? (
                <div className="font-mono">
                    <div className='h-screen w-screen
                    absolute top-0 left-0' onClick={() => changeStep(1)}>
                    </div>
                    <div className="px-2 pl-6 mt-4 py-1 flex justify-center h-1/5">
                        <div className="absolute left-10">
                            <button><img src={ArrowLeft} alt="" onClick={() => navigate(ROUTES.tools)} /></button>
                        </div>
                        <p className="text-2xl my-2"></p>
                    </div>
                    <div className='flex flex-col text-center h-[80%]'>
                        <p className='text-3xl px-10 w-4/5 mx-auto text-purple-500 mt-10 mb-7'>
                            Control del ánimo
                        </p>
                        <img src={Meditar12} alt="" className='w-5/6 mx-auto' />
                    </div>

                    <FooterGaba content="Aventuramonos juntos y haz click a la pantalla" />
                </div>
            ) : (
                <div className="font-mono">
                    <div className="px-2 pl-6 mt-4 py-1 flex h-1/5 items-center">
                        <div className="">
                            <button onClick={() => changeStep(step - 1)}><img src={ArrowLeft} alt="" className='w-4/6' /></button>
                        </div>
                        <p className={`text-md`}>Control del ánimo</p>
                    </div>
                    <div className='flex items-center gap-4 mb-9 mt-3 pl-10'>
                        {step <= 5 && (
                            <>
                                <img src={PareLogo} alt="" className='w-10' />
                                <p className='font-mono text-xl font-medium'>STOP</p>
                            </>
                        )}

                        {step >= 6 && (
                            <>
                                <img src={ChakraImg} alt="" className='w-10' />
                                <p className='font-mono text-xl font-medium'>Autocalmarse</p>
                            </>
                        )}
                    </div>

                    <div className='w-4/5 mx-auto'>
                        {step === 1 && (
                            <>
                                <div className='flex items-center justify-end pr-7
                        bg-amber-400 mx-auto relative border w-4/5
                        rounded-lg shadow shadow-amber-400/60
                        mb-16'>
                                    <button onClick={() => changeStep(2)}
                                        className='w-[100px] h-[100px] p-4 absolute
                                text-5xl font-bold
                                -left-10 rounded-full
                             inline-flex items-center justify-center border border-amber-400 bg-white'>
                                        S
                                    </button>
                                    <p className='text-2xl py-4 px-2'>
                                        Detenerse
                                    </p>
                                </div>
                                <div className='flex items-center justify-end pr-5
                        bg-cyan-400 mx-auto relative border w-4/5
                        rounded-lg shadow shadow-amber-400/60
                        mb-16'>
                                    <button onClick={() => changeStep(3)}
                                        className='w-[100px] h-[100px] p-4 absolute
                                text-5xl font-bold
                                -left-10 rounded-full
                             inline-flex items-center justify-center border border-cyan-400 bg-white'>
                                        T
                                    </button>
                                    <p className='text-xl py-4 px-2'>
                                        Un Paso atrás
                                    </p>
                                </div>
                                <div className='flex items-center justify-end pr-6
                        bg-green-400 mx-auto relative border w-4/5
                        rounded-lg shadow shadow-amber-400/60
                        mb-16'>
                                    <button onClick={() => changeStep(4)}
                                        className='w-[100px] h-[100px] p-4 absolute
                                text-5xl font-bold
                                -left-10 rounded-full
                             inline-flex items-center justify-center border border-green-400 bg-white'>
                                        O
                                    </button>
                                    <p className='text-3xl py-4 px-2'>
                                        Observar
                                    </p>
                                </div>
                                <div className='flex items-center justify-end pr-1
                        bg-red-400 mx-auto relative border w-4/5
                        rounded-lg shadow shadow-amber-400/60
                        mb-16'>
                                    <button onClick={() => changeStep(5)}
                                        className='w-[100px] h-[100px] p-4 absolute
                                text-5xl font-bold
                                -left-10 rounded-full
                             inline-flex items-center justify-center border border-red-400 bg-white'>
                                        P
                                    </button>
                                    <p className='text-lg py-4 px-2'>
                                        Actuar mi mindful
                                    </p>
                                </div>
                            </>

                        )}
                        {step === 2 && (
                            <>
                                <div className='bg-amber-400 rounded-lg text-center px-2 py-4 h-[500px] w-[270px] mx-auto'>
                                    <div className='py-6 text-center px-2 relative'>
                                        <div className='h-[50px]'>
                                            <div className='absolute -top-16 p-4 w-full flex items-center justify-center'>
                                                <p className='bg-white border text-5xl font-black
                                                shadow-lg shadow-gray-800/50
                                            rounded-full w-[100px] h-[100px] flex items-center justify-center'>
                                                    S
                                                </p>
                                            </div>
                                        </div>
                                        <p className='text-white text-2xl mb-6 font-bold'>Detenerse</p>
                                        <p className='whitespace-pre-wrap text-lg'>
                                            ¿Qué emociones están por tomar control?
                                        </p>
                                        <div className='flex justify-center items-center py-6'>
                                            <img src={DetenerImg} />
                                        </div>
                                        <p className='whitespace-pre-wrap text-lg'>
                                            No te muevas quedate quieto
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                        {step === 3 && (
                            <div className='bg-cyan-400 rounded-lg text-center px-2 py-4 h-[500px] w-[270px] mx-auto'>
                                <div className='py-6 text-center px-2 relative'>
                                    <div className='h-[50px]'>
                                        <div className='absolute -top-16 p-4 w-full flex items-center justify-center'>
                                            <p className='bg-white border text-5xl font-black
                                         shadow-lg shadow-gray-800/50
                                     rounded-full w-[100px] h-[100px] flex items-center justify-center'>
                                                T
                                            </p>
                                        </div>
                                    </div>
                                    <p className='text-white text-2xl mb-6 font-bold'>Un paso atrás</p>
                                    <p className='whitespace-pre-wrap text-lg'>
                                        Tómate un respiro profundo y libera tu mente de las emociones.
                                    </p>
                                    <div className='flex justify-center items-center py-6'>
                                        <img src={AlientoImg} />
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 4 && (
                            <>
                                <div className='bg-green-400 rounded-lg text-center px-2 py-4 h-[500px] w-[270px] mx-auto'>
                                    <div className='py-6 text-center px-2 relative'>
                                        <div className='h-[50px]'>
                                            <div className='absolute -top-16 p-4 w-full flex items-center justify-center'>
                                                <p className='bg-white border text-5xl font-black
                                                shadow-lg shadow-gray-800/50
                                            rounded-full w-[100px] h-[100px] flex items-center justify-center'>
                                                    O
                                                </p>
                                            </div>
                                        </div>
                                        <p className='text-white text-2xl mb-6 font-bold'>Observar</p>
                                        <p className='whitespace-pre-wrap px-4 text-lg'>
                                            Mira qué pasa a tu alrededor y dentro de ti.
                                        </p>
                                        <div className='flex justify-center items-center py-6'>
                                            <img src={ObservacionImg} />
                                        </div>
                                        <p className='whitespace-pre-wrap px-4 text-lg'>
                                            ¿Qué opciones para actuar tienes?
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                        {step === 5 && (
                            <>
                                <div className='bg-red-400 rounded-lg text-center px-4 py-4 h-[500px] w-[270px] mx-auto'>
                                    <div className='py-6 text-center px-2 relative'>
                                        <div className='h-[50px]'>
                                            <div className='absolute -top-16 p-4 w-full flex items-center justify-center'>
                                                <p className='bg-white border text-5xl font-black
                                                shadow-lg shadow-gray-800/50
                                            rounded-full w-[100px] h-[100px] flex items-center justify-center'>
                                                    P
                                                </p>
                                            </div>
                                        </div>
                                        <p className='text-white text-2xl mb-6 font-bold'>Ser MINDFUL</p>
                                        <p className='whitespace-pre-wrap px-4 text-lg'>
                                            Pregúntate por ti y tus valores, por lo que eligirías y harías para que esté todo mejor.
                                        </p>
                                        <div className='flex justify-center items-center py-6'>
                                            <img src={YogaImg} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        {/* AutoCalmarse */}
                        {step === 6 && (
                            <div className='bg-green-200 rounded-full text-center px-4 h-[450px] w-full mx-auto'>
                                <div className='py-6 text-center px-2 relative'>
                                    <div className='h-[60px] flex justify-center'>
                                        <img src={AImg} alt="" />
                                    </div>
                                    <p className='whitespace-pre-wrap p-4 text-lg'>
                                        Acaricia LENTAMENTE alguna superficie suave
                                    </p>
                                    <div className='flex justify-center items-center py-6'>
                                        <img src={Auto1Img} />
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 7 && (
                            <div className='bg-green-200 rounded-full text-center px-4 h-[450px] w-full mx-auto'>
                                <div className='py-6 text-center px-2 relative'>
                                    <div className='h-[60px] flex justify-center'>
                                        <img src={AImg} alt="" />
                                    </div>
                                    <p className='whitespace-pre-wrap p-4 text-lg'>
                                        CENTRATE en las sensaciones que genera
                                    </p>
                                    <div className='flex justify-center items-center py-6'>
                                        <img src={Auto2Img} />
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 8 && (
                            <div className='bg-green-200 rounded-full text-center px-4 h-[450px] w-full mx-auto'>
                                <div className='py-6 text-center px-2 relative'>
                                    <div className='h-[60px] flex justify-center'>
                                        <img src={AImg} alt="" />
                                    </div>
                                    <p className='whitespace-pre-wrap p-4 text-lg'>
                                        FIJATE en la experiencia de acariciar.
                                    </p>
                                    <div className='flex justify-center items-center py-6'>
                                        <img src={Auto3Img} />
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 9 && (
                            <div className='bg-pink-300 rounded-full text-center p-4 h-[450px] w-full mx-auto'>
                                <div className='py-6 text-center p-2 relative'>
                                    <div className='h-[60px] flex justify-center'>
                                        <img src={AImg} alt="" />
                                    </div>
                                    <p className='whitespace-pre-wrap p-4 py-7 text-lg'>
                                        Huele una colonia
                                    </p>
                                    <div className='flex justify-center items-center py-6'>
                                        <img src={Auto4Img} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <button onClick={() => changeStep(step + 1)}>
                        <FooterGaba content="" />
                    </button>
                </div>
            )}
        </>
    )
}

export default Controlpage