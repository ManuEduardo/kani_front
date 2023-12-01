import { useEffect, useState } from "react";
import KaniText from "../assets/text_kani_white.png";
import happyImg from "../assets/happy.png";
import ArrowLeft from "../assets/arrow-left.png";
import keyboarImg from "../assets/keyboard.png";
import gabaLogo from "../assets/gaba.png";
import { useNavigate, useParams } from "react-router-dom";
import { useUserContext } from "../context/UserProvider";
import { NewNote } from "../models";

const NoteDiaryPage = () => {
  const navigate = useNavigate();
  const { idNote } = useParams();
  const user = useUserContext();
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [notes, setNotes] = useState<any[]>([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    const selectedNote = notes.find((note) => note.id === parseInt(idNote));
    if (selectedNote) {
      setTitle(selectedNote.title);
      setText(selectedNote.text);
    }
  }, [idNote, notes]);

  const saveNote = () => {
    if (title.trim() === "" || text.trim() === "") return;

    const noteId = parseInt(idNote);
    const existingNoteIndex = notes.findIndex((note) => note.id === noteId);

    if (existingNoteIndex !== -1) {
      const updatedNotes = [...notes];
      updatedNotes[existingNoteIndex] = {
        ...updatedNotes[existingNoteIndex],
        title: title,
        text: text,
      };
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    } else {
      const newNote = {
        id: notes.length + 1,
        title: title,
        text: text,
        date: formatDate(new Date()),
      };
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }
    navigate(-1);
  };

  const formatDate = (date) => {
    const options = { day: "numeric", month: "long" };
    return new Intl.DateTimeFormat("es-ES", options).format(date);
  };
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
            onClick={() => navigate(-1)}
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
        <div onClick={() => saveNote()}>
          <img src={gabaLogo} alt="gabba" className=" w-12 block mx-auto pt-4" />
          <p className="text-center">Guardar</p>
        </div>
      </div>
    </div>
  );
};

export default NoteDiaryPage;
