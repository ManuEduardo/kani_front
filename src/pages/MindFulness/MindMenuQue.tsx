import EyeImg from '../../assets/eye_purple.png'
import GroupImg from '../../assets/group_hands.png'
import MenuImg from '../../assets/menu.png'
import Observar from './Observar'
import Participar from './Participar'
import Describir from './Describir'

interface Props {
    localStep: number,
    changeLocalStep: () => void,
    stepQue: number,
    setStepQue: (stepQue: number) => void
}

const MindMenuQue = ({ setStepQue, stepQue, localStep, changeLocalStep }: Props) => {
    return (
        <>
            {stepQue === 0 && (
                <div>
                    <div className='w-4/5 mx-auto'>
                        <p className='
                            text-center text-2xl
                            text-purple-500 mb-14 mt-10'>
                            Habilidades "Qué"
                        </p>

                        <div className='flex items-center 
                            bg-amber-400 mx-auto relative border
                            rounded-lg shadow shadow-amber-400/60
                            mb-16'>
                            <span className='text-2xl py-4 px-2 font-mono'>
                                1. Observar
                            </span>
                            <button onClick={() => setStepQue(1)}
                                className='w-13 h-13 p-4 absolute -right-4 rounded-full
                                 inline-flex border border-amber-400 bg-white'>
                                <img src={EyeImg} alt="" />
                            </button>
                        </div>
                        <div className='flex items-center 
                            bg-cyan-400 mx-auto relative border
                            rounded-lg shadow shadow-cyan-400/60
                            mb-16'>
                            <span className='text-2xl py-4 px-2 font-mono'>
                                2. Describir
                            </span>
                            <button onClick={() => setStepQue(2)}
                                className='w-13 h-13 p-4 absolute -right-4 rounded-full
                                 inline-flex border border-cyan-400 bg-white'>
                                <img src={MenuImg} alt="" />
                            </button>
                        </div>
                        <div className='flex items-center 
                            bg-red-400 mx-auto relative border
                            rounded-lg shadow shadow-red-400/60
                            mb-16'>
                            <span className='text-2xl py-4 px-2 font-mono'>
                                3. Participar
                            </span>
                            <button onClick={() => setStepQue(3)}
                                className='w-13 h-13 p-4 absolute -right-4 rounded-full
                                 inline-flex border border-red-400 bg-white'>
                                <img src={GroupImg} alt="" />
                            </button>
                        </div>

                    </div>
                </div>
            )}
            {stepQue === 1 && (
                <Observar onChangeStep={setStepQue} localStep={localStep} changeLocalStep={changeLocalStep} />
            )}
            {stepQue === 2 && (
                <Describir onChangeStep={setStepQue} localStep={localStep} changeLocalStep={changeLocalStep} />
            )}
            {stepQue === 3 && (
                <Participar onChangeStep={setStepQue} localStep={localStep} changeLocalStep={changeLocalStep} />
            )}
        </>
    )
}

export default MindMenuQue