import { BrowserRouter, Route, Routes } from "react-router-dom";
import ModelViewer from "./components/ModelViewer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ModelViewer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
