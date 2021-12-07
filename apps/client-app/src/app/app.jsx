// libs
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// share libs
import { Footer } from '@thanhminh-org/shared/feature/footer';
// self libs
import { Header } from '@thanhminh-org/client/feature/header';
import { routes } from '../config/routes.jsx';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Routes>
        <Footer />
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Header />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
