import { useEffect, useState } from 'react'
import ThinkImg from '../../assets/describi.png'
import Meditar4 from '../../assets/salud_mental4.png'
import Meditar5 from '../../assets/salud_mental5.png'
import Meditar6 from '../../assets/salud_mental6.png'
import Sonar from '../../assets/sonar.png'
import WatchSand from '../../assets/watch_sand.png'
import Loader from '../Loaders/Loader'
interface Props {
  localStep: number,
  changeLocalStep: () => void,
  onChangeStep: (step: number) => void;
}
const Describir = ({ localStep, changeLocalStep, onChangeStep }: Props) => {
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
        <img src={ThinkImg} alt="" className='w-10' />
        <p className='font-mono text-xl font-medium'>Describir</p>
      </div>
      {localStep === 0 && (
        <div className='mt-20 relative' onClick={() => changeLocalStep()}>
          <div className='text-center mb-6 text-cyan-600 font-bold'>
            <p className='whitespace-pre-wrap'>
              En tu vida diaria, describir te ayuda a darle un nombre a lo que te sucede
            </p>
          </div>
          <img src={Meditar4} alt="" className='mx-auto top-0' />
        </div>
      )}
      {localStep === 1 && (
        <div className='mt-20 relative' onClick={() => changeLocalStep()}>
          <div className='text-center mb-6 text-cyan-600 font-bold'>
            <p className='whitespace-pre-wrap'>
              Le colocamos una etiqueta a lo que observamos, le ponemos una palabra a la experiencia.
            </p>
          </div>
          <img src={Meditar4} alt="" className='mx-auto top-0' />
        </div>
      )}
      {localStep === 2 && (
        <div className='bg-cyan-200 rounded-lg text-center px-4 pt-4 pb-1'>
          <div className='grid py-6 gap-1 font-mono px-4'>
            <p className='whitespace-pre-wrap'>
              Cuando te des cuenta de que sentiste algo, di una palabra que describa ese sonido.
            </p>
          </div>
          <div className='my-10 relative flex flex-col justify-center' onClick={() => changeLocalStep()}>
            <div className='
                      rounded-full white w-52 h-52 mx-auto
                      bg-white flex justify-end items-center'>
              <img src={Sonar} alt="" className='w-4/5 mx-auto' />
            </div>
            <div className='bg-white px-4 py-2 w-4/5 mx-auto rounded-sm mt-5'>
              Concéntrate en ellas
            </div>
          </div>
        </div>
      )}
      {localStep === 3 && (
        <div className='bg-cyan-200 rounded-lg text-center px-4 pt-4 pb-1'>
          <div className='grid py-6 gap-1 font-mono px-4'>
            <p className='whitespace-pre-wrap'>
              Cuando te des cuenta de que sentiste algo, di una palabra que describa ese sonido.
            </p>
          </div>
          <div className='my-10 relative flex flex-col justify-center' onClick={() => show()}>
            <div className='
                        rounded-full white w-52 h-52 mx-auto
                        bg-white flex justify-end items-center'>
              <img src={Meditar5} alt="" className='w-4/5 mx-auto' />
            </div>
            <div className='bg-white px-4 py-2 w-4/5 mx-auto rounded-sm mt-5'>
              ¡Sigamos juntos!
            </div>
          </div>
        </div>
      )}
      {localStep === 4 && (
        <>
          {showLoader ? (
            <Loader idx={2} />
          ) : (
            <div className='mt-20 relative' onClick={() => changeLocalStep()}>
              <div className='text-center mb-6 text-2xl px-4'>
                <p className='whitespace-pre-wrap'>
                  Practiquemos 30 segundos
                </p>
              </div>
              <img src={WatchSand} alt="" className='mx-auto top-0' />
            </div>
          )}
        </>

      )}
      {localStep === 5 && (
        <div className='mt-20 relative' onClick={() => onChangeStep(0)}>
          <div className='text-center mb-6 text-purple-600 text-2xl font-bold'>
            <p className='whitespace-pre-wrap'>
              ¡Muy bien!
            </p>
          </div>
          <img src={Meditar6} alt="" className='mx-auto top-0' />
        </div>
      )}
    </div>
  )
}

export default Describir