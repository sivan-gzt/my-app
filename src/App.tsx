import './output.css';
import React from 'react';

import Router from "./routes/Router";
import Layout from "./layout/Layout";

import { Toaster } from "./components/ui/Toaster";
import { UserProvider } from "./users/providers/UserProvider";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";

function App() {
  return (



    <div className="App">
      <BrowserRouter>
        <UserProvider value={{ user: null, setUser: () => { }, token: null, setToken: () => { } }}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Layout>
              <Router />
            </Layout>
          </ThemeProvider>
        </UserProvider>
      </BrowserRouter>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
