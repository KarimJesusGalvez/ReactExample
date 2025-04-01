import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./Errors/pageNotFound/PageNotFound";
import ErrorFallback from "./Errors/ReactError/ReactErrorPage";
import RenderError from "./Errors/ReactError/ErrorComponent";

export default function App() {


  return (
    <div id="Appcontainer">
      <Header />
      <ErrorFallback fallback={<RenderError></RenderError>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ErrorFallback>
    </div>
  );
}
