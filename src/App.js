import { Route, Routes, BrowserRouter } from "react-router-dom";
import LayoutPage from "./components/layout/Layout";
import "./style/Global.css";
import routes from "./Routes/routes";
import LoginPage from "./pages/auth/login/LoginPage";
import SignUp from "./pages/auth/signup/SignUp";

function App() {
  return (
    <BrowserRouter>
      {/* <LayoutPage /> */}
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<LayoutPage />}>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
