import React from 'react';
import CirclePlus from '../assets/circle_plus_y.png';
import { useNavigate } from 'react-router-dom';

interface Props {
    fecha: String;
    content: String;
    noteId: number;
}

const DiaryComponent: React.FC<Props> = ({ fecha, content, noteId }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/diario/${noteId}`);
    };

    return (
        <div className='mt-5 bg-white border rounded-md py-5 px-4 w-5/6 mx-auto shadow-lg shadow-gray-500/80 flex justify-between'>
            <div className='flex gap-4 truncate px-1'>
                <p className='font-bold'>- {fecha}: </p>
                <p className='truncate'>{content}</p>
            </div>
            <button onClick={handleClick}>
                <img src={CirclePlus} alt="" />
            </button>
        </div>
    );
};

export default DiaryComponent;
