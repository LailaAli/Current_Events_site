import React from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import ArchiveHeader from "./components/ArchiveHeader/ArchiveHeader";
import Footer from "./components/Footer/Footer";
import MobileNav from "components/MobileNav/MobileNav";
import BlockOne from "components/BlockOne/BlockOne";

function App() {
   return (
      <div>
         <MobileNav />
         <Nav />
         <ArchiveHeader />
         <BlockOne />
         <Footer />
      </div>
   );
}

export default App;
