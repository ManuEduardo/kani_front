import React, { useState } from 'react'
import EyeImg from '../../assets/eye_purple.png'
import Eye1 from '../../assets/eye1.png'
import Meditar1 from '../../assets/salud_mental1.png'
const Observar = () => {
    const [step, setStep] = useState(0);
    const changeStep = (idx: number) => {
        setStep(idx);
    };
    return (
        <div className='px-10'>
            <div className='flex items-center gap-4 mb-3 mt-5'>
                <img src={EyeImg} alt="" className='w-10' />
                <p className='font-mono text-xl font-medium'>Observar</p>
            </div>
            {step === 0 && (
                <div className='bg-amber-200 rounded-lg text-center px-4 py-4'>
                    <div className='grid py-6 gap-1 font-mono px-2'>
                        <p>
                            Observar la experiencia con tus sentidos sin describir lo que estás observando.
                        </p>
                        <p>
                            Mira lo que está sucediendo dentro y fuera de tu cuerpo
                        </p>
                    </div>
                    <div className='my-10 relative flex justify-center' onClick={() => changeStep(1)}>
                        <div className='rounded-full white w-52 h-52 bg-white'></div>
                        <img src={Eye1} alt="" className='mx-auto absolute top-0' />
                    </div>
                </div>
            )}
            {step === 1 && (
                <div className='mt-20 relative' onClick={() => changeStep(2)}>
                    <div className='text-center mb-6 text-amber-300 font-bold'>
                        <p className=''>Concéntrate en el aire</p>
                        <p>entrando y saliendo de tu nariz</p>
                    </div>
                    <img src={Meditar1} alt="" className='mx-auto top-0' />
                </div>
            )}
        </div>
    )
}

export default Observar