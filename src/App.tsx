import { Routes, Route, HashRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ProtectedRoute from "./components/ProtectedRouter";
import { ROUTES } from "./constans";

function App() {
  return (
    <Routes>
      <Route path={ROUTES.defaul} element={<WelcomePage/>} />
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.profile} element={<div>perfil</div>} />
      </Route>
      <Route path="*" element={<div>error</div>} />
    </Routes>
  );
}

export default App;
