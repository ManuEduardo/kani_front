import KaniText from "../assets/text_kani_white.png";
import Watch from '../assets/watch.gif'
import ArrowLeft from '../assets/arrow-left.png'
import Gaba from '../assets/gaba.png'
const BreathingPage = () => {
  return (
    <div>
      <div className="h-[7%] bg-purple-500 shadow-2xl">
        <img src={KaniText} alt="KANI" className=" h-full mx-auto pt-4 pb-2" />
      </div>
      <div className="px-2 pl-6 mt-4 py-1 flex justify-center h-1/5">
        <div className="absolute left-10">
          <button><img src={ArrowLeft} alt="" /></button>
        </div>
        <p className="text-2xl my-2">Respiración</p>
      </div>
      <div className="w-3/5 mx-auto text-center text-2xl mt-6 font-light">
        <div className="py-2 bg-amber-200 mb-3">
          Inhala
        </div>
        <div className="py-2 bg-amber-200">
          Exhala
        </div>
      </div>
      <div className="mt-6">
        <img src={Watch} alt="" />
      </div>
      <div className="absolute bottom-1 w-full">
        <div className="text-center relative">
          <p>contémos juntos</p>
          <img src={Gaba} alt="" className="mx-auto h-[50px]" />
        </div>
      </div>

    </div>
  );
};

export default BreathingPage;
