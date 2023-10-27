import Stop from '../../assets/stop.png'
import Check from '../../assets/check.png'
import Dedo from '../../assets/dedo.png'
import NoJuzgar from './NoJuzgar'
import Efectivo from './Efectivo'
import UnoVez from './UnoVez'

interface Props {
    stepComo: number
    setStepComo: (stepComo: number)=>void
}

const MindMenuComo = ({setStepComo, stepComo}:Props) => {
    
    const changeStep = (idx: number) => {
        setStepComo(idx);
    };
    return (
        <>

            {stepComo === 0 && (
                <div>
                    <div className='w-4/5 mx-auto'>
                        <p className='
                            text-center text-2xl
                            text-purple-500 mb-14 mt-10'>
                            Habilidades "Cómo"
                        </p>

                        <div className='flex items-center 
                            bg-amber-400 mx-auto relative border
                            rounded-lg shadow shadow-amber-400/60
                            mb-16'>
                            <span className='text-2xl py-4 px-2 font-mono'>
                                1. No Juzgar
                            </span>
                            <button onClick={() => changeStep(1)}
                                className='w-13 h-13 p-4 absolute -right-4 rounded-full
                                 inline-flex border border-amber-400 bg-white'>
                                <img src={Stop} alt="" />
                            </button>
                        </div>
                        <div className='flex items-center 
                            bg-cyan-400 mx-auto relative border
                            rounded-lg shadow shadow-cyan-400/60
                            mb-16'>
                            <span className='text-2xl py-4 px-2 font-mono'>
                                2. Uno a la vez
                            </span>
                            <button onClick={() => changeStep(2)}
                                className='w-13 h-13 p-4 absolute -right-4 rounded-full
                                 inline-flex border border-cyan-400 bg-white'>
                                <img src={Dedo} alt="" />
                            </button>
                        </div>
                        <div className='flex items-center 
                            bg-red-400 mx-auto relative border
                            rounded-lg shadow shadow-red-400/60
                            mb-16'>
                            <span className='text-2xl py-4 px-2 font-mono'>
                                3. Ser efectivo
                            </span>
                            <button onClick={() => changeStep(3)}
                                className='w-13 h-13 p-4 absolute -right-4 rounded-full
                                 inline-flex border border-red-400 bg-white'>
                                <img src={Check} alt="" />
                            </button>
                        </div>

                    </div>
                </div>
            )}
            {stepComo === 1 && (
                <NoJuzgar onChangeStep={changeStep} />
            )}
            {stepComo === 2 && (
                <UnoVez onChangeStep={changeStep} />
            )}
            {stepComo === 3 && (
                <Efectivo onChangeStep={changeStep} />
            )}
        </>
    )
}

export default MindMenuComo