import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ProtectedRoute from "./components/ProtectedRouter";
import { ROUTES } from "./constans";
import ListKaniTools from "./pages/ListKaniTools";
import DiaryPage from "./pages/DiaryPage";
import NavWrapper from "./components/NavWrapper";
import BreathingPage from "./pages/BreathingPage";
function App() {
  return (
    <Routes>
      <Route path={ROUTES.defaul} element={<WelcomePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path={ROUTES.profile} element={<div>perfil</div>} />
      </Route>
      <Route element={<NavWrapper />}>
        <Route path={ROUTES.tools} element={<ListKaniTools />} />
      </Route>
      <Route path={ROUTES.diary} element={<DiaryPage />} />
      <Route path={ROUTES.breathing} element={<BreathingPage />} />
      <Route path="*" element={<div>error</div>} />
    </Routes>
  );
}

export default App;
