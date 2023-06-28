import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Pages/Header";
import Navbar from "./components/Pages/Navbar";
import Main from "./components/Pages/Main";
import Rules from "./components/Pages/Rules";
import { Routes, Route } from "react-router-dom";
import Application from "./components/Pages/Application";
import Retail from "./components/Pages/Retail";
import Assortment from "./components/Pages/Assortment";
import { QueryClient, QueryClientProvider } from "react-query";
import Auth from "./components/Pages/Auth";

const queryClient = new QueryClient();

function App() {
  const size = window.screen.width;
  return (
    <div className='App w-screen'>
      {/* <Header /> */}
      {size > 1218 && <Navbar />}

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/app' element={<Application />} />
        <Route path='/retail' element={<Retail />} />
        <Route path='/manager' element={<Auth />} />
        <Route
          path='/assortment'
          element={
            <QueryClientProvider client={queryClient}>
              <Assortment />
            </QueryClientProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
