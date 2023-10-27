import React from 'react'
import loader1 from '../../assets/loader/Loader1.png'
import loader2 from '../../assets/loader/Loader2.png'
import loader3 from '../../assets/loader/Loader3.png'
import loader4 from '../../assets/loader/Loader4.png'
import loader5 from '../../assets/loader/Loader5.png'
import loader6 from '../../assets/loader/Loader6.png'
import loader7 from '../../assets/loader/Loader7.png'
import loader8 from '../../assets/loader/Loader8.png'
import loader9 from '../../assets/loader/Loader9.png'
interface Props {
  idx: number
}
const Loader = ({ idx }: Props) => {

  const loaders = [loader1, loader2, loader3, loader4, loader5, loader6, loader7, loader8, loader9]

  return (
    <div className='absolute h-screen w-screen top-1 left-0 z-20'>
        <img src={loaders[idx]} alt="" className='w-full h-full' />
    </div>
  )
}

export default Loader