import React, { MouseEventHandler } from "react";

interface FrameToolProps {
  iconSrc: string; // Cambia "any" al tipo correcto según el tipo de iconos que estés utilizando
  tailColor: string;
  titleTool: string;
  subTitleTool: string;
  onClick: MouseEventHandler;
}

const FrameTool: React.FC<FrameToolProps> = ({
  iconSrc,
  tailColor,
  titleTool,
  subTitleTool,
  onClick
}) => {
  return (
    <div
      className={`${tailColor} px-2 py-2 my-2 flex flex-col w-32 hover:scale-105 transition-transform rounded-xl shadow-xl`}
      onClick={onClick}
    >
      <div className=" rounded-full bg-slate-50 w-24 h-24 flex mx-auto">
        <img
          src={iconSrc}
          alt="icono "
          className="block w-16 mx-auto my-auto"
        />
      </div>
      <p className=" text-xs mx-auto w-fit text-slate-50 text-center">
        {titleTool}
      </p>
      <p className=" text-xs mx-auto w-fit text-slate-900 text-center">
        {subTitleTool}
      </p>
    </div>
  );
};

export default FrameTool;
