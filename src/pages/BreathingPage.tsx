import KaniText from "../assets/text_kani_white.png";
import Watch from '../assets/watch.gif'
import ArrowLeft from '../assets/arrow-left.png'
import FooterGaba from "../components/FooterGaba";
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
      <FooterGaba content="contémos juntos" />

    </div>
  );
};

export default BreathingPage;
