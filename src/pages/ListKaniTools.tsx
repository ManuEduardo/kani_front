import React from 'react'
import gabaImg from '../assets/gaba.png'
import diaryIcon from '../assets/diary_icon.png'

const ListKaniTools = () => {
  return (
    <div className=' p-8'>
        <div className=' flex justify-between'>
            <h2 className=' mt-auto mb-4'>¡Hola {"User"}!</h2>
            <img src={gabaImg} alt="gaba" className=' w-16'/>
        </div>
        <p>Hoy es un buen dia para trabajar juntos</p>
        <div className=' bg-purple-200 px-1 py-2 rounded-lg my-4'>
            <p className=' text-sm text-center'>Herramientas: ¿En qué te puedo ayudar?</p>
        </div>
        <div>
            <div className=' bg-cyan-400 flex flex-col w-36'>
                <img src={diaryIcon} alt="icono diario" className=' w-16'/>
                <p>escribe en tu diario</p>
                <p>¿Quisieras preguntarme algo?</p>
            </div>
        </div>
    </div>
  )
}

export default ListKaniTools