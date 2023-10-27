import { Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ProtectedRoute from "./components/ProtectedRouter";
import { ROUTES } from "./constans";
import ListKaniTools from "./pages/ListKaniTools";
import DiaryPage from "./pages/DiaryPage";
import NavWrapper from "./components/NavWrapper";
import BreathingPage from "./pages/BreathingPage";
import MindFulnessPage from "./pages/MindFulnessPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <Routes>
      <Route path={ROUTES.defaul} element={<WelcomePage />} />
      <Route element={<NavWrapper />}>
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.profile} element={<ProfilePage/>} />
        </Route>
        <Route path={ROUTES.tools} element={<ListKaniTools />} />
      </Route>
      <Route path={ROUTES.home} element={<HomePage/>} />
      <Route path={ROUTES.diary} element={<DiaryPage />} />
      <Route path={ROUTES.breathing} element={<BreathingPage />} />
      <Route path={ROUTES.mindfulness} element={<MindFulnessPage />} />
      <Route path="*" element={<div>error</div>} />
    </Routes>
  );
}

export default App;
