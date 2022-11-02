import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { NotFoundPage, DashboardPage, AboutPage, SettingsPage, ServersPage, ServerDetailsPage } from "./pages";

import { PATH } from "./consts";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
        <Route path={PATH.SERVERS} element={<ServersPage />} />
        <Route path={PATH.SERVERS+'/:id/*'} element={<ServerDetailsPage />} />
        <Route path={PATH.SETTINGS} element={<SettingsPage />} />
        <Route path={PATH.ABOUT} element={<AboutPage />} />
        <Route path={PATH.NOTFOUND} element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
