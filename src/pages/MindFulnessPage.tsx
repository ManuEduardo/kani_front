import { useState } from 'react'
import KaniText from "../assets/text_kani_white.png";
import ArrowLeft from '../assets/arrow-left.png'
import FooterGaba from "../components/FooterGaba";
import MindImg1 from '../assets/mind_fulness1.png'
import MindMenu from './MindFulness/MindMenu';
const MindFulnessPage = () => {
    const [step, setStep] = useState(0);
    const changeStep = (idx: number) => {
        setStep(idx);
    };
    return (
        <>
            <div className="h-[7%] bg-purple-500 shadow-2xl">
                <img src={KaniText} alt="KANI" className=" h-full mx-auto pt-4 pb-2" />
            </div>
            {step === 0 && (
                <div>
                    <div className='h-screen w-screen
                    absolute top-0 left-0' onClick={() => changeStep(1)}>
                    </div>
                    <div className="px-2 pl-6 mt-4 py-1 flex justify-center h-1/5">
                        <div className="absolute left-10">
                            <button><img src={ArrowLeft} alt="" /></button>
                        </div>
                        <p className="text-2xl my-2">Mindfulness</p>
                    </div>
                    <div className='w-4/5 mx-auto'>
                        <p className='text-4xl w-3/5 mx-auto text-purple-500
                        text-center my-7'>
                            Habilidades "Qué" y "Cómo"
                        </p>
                        <img src={MindImg1} alt="" className='mx-auto' />
                    </div>
                    <FooterGaba content="Aventurémonos juntos y haz click a tu pantalla" />
                </div>
            )}

            {step === 1 && (
                <div>
                    <div className="px-2 pl-6 mt-4 py-1 flex h-1/5 items-center">
                        <div className="">
                            <button onClick={() => changeStep(0)}><img src={ArrowLeft} alt="" className='w-4/6' /></button>
                        </div>
                        <p className="text-md">Mindfulnessa</p>
                    </div>
                    <MindMenu />
                    <FooterGaba content="Aprendemos Juntos" />
                </div>
            )}
        </>

    )
}

export default MindFulnessPage