import React, { useEffect, useState } from "react";
import api from "./services/api";
import ProgressBar from "./componentes/ProgressBar/ProgressBar";
import MissingValue from "./componentes/MissingValue/MissingValue";
import "./styles/global.css";

function App() {
  const [rates, setRates] = useState([]);
  const goalValue = 150;

  async function fetchData() {
    let response = await api.get();
    let user = await response.data.rates.AFN;
    setRates(user);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1 className="valueTitle">R$ {rates}</h1>
      <ProgressBar count={rates} goal={goalValue} />
      <MissingValue count={rates} goal={goalValue} />
    </div>
  );
}

export default App;
