import React from 'react'
import Gaba from '../assets/gaba.png'

interface Props{
    content: String
}

const FooterGaba: React.FC<Props> = ({content}:Props) => {
    return (
        <div className="absolute bottom-10 w-full">
            <div className="text-center text-sm relative">
                <p className='mb-2'>{content}</p>
                <img src={Gaba} alt="" className="mx-auto h-[50px]" />
            </div>
        </div>
    )
}

export default FooterGaba