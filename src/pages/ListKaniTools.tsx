import React from "react";
import FrameTool from "../components/FrameTool";
import gabaImg from "../assets/gaba.png";
import diaryIcon from "../assets/diary_icon.png";
import chatIcon from "../assets/chatbot_icon.png";
import breathIcon from "../assets/breath_icon.png";
import minfulnessIcon from "../assets/mindfulness_icon.png"
import emotionsIcon from "../assets/emotions_icon.png"
import emergencyIcon from "../assets/emergency_icon.png"

const ListKaniTools = () => {
  return (
    <div className=" p-8">
      <div className=" flex justify-between">
        <h2 className=" mt-auto mb-4">¡Hola {"User"}!</h2>
        <img src={gabaImg} alt="gaba" className=" w-16" />
      </div>
      <p>Hoy es un buen dia para trabajar juntos</p>
      <div className=" bg-purple-200 px-1 py-2 rounded-lg my-4">
        <p className=" text-sm text-center">
          Herramientas: ¿En qué te puedo ayudar?
        </p>
      </div>
      <div className=" flex flex-wrap justify-around">
        <FrameTool
          iconSrc={diaryIcon}
          tailColor="bg-cyan-400"
          titleTool="escribe en tu diario"
          subTitleTool="¿Quisieras preguntarme algo?"
        />
        <FrameTool
          iconSrc={chatIcon}
          tailColor="bg-cyan-400"
          titleTool="platica con gaba"
          subTitleTool="¡Gaba es una IA en la que puedes confiar!"
        />
        <FrameTool
          iconSrc={breathIcon}
          tailColor="bg-amber-400"
          titleTool="respiración"
          subTitleTool="Toma un descanso y solo respira"
        />
        <FrameTool
          iconSrc={minfulnessIcon}
          tailColor="bg-amber-400"
          titleTool="mindfulness"
          subTitleTool="Vive en el presente"
        />
        <FrameTool
          iconSrc={emotionsIcon}
          tailColor="bg-fuchsia-400"
          titleTool="platica con gaba"
          subTitleTool="¿Como te va?"
        />
        <FrameTool
        iconSrc={emergencyIcon}
        tailColor="bg-slate-50"
        titleTool="Emergencia"
        subTitleTool="¿Necesitas ayuda?"
      />
      </div>
    </div>
  );
};

export default ListKaniTools;
