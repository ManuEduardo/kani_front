import { useState } from 'react'
import KaniText from "../assets/text_kani_white.png";
import ArrowLeft from '../assets/arrow-left.png'
import FooterGaba from "../components/FooterGaba";
import MindImg1 from '../assets/mind_fulness1.png'
import MindMenuQue from './MindFulness/MindMenuQue';
import MindMenuComo from './MindFulness/MindMenuComo';
const MindFulnessPage = () => {
    const [step, setStep] = useState(0);
    const [stepMenu, setStepMenu] = useState(0);
    const [menu, setMenu] = useState(0);
    const [localStep, setLocalStep] = useState(0);
    const changeLocalStep = () => {
        setLocalStep(localStep + 1);
    };

    const changeStep = (idx: number) => {
        setStep(idx);
        setMenu(0)
        setStepMenu(0)
    };

    const changAll = (idx: number) =>{
        setStepMenu(idx)
        setLocalStep(0)
    }

    const changeMenu = (idx: number) => {
        setMenu(idx)
        setStepMenu(0)
    }

    const returnAction = () => {
        if (stepMenu === 0) {
            changeStep(0)
        } else {
            if (localStep === 0) {
                changeMenu(0)
            }else{
                setLocalStep(localStep - 1)
            }
        }

    }
    return (
        <>
            <div className="h-[7%] bg-purple-500">
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
                <div className='font-mono'>
                    <div className="px-2 pl-6 mt-4 py-1 flex h-1/5 items-center">
                        <div className="">
                            <button onClick={returnAction}><img src={ArrowLeft} alt="" className='w-4/6' /></button>
                        </div>
                        <p className={`text-md ${(menu === 1 && stepMenu > 0) && 'text-white'}`}>Mindfulness</p>
                    </div>
                    {menu === 0 ?
                        <MindMenuQue localStep={localStep} changeLocalStep={changeLocalStep} stepQue={stepMenu} setStepQue={changAll} />
                        : <MindMenuComo stepComo={stepMenu} setStepComo={setStepMenu} />}

                    <div className={`${stepMenu > 0 && 'hidden'} flex justify-center gap-2`}>
                        <button className={`h-2 w-5 rounded-3xl ${menu === 0 ? 'bg-purple-600' : 'bg-purple-200'}`} onClick={() => changeMenu(0)}></button>
                        <button className={`h-2 w-5 rounded-3xl ${menu === 1 ? 'bg-purple-600' : 'bg-purple-200'}`} onClick={() => changeMenu(1)}></button>
                    </div>
                    <FooterGaba content="Aprendemos Juntos" />
                </div>
            )}
        </>

    )
}

export default MindFulnessPage