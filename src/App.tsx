import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import ArchiveHeader from "./components/ArchiveHeader/ArchiveHeader";
import Footer from "./components/Footer/Footer";

function App() {
   return (
      <div>
         <Nav />
         <ArchiveHeader />
         <Footer />
      </div>
   );
}

export default App;
