import React from "react";
import KaniText from "../assets/text_kani_white.png";
import CoindMenu from "../assets/coins_menu.png";
import ToolsMenu from "../assets/tools_menu.png";
import HomeMenu from "../assets/home_menu.png";
import ProfileMenu from "../assets/profile_menu.png";
import planetsImg from "../assets/planets.png";
import starShipImg from "../assets/starship.png";
import { ROUTES } from "../constans";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col justify-between min-h-screen bg-purple-500">
      <div className="h-16 bg-purple-500">
        <img src={KaniText} alt="KANI" className=" h-full mx-auto pt-4 pb-2" />
      </div>
      <div className=" z-10">
        <img src={planetsImg} alt="planetas" className=" mx-auto w-72" />
        <h2 className=" text-center text-2xl text-slate-50 font-mono font-light my-4">
          Bienvenido
        </h2>
        <div className=" bg-slate-50 mx-8 rounded-md px-4 pb-4">
          <h2 className=" relative bottom-3 py-2 px-8 mx-auto text-slate-50 bg-amber-400 w-max font-bold text-lg shadow-2xl rounded-xl">
            {"Lucia"}
          </h2>
          <h2 className=" text-lg font-thin">¿Quiénes somos?</h2>
          <p className=" text-sm font-thin mb-2">
            Somos KANI una herramienta auxiliar para ayudar a mejorar hábitos,
            sentirte seguro y aprender a calmarnos.
          </p>
          <h2 className=" text-lg font-thin">¿Qué quieres hacer hoy?</h2>
          <p className=" text-sm font-thin mb-2">
            Aventúrate con nosotros y sientete seguro.
          </p>
          <div className=" flex justify-between ">
            <div>
              <h3 className=" text-lg text-amber-400">Pongámonos en marcha!</h3>
              <button
                className="block mt-2 mr-2 ml-auto bg-rose-400 py-1 px-4 rounded-lg shadow-lg text-slate-50"
                onClick={() => navigate(ROUTES.profile)}
              >
                Click aquí
              </button>
            </div>
            <img src={starShipImg} alt="nave espacial" />
          </div>
        </div>
      </div>
      <div className=" h-14 z-20 bg-purple-500 mx-6 my-2 rounded-lg shadow-2xl border border-solid border-purple-600 flex justify-around">
        <img
          src={CoindMenu}
          alt="monedas menu"
          className=" w-10 h-10 my-auto hover:scale-110 transition-transform"
        />
        <img
          src={ToolsMenu}
          alt="herramientas menu"
          className=" w-10 h-10 my-auto hover:scale-110 transition-transform"
          onClick={() => navigate(ROUTES.tools)}
        />
        <img
          src={HomeMenu}
          alt="home menu"
          className=" w-10 h-10 my-auto hover:scale-110 transition-transform"
          onClick={() => navigate(ROUTES.home)}

        />
        <img
          src={ProfileMenu}
          alt="perfil menu"
          className=" w-10 h-10 my-auto hover:scale-110 transition-transform"
          onClick={() => navigate(ROUTES.profile)}
        />
      </div>
    </div>
  );
};

export default HomePage;
