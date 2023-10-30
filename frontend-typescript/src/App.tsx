import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./componance/Main";
import SearchMonter from "./componance/SearchMonter";
import Layout from "./layout/Layout";
import './assets/tailwind.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="Main" element={<Main />} />
          <Route path="SearchMonter" element={<SearchMonter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
