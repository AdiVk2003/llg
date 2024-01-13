import React from "react";
import ReactDOM from "react-dom";
import Ap from "SignIU";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "contexts/authContext";
import LandingPagePage from "pages/Landing Page";
import Homep from "Homepage/home";
import PrivateRoute from "PrivateRoutes";
import MyReactComponent from "Chatbot";
import AgentListPage from "pages/AgentList";
import ContactPagePage from "pages/ContactPage";
export default function App1() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPagePage/>}/>
        <Route path="/getstarted" element={<Ap/>}/>
        <Route path="/home" element={
          <PrivateRoute>
          <Homep/>
          </PrivateRoute>}/>
          <Route path="/aianalyse" element={
          <PrivateRoute>
          <MyReactComponent/>
          </PrivateRoute>}/>
          <Route path="/lawfind" element={
          <PrivateRoute>
          <AgentListPage/>
          </PrivateRoute>}/>
          <Route path="/register" element={
          <PrivateRoute>
          <ContactPagePage/>
          </PrivateRoute>}/>

      </Routes>
      
      </AuthProvider>
    </BrowserRouter>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App1 />
  </React.StrictMode>,
  document.getElementById("root"),
);
