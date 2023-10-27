import { useState } from 'react'
import Meditar10 from '../../assets/salud_mental10.png'
interface Props {
  onChangeStep: (step: number) => void;
}

const UnoVez = ({ onChangeStep }: Props) => {
  const [localStep, setLocalStep] = useState(0);
  const changeLocalStep = (idx: number) => {
    setLocalStep(idx);
  };
  console.log(localStep, onChangeStep, changeLocalStep);
  return (
    <div className='px-10'>
      <div className='h-[270px]'>
        <div className='absolute w-full bg-purple-500 -z-10 top-0 left-0 h-[400px]'>
        </div>
        <div className='p-4 relative flex justify-center'>
          <img src={Meditar10} alt="" className='mx-auto w-4/5' />
          <div className=' absolute w-4/5 bottom-0
          flex items-center justify-center
                            bg-cyan-400 mx-auto border
                            rounded-lg shadow shadow-amber-400/60
                            '>
            <p className='text-xl py-4 font-semibold text-white text-center'>
              Uno A la vez
            </p>
          </div>
        </div>
      </div>
      <div className='h-[300px] flex items-center justify-center px-10'>
        <p className='whitespace-pre-wrap text-center'>
          Implica no hacer las habilidades “qué” a la vez. Tomáte tu tiempo para hacer cada una.
        </p>
      </div>
    </div>
  )
}

export default UnoVez