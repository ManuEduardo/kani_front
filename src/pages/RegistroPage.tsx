import React, { useEffect, useState } from 'react'
import Pinchos from '../assets/pinchos.png'
import Arrow1 from '../assets/Arrow 1.png'
import Arrow2 from '../assets/Arrow 2.png'
import Gps from '../assets/Gps.png'
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import KaniText from "../assets/text_kani_white.png";
import Loader from './Loaders/Loader'
import { useNavigate } from "react-router-dom";
import FooterGaba from '../components/FooterGaba';
import { ROUTES } from '../constans'
const RegistroPage = () => {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);
    const redirectToAnotherRoute = () => {
        navigate(ROUTES.home);
    };
    useEffect(() => {
        if (showLoader) {
            const timer = setTimeout(() => {
                setShowLoader(false);
            }, 1000);
            return () => clearTimeout(timer);
        }

    }, []);
    const show = () => {
        setStep(2)
        setShowLoader(true)
    }
    return (
        <>
            {step === 0 && (
                <div className="h-screen bg-purple-500 font-mono">
                    <div className="h-[7%]">
                        <img src={KaniText} alt="KANI" className=" h-full mx-auto pt-4 pb-2" />
                    </div>
                    <div className=''>
                        <div className='w-5/6 mx-auto h-[140px] relative'>
                            <div className='bg-white absolute top-0 left-0 h-[400px] w-full rounded-full -z-[1]'>

                            </div>
                            <img src={Pinchos} alt="" className='mx-auto h-full p-1' />
                        </div>
                        <div className='px-1 w-4/5 mx-auto bg-white h-[620px] pb-6 pt-1 rounded-lg shadow-2xl shadow-black/50'>
                            <div className='text-center py-1 pb-5'>
                                <p className='text-2xl'>¿Cómo has estado?</p>
                                <p className='text-md'>selecciona</p>
                            </div>
                            <div className='flex justify-center gap-6'>
                                <img src={Arrow2} alt="" />
                                <div className='grid gap-4 text-md'>
                                    <button className='text-white font-bold bg-amber-400 px-3 py-1.5 rounded-lg shadow-lg shadow-amber-400/50'
                                        onClick={show}
                                    >
                                        contento
                                    </button>
                                    <button className='text-white font-bold bg-orange-400 px-3 py-1.5 rounded-lg shadow-lg shadow-orange-400/50' onClick={show}>
                                        sereno
                                    </button>
                                    <button className='text-white font-bold bg-green-400 px-3 py-1.5 rounded-lg shadow-lg shadow-green-400/50' onClick={show}>
                                        regular
                                    </button>
                                    <button className='text-white font-bold bg-indigo-400 px-3 py-1.5 rounded-lg shadow-lg shadow-indigo-400/50' onClick={show}>
                                        agotado
                                    </button>
                                    <button className='text-white font-bold bg-purple-400 px-3 py-1.5 rounded-lg shadow-lg shadow-purple-400/50' onClick={show}>
                                        ansioso
                                    </button>
                                    <button className='text-white font-bold bg-blue-400 px-3 py-1.5 rounded-lg shadow-lg shadow-blue-400/50' onClick={show}>
                                        estresado
                                    </button>
                                    <button className='text-white font-bold bg-cyan-400 px-3 py-1.5 rounded-lg shadow-lg shadow-cyan-400/50' onClick={show}>
                                        angustiado
                                    </button>
                                    <button className='text-white font-bold bg-slate-400 px-3 py-1.5 rounded-lg shadow-lg shadow-slate-400/50' onClick={show}>
                                        triste
                                    </button>

                                </div>
                                <img src={Arrow1} alt="" />
                            </div>
                        </div>
                        <FooterGaba content="No te preocupes, sé honesto y confía." />
                    </div>
                </div>
            )}
            {showLoader && (
                <Loader idx={5} />
            )}
            {/* {step === 1 && (
                <div className="h-screen font-mono">
                    <div className="h-[7%]">
                        <img src={KaniText} alt="KANI" className=" h-full mx-auto pt-4 pb-2" />
                    </div>
                    <div>
                        <p>
                            ¿Qué aspectos de tu vida te gustaría mejorar?
                        </p>
                        <img src={Gps} alt="" />
                    </div>
                    <div>

                    </div>
                    <div className='absolute bottom-0 left-0 flex flex-col'>
                        <div className='relative'>
                            <img src={Img1} alt="" className='absolute top-0' />
                        </div>
                        <img src={Img2} alt="" />
                    </div>
                </div>
            )} */}
        </>
    )
}

export default RegistroPage