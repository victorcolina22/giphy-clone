import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../pages/Home/components/Navbar/Navbar";
import Home from "../pages/Home";

export function AppRouter() {
  return (
    <div className="bg-primary h-screen">
      <div className="w-2/3 my-0 mx-auto pt-4">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default AppRouter;
