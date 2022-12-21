import React, { Suspense, lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Loading } from "../../presentation/components/loading/loading";
import { About } from "../../presentation/containers/about/about";

import { Landing } from "../../presentation/containers/landing/landing";

const Router: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <HashRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </Suspense>
  );
};

export default Router;
