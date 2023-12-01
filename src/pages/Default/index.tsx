import { useNavigate } from "react-router-dom";
import { PageProvider } from "../../context/PageProvider"
import { useStore } from "../../context/PageProvider"
import RegisterPage from "./RegisterPage";
import WelcomePage from "./WelcomePage"
import { ROUTES } from "../../constans";
import Loader from "../Loaders/Loader";

const DefaultPath = () => {
  return (
    <PageProvider>
      <RenderComponent />
    </PageProvider>
  );
};

const RenderComponent = () => {
  const { state, dispatch } = useStore();
  const navigate = useNavigate();
  const renderComponent = () => {
    if (state.page === 0) {
      return <WelcomePage />
    } else if (state.page === 1) {
      return <RegisterPage />
    } else {
      setTimeout(() => {
        dispatch({type: 'RESET'})
        navigate(ROUTES.home);
      }, 3000)
      return <Loader idx={8} />
    }
  };

  return renderComponent();
};

export default DefaultPath