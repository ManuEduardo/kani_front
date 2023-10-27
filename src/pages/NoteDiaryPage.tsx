import { useState } from "react";
import KaniText from "../assets/text_kani_white.png";
import happyImg from "../assets/happy.png";
import ArrowLeft from "../assets/arrow-left.png";
import keyboarImg from "../assets/keyboard.png";
import gabaLogo from "../assets/gaba.png";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";
import axios from "axios";
import { api_url_base } from "../constans";
import { NewNote } from "../models";

const NoteDiaryPage = () => {
  const navigate = useNavigate();
  const { idNote } = useParams();
  const user = useUserContext();
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");

  async function uploadNote() {
    try {
      if (title.trim() === "" || text.trim() === "") return;
      const newNote: NewNote = {
        id: Number(idNote),
        user_id: user.id,
        note_title: title,
        note_text: text,
      };
      const response = await axios.post(`${api_url_base}diario`, newNote);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen">
      <div className="h-16 bg-purple-500 shadow-xl z-10">
        <img src={KaniText} alt="KANI" className=" h-full mx-auto pt-4 pb-2" />
      </div>
      <div className=" bg-purple-500 p-2">
        <img src={happyImg} alt="" className=" block mx-auto" />
        <h2 className=" font-mono font-extralight text-lg text-slate-50 text-center mt-6 mb-4">
          Escribe e tu diario
        </h2>
      </div>
      <div className=" flex justify-between">
        <button>
          <img
            src={ArrowLeft}
            onClick={() => {
              navigate(-1);
              uploadNote();
            }}
            className=" w-12"
          />
        </button>
        <input
          type="text"
          name=""
          placeholder="Ingresa un título"
          className=" text-center text-xl font-mono w-60"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <img src={keyboarImg} alt="teclado" className="" />
      </div>
      <div>
        <textarea
          name=""
          cols={40}
          rows={15}
          placeholder="Aquí pueden ir tus ideas, notas y pensamientos. ¡No te limites!"
          className="block mx-auto p-2 text-sm font-mono border-b-2 border-cyan-400 resize-y"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        <img src={gabaLogo} alt="gabba" className=" w-12 block mx-auto pt-4" />
      </div>
    </div>
  );
};

export default NoteDiaryPage;
