import React, { lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const Main = lazy(() => import("./components/Pages/Main"));
const Rules = lazy(() => import("./components/Pages/Rules"));
const Navbar = lazy(() => import("./components/Pages/Navbar"));
const Application = lazy(() => import("./components/Pages/Application"));
const Retail = lazy(() => import("./components/Pages/Retail"));
const Assortment = lazy(() => import("./components/Pages/Assortment"));
const Support = lazy(() => import("./components/Pages/Support"));
const Auth = lazy(() => import("./components/Pages/Auth"));

const queryClient = new QueryClient();

function App() {
  const size = window.screen.width;
  return (
    <div className='App w-screen'>
      {/* <Header /> */}
      {size > 1218 && <Navbar />}

      <Routes>
        <Route
          path='/'
          element={
            <Suspense
              fallback={
                <div className='main bg-black flex justify-center items-center'>
                  <CircularProgress color='success' />;
                </div>
              }
            >
              <Main />
            </Suspense>
          }
        />
        <Route
          path='/rules'
          element={
            <Suspense
              fallback={
                <div className='main bg-black flex justify-center items-center'>
                  <CircularProgress color='success' />;
                </div>
              }
            >
              <Rules />
            </Suspense>
          }
        />
        <Route
          path='/app'
          element={
            <Suspense
              fallback={
                <div className='main bg-black flex justify-center items-center'>
                  <CircularProgress color='success' />;
                </div>
              }
            >
              <Application />
            </Suspense>
          }
        />
        <Route
          path='/retail'
          element={
            <Suspense
              fallback={
                <div className='main bg-black flex justify-center items-center'>
                  <CircularProgress color='success' />;
                </div>
              }
            >
              <Retail />
            </Suspense>
          }
        />
        <Route
          path='/manager'
          element={
            <Suspense
              fallback={
                <div className='main bg-black flex justify-center items-center'>
                  <CircularProgress color='success' />;
                </div>
              }
            >
              <Auth />
            </Suspense>
          }
        />
        <Route
          path='/support'
          element={
            <Suspense
              fallback={
                <div className='main bg-black flex justify-center items-center'>
                  <CircularProgress color='success' />;
                </div>
              }
            >
              <Support />
            </Suspense>
          }
        />
        <Route
          path='/assortment'
          element={
            <QueryClientProvider client={queryClient}>
              <Suspense
                fallback={
                  <div className='main bg-black flex justify-center items-center'>
                    <CircularProgress color='success' />;
                  </div>
                }
              >
                <Assortment />
              </Suspense>
            </QueryClientProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
