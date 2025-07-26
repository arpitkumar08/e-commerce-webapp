import React, { useState } from "react";
import Header from "../../Components/Header";
import ProdList from "./ProdList";
import AllProducts from "../../Components/BestSeller"; // This is your AllProducts component

function Home() {
  

  return (
    <div>
      <Header  />
      <ProdList />
    </div>
  );
}

export default Home;
