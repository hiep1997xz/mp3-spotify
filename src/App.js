import React from "react";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
        <DetailSong />
        <ListSong />
      </div>
    </div>
  );
}

export default App;
