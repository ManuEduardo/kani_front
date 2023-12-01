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
    <div className='absolute min-h-[800px] h-full w-screen top-0 left-0 z-20 bg-white'>
      <div className='h-full md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto'>
        <img src={loaders[idx]} alt="" className='w-full h-full' />
      </div>
    </div>
  )
}

export default Loader