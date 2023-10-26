import React from 'react'
import CirclePlus from '../assets/circle_plus_y.png'
interface Props {
    fecha: String,
    content: String
}

const DiaryComponent: React.FC<Props> = (
    {
        fecha,
        content,
    }: Props) => {
    return (
        <div className='mt-5 bg-white border 
        rounded-md py-5 px-4 w-5/6 mx-auto
        shadow-lg shadow-gray-500/80
        flex justify-between'>
            <div className='flex gap-4'>
                <p className='font-bold'>- {fecha}: </p>
                <p>{content}</p>
            </div>
            <button>
                <img src={CirclePlus} alt="" />
            </button>
        </div>
    )
}

export default DiaryComponent