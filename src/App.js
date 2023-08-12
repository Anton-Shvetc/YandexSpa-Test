import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./components/About/About";
import Login from "./components/Login/Login";
import useToken from "./components/useToken";

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
