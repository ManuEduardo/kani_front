import KaniText from "../assets/text_kani_white.png";
import DiaryImage from "../assets/diary_logo.png";
import ArrowLeft from "../assets/arrow-left.png";
import DiaryComponent from "../components/DiaryComponent";
import CirclePlus from "../assets/circle_plus_y.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constans";
import { useState } from "react";
function DiaryPage() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([])
  return (
    <div className="h-screen">
      <div className="h-[7%] bg-purple-500 shadow-2xl">
        <img src={KaniText} alt="KANI" className=" h-full mx-auto pt-4 pb-2" />
      </div>

      <div className="h-[93%]">
        <div className="px-2 pl-6 py-1 flex justify-center h-1/5">
          <div className="absolute left-10">
            <button>
              <img src={ArrowLeft} onClick={() => navigate(-1)} />
            </button>
          </div>
          <div className="">
            <p className="text-xl mb-1">Escribe tu diario</p>
            <img src={DiaryImage} alt="" className="mx-auto" />
          </div>
        </div>
        <div className="py-1 px-3 bg-purple-300 ">
          <DiaryComponent fecha="20 nov" content="Wenas" />
          <DiaryComponent fecha="20 nov" content="Wenas" />
          <DiaryComponent fecha="20 nov" content="Wenas" />
          <DiaryComponent fecha="20 nov" content="Wenas" />
          <DiaryComponent fecha="20 nov" content="Wenas" />
          <DiaryComponent fecha="20 nov" content="Wenas" />
          <DiaryComponent fecha="20 nov" content="Wenas" />
          <DiaryComponent fecha="20 nov" content="Wenas" />
          <DiaryComponent fecha="20 nov" content="Wenas" />
          <button className="block mx-auto py-4" onClick={()=>navigate(`${ROUTES.diary}/${notes.length + 1}`)}>
            <img src={CirclePlus} alt="" className="w-16" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiaryPage;
