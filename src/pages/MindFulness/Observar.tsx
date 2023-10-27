import { useState } from 'react'
import EyeImg from '../../assets/eye_purple.png'
import Watch from '../../assets/watch.gif'
import Eye1 from '../../assets/eye1.png'
import Meditar1 from '../../assets/salud_mental1.png'
import Meditar2 from '../../assets/salud_mental2.png'
import Meditar3 from '../../assets/salud_mental3.png'
import Nose from '../../assets/nose.png'

interface Props {
    onChangeStep: (step: number) => void;
}

const Observar = ({ onChangeStep }: Props) => {
    const [localStep, setLocalStep] = useState(0);
    const changeLocalStep = (idx: number) => {
        setLocalStep(idx);
    };
    return (
        <div className='px-10'>

            <div className='flex items-center gap-4 mb-3 mt-5'>
                <img src={EyeImg} alt="" className='w-10' />
                <p className='font-mono text-xl font-medium'>Observar</p>
            </div>
            {localStep === 0 && (
                <div className='bg-amber-200 rounded-lg text-center px-4 py-4'>
                    <div className='grid py-6 gap-1 font-mono px-2'>
                        <p>
                            Observar la experiencia con tus sentidos sin describir lo que estás observando.
                        </p>
                        <p>
                            Mira lo que está sucediendo dentro y fuera de tu cuerpo
                        </p>
                    </div>
                    <div className='my-10 relative flex justify-center' onClick={() => changeLocalStep(1)}>
                        <div className='rounded-full white w-52 h-52 bg-white'></div>
                        <img src={Eye1} alt="" className='mx-auto absolute top-0' />
                    </div>
                </div>
            )}
            {localStep === 1 && (
                <div className='mt-20 relative' onClick={() => changeLocalStep(2)}>
                    <div className='text-center mb-6 text-amber-300 font-bold'>
                        <p className=''>Concéntrate en el aire</p>
                        <p>entrando y saliendo de tu nariz</p>
                    </div>
                    <img src={Meditar1} alt="" className='mx-auto top-0' />
                </div>
            )}
            {localStep === 2 && (
                <div className='mt-10 relative' onClick={() => changeLocalStep(3)}>
                    <div className='text-center mb-6'>
                        <p className='whitespace-pre-wrap'>
                            En la vida diaria puedes observar y sentir
                            tus pensamientos, tus sentimientos y tus
                            comportamientos.
                        </p>
                    </div>
                    <img src={Meditar2} alt="" className='mx-auto top-0' />
                </div>
            )}
            {localStep === 3 && (
                <div className='bg-amber-200 rounded-lg text-center px-4 py-4'>
                    <div className='grid py-6 gap-1 font-mono px-4'>
                        <p className='whitespace-pre-wrap'>
                            Cuando sientas que dejaste de concentrarte, no te fijes en eso, vuelve tu mente a la respiración.
                        </p>
                    </div>
                    <div className='my-10 relative flex justify-center' onClick={() => changeLocalStep(4)}>
                        <div className='
                        rounded-full white w-52 h-52 
                        bg-white flex justify-end items-center pr-8'>
                            <img src={Nose} alt="" className='w-4/6' />
                        </div>

                    </div>
                </div>
            )}
            {localStep === 4 && (
                <div className='bg-amber-200 rounded-lg text-center px-4 py-4'>
                    <div className='grid py-6 gap-1 font-mono px-4'>
                        <p className='whitespace-pre-wrap'>
                            Siente el aire entrando y saliendo de tus fosas nasales.
                        </p>
                    </div>
                    <div className='my-12  relative flex justify-center' onClick={() => changeLocalStep(5)}>
                        <div className='
                    rounded-full white w-52 h-52 
                    bg-white flex justify-end items-center pr-8'>
                            <img src={Nose} alt="" className='w-4/6' />
                        </div>

                    </div>
                </div>
            )}
            {localStep === 5 && (
                <div className='border border-amber-500 rounded-lg text-center px-4 py-4'>
                    <div className='grid py-6 gap-1 font-mono px-4'>
                        <p className='whitespace-pre-wrap'>
                            Siente el aire frío rozar tus fosas nasales
                        </p>
                    </div>
                    <div className='my-12  relative flex justify-center' onClick={() => changeLocalStep(6)}>
                        <div className='
                    rounded-full white w-52 h-52 
                    bg-white flex justify-end items-center pr-8'>
                            <img src={Nose} alt="" className='w-4/6' />
                        </div>

                    </div>
                </div>
            )}
            {localStep === 6 && (
                <div className='mt-20 relative' onClick={() => changeLocalStep(7)}>
                    <div className='text-center mb-6 text-purple-500 text-2xl font-bold'>
                        <p className='whitespace-pre-wrap'>
                            Práctiquemos por 30 segundos
                        </p>
                    </div>
                    <img src={Watch} alt="" className='mx-auto top-0' />
                </div>
            )}
            {localStep === 7 && (
                <div className='mt-20 relative' onClick={() => onChangeStep(0)}>
                    <div className='text-center mb-6 text-purple-500 text-2xl font-bold'>
                        <p className='whitespace-pre-wrap'>
                            !Muy bien!
                        </p>
                    </div>
                    <img src={Meditar3} alt="" className='mx-auto top-0' />
                </div>
            )}
        </div>
    )
}

export default Observar