// libs
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// shared libs
import { Footer } from '@thanhminh-org/shared/feature/footer';
// self feature libraries
import { Header } from '@thanhminh-org/admin/feature/header';
import { routes } from '../config/routes';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Header />
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Footer />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
