import KaniText from "../assets/text_kani_white.png";
import DiaryImage from "../assets/diary_logo.png";
import ArrowLeft from "../assets/arrow-left.png";
import DiaryComponent from "../components/DiaryComponent";
import CirclePlus from "../assets/circle_plus_y.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constans";
import { useEffect, useState } from "react";
// import axios from "axios";
// import { api_url_base } from "../constans";
import { Note } from "../models";
function DiaryPage() {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    } else {
      setNotes([]);
    }
  }, []);

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
          <div className="flex flex-col items-center">
            <p className="text-xl mb-1">Escribe tu diario</p>
            <img src={DiaryImage} alt="" className="mx-auto h-28ñ" />
          </div>
        </div>
        <div className="py-1 px-3 bg-purple-300 ">
          {notes.length > 0 ? (
            notes.map((not: Note) => (
              <DiaryComponent
                key={not.id}
                fecha={not.date}
                content={not.title}
                noteId={not.id} // Pasar el ID de la nota a DiaryComponent
              />
            ))
          ) : (
            <div className=" bg-purple-200 px-1 py-2 rounded-lg my-4">
              <p className=" text-sm text-center">
                Herramientas: ¿En qué te puedo ayudar?
              </p>
            </div>
          )}
          <button
            className="block mx-auto py-4"
            onClick={() => navigate(`${ROUTES.diary}/${notes.length + 1}`)}
          >
            <img src={CirclePlus} alt="" className="w-16" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiaryPage;
