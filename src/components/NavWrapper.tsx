import KaniText from "../assets/text_kani_white.png";
import CoindMenu from "../assets/coins_menu.png";
import ToolsMenu from "../assets/tools_menu.png";
import HomeMenu from "../assets/home_menu.png";
import ProfileMenu from "../assets/profile_menu.png";
import { Outlet, useNavigate } from "react-router-dom";
import { ROUTES } from "../constans";

const NavWrapper = () => {
  const navigate = useNavigate()
  return (
    <div className=" flex flex-col justify-between min-h-screen">
      <div className="h-16 bg-purple-500 shadow-xl z-10">
        <img src={KaniText} alt="KANI" className=" h-full mx-auto pt-4 pb-2" />
      </div>
      <Outlet />
      <div className=" h-14 z-20 bg-purple-500 mx-6 my-2 rounded-lg shadow-2xl flex justify-around">
        <img
          src={CoindMenu}
          alt="monedas menu"
          className=" w-10 h-10 my-auto hover:scale-110 transition-transform"
        />
        <img
          src={ToolsMenu}
          alt="herramientas menu"
          className=" w-10 h-10 my-auto hover:scale-110 transition-transform"
          onClick={()=> navigate(ROUTES.tools)}
        />
        <img
          src={HomeMenu}
          alt="home menu"
          className=" w-10 h-10 my-auto hover:scale-110 transition-transform"
          onClick={()=> navigate(ROUTES.home)}
        />
        <img
          src={ProfileMenu}
          alt="perfil menu"
          className=" w-10 h-10 my-auto hover:scale-110 transition-transform"
          onClick={()=> navigate(ROUTES.profile)}
        />
      </div>
    </div>
  );
};

export default NavWrapper;
