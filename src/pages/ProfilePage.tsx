import React from "react";
import gabaImg from "../assets/gaba.png";
import hobbiesIcon from "../assets/hobbies_icon.png";

const ProfilePage = () => {
  return (
    <div>
      <div className="relative bg-purple-500 h-60">
        <div className=" p-8">
          <h2 className=" mt-auto mb-4 text-xl font-semibold">PERFIL</h2>
          <h2 className=" mt-auto mb-4 font-semibold">¡Hola {"User"}!</h2>

          <p className=" text-slate-50">
            Aquí puedes agregar más datos sobre ti, nos encantaría conocerte
          </p>
        </div>
        <div className="absolute top-44 w-full">
          <div className="rounded-full bg-slate-50 w-36 h-36 flex mx-auto shadow-xl">
            <img
              src={gabaImg}
              alt="gaba"
              className="block w-20 mx-auto my-auto"
            />
          </div>
          <h2 className=" relative bottom-4 py-2 px-8 mx-auto text-slate-50 bg-amber-400 w-max font-bold text-lg shadow-2xl rounded-xl">
            {"Lucia"}
          </h2>
        </div>
      </div>
      <div className=" mt-36 flex flex-wrap justify-around bg-slate-300 p-4 mx-6 rounded-lg shadow-2xl">
        <div className=" w-32 h-32 hover:scale-105 transition-transform">
          <div
            className=" bg-cyan-400 m-1 p-1 rounded-xl shadow-md"
            data-aos="fade-right"
          >
            <h3 className=" text-sm text-center font-mono">Dias juntos</h3>
            <p className=" text-8xl font-bold text-slate-50 text-center">{2}</p>
          </div>
        </div>
        <div className=" w-32 h-32 hover:scale-105 transition-transform">
          <div
            className=" bg-amber-300 px-2 py-4 rounded-lg shadow-2xl "
            data-aos="fade-left"
          >
            <h3 className=" text-center text-sm my-2">Colorea tu Gaba</h3>
            <div className=" flex justify-around">
              <div className=" h-10 w-10 rounded-full bg-green-500"></div>
              <div className=" h-10 w-10 rounded-full bg-red-500"></div>
              <div className=" h-10 w-10 rounded-full bg-blue-500"></div>
            </div>
          </div>
        </div>

        <div className=" w-32 h-32 hover:scale-105 transition-transform">
          <div data-aos="fade-up-right" className=" bg-fuchsia-400 mx-1 my-8 p-1 rounded-lg shadow-2xl">
            <h3 className=" text-center text-slate-50">Frase del Dia</h3>
            <p className=" text-center text-sm">Solo haz click</p>
          </div>
        </div>
        <div className=" w-32 h-32 hover:scale-105 transition-transform">
          <div data-aos="fade-up-left" className=" flex flex-col bg-emerald-400 p-2 rounded-lg">
            <h3 className=" text-center text-lg">Metas & Hobbies</h3>
            <img src={hobbiesIcon}  alt="icono hobbies" className="block mx-auto w-12"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
