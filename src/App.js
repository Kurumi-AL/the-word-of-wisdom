import { Route, Navigate, Routes, useNavigate } from "react-router-dom";
import Introduction from "./components/introduction";
import History from "./components/history";
import Home from "./components/home";
import Header from "./elements/header";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/history" element={<History />} />
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <main>
              <h3>Error: 404</h3>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
