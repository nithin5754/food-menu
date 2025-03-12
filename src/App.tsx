import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Menu />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
