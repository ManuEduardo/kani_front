import React, { useEffect, useState } from 'react'
import ParticipateImg from '../../assets/participar.png'
import Meditar7 from '../../assets/salud_mental7.png'
import Meditar8 from '../../assets/salud_mental8.png'
import Audifono from '../../assets/audifono.png'
import Repro from '../../assets/reproducir.png'
import Piña from '../../assets/piña.png'
import Loader from '../Loaders/Loader'
interface Props {
  localStep: number,
  changeLocalStep: () => void,
  onChangeStep: (step: number) => void;
}

const Participar = ({ localStep, changeLocalStep, onChangeStep }: Props) => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {

    if (showLoader) {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const show = () => {
    changeLocalStep()
    setShowLoader(true)
  }
  return (
    <div className='px-10'>

      <div className='flex items-center gap-4 mb-3 mt-5'>
        <img src={ParticipateImg} alt="" className='w-10' />
        <p className='font-mono text-xl font-medium'>Participar</p>
      </div>
      {localStep === 0 && (
        <div className='mt-20 relative' onClick={() => changeLocalStep()}>
          <div className='text-center mb-6 text-lg px-4'>
            <p className='whitespace-pre-wrap'>
              Cuando fluimos y somos un@ solo con la experiencia
            </p>
          </div>
          <img src={Meditar7} alt="" className='mx-auto' />
          <p className='text-center'>Estar plenamente presente.</p>
        </div>
      )}
      {localStep === 1 && (
        <div className='text-center px-4 py-4'>
          <div className='grid py-6 gap-1 font-mono text-xl'>
            <p className='whitespace-pre-wrap'>
              Colócate los auriculares.
            </p>
          </div>
          <div className='mb-10 mt-5 relative flex justify-center' onClick={() => changeLocalStep()}>
            <div className='
            rounded-full white w-72 h-72 
            bg-gray-200 flex justify-end items-center'>
              <img src={Audifono} alt="" className='w-4/6 mx-auto' />
            </div>

          </div>
        </div>
      )}
      {localStep === 2 && (
        <div className='text-center px-4 py-4'>
          <div className='grid py-6 gap-1 font-mono text-xl'>
            <p className='whitespace-pre-wrap'>
              Selecciona tu canción favorita.
            </p>
          </div>
          <div className='mb-10 mt-5 relative flex flex-col justify-center' onClick={() => changeLocalStep()}>
            <div className='
         rounded-full white w-72 h-72 
         bg-gray-200 flex justify-end items-center'>
              <img src={Repro} alt="" className='w-4/6 mx-auto' />
            </div>
            <div className='font-black mt-5'>
              Aun no das Play
            </div>
          </div>
        </div>
      )}
      {localStep === 3 && (
        <div className='text-center px-4 py-4'>
          <div className='mb-10 relative flex justify-center' onClick={() => show()}>
            <div className=' absolute -z-10 top-0
      rounded-full white w-[450px] h-[450px]
      bg-gray-300 flex justify-end items-center'>
              <div className='relative p-8'>
                <p className='whitespace-pre-wrap px-16 mb-6'>
                  Cuando el contador inicie, da play y baila como te guste
                </p>
                <img src={Piña} alt="" className='w-4/6 mx-auto' />
              </div>
            </div>

          </div>
        </div>
      )}
      {localStep === 4 && (
        <>
          {showLoader ? (
            <Loader idx={2} />
          ) : (
            <div className='mt-20 relative' onClick={() => onChangeStep(0)}>
              <div className='text-center mb-6 text-purple-500 text-2xl font-bold'>
                <p className='whitespace-pre-wrap'>
                  !Muy bien!
                </p>
              </div>
              <img src={Meditar8} alt="" className='mx-auto top-0' />
            </div>
          )}
        </>

      )}
    </div>
  )
}

export default Participar