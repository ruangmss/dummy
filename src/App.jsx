import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Categories from './pages/Categories/Categories';
import Search from './pages/Search/Search';
import NotFound from './pages/NotFound/NotFound';
import User from './pages/User/User';
import Bag from './pages/Bag/Bag';
import Category from './pages/Category/Category';
import Login from './pages/Login/Login';
import { ToastProvider } from './contexts/ToastContext';

const App = () => {
  return (
    <BrowserRouter>
      <ToastProvider>
        <div className="app">
          <Header />

          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/produto/:id" element={<Product />} />
              <Route path="/categorias/" element={<Categories />} />
              <Route path="/categoria/:category" element={<Category />} />
              <Route path="/pesquisa" element={<Search />} />
              <Route path="/usuario" element={<User />} />
              <Route path="/sacola" element={<Bag />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </ToastProvider>
    </BrowserRouter>
  );
};

export default App;
