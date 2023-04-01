import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import SearchPage from "./components/SearchPage";
import SidebarMini from "./components/SidebarMini";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app__page">
              <Sidebar />
              <SidebarMini />
              <RecommendedVideos />
            </div>
          }
        />
        <Route
          path="/search/:searchTerm"
          element={
            <div className="app__page">
              <Sidebar />
              <SidebarMini />
              <SearchPage />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
