import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Div } from "../../components/div.style";

export default function Index() {
  const [age, setAge] = useState(0);
  const [restHR, setRestHR] = useState(0);
  const [maxHR, setMaxHR] = useState(0);
  const [restHR50, setRestHR50] = useState(0);
  const [restHR60, setRestHR60] = useState(0);
  const [restHR70, setRestHR70] = useState(0);
  const [waistSize, setWaistSize] = useState(0);
  const [hipSize, setHipSize] = useState(0);
  const [rcq, setRCQ] = useState(0);
  
  function calculateMaximumFC() {
    const fc = 208 - (0.7 * age);
    setMaxHR(parseInt(fc.toFixed(0)));
    calculateFCT();
  }
  
  function calculateFCT() {
    if (restHR === 0) {
      alert("Inserir a frequência de repouso para calcular as FC de Treinamento");
      return;
    }
    const fct50 = restHR + (0.5 * (maxHR - restHR));
    setRestHR50(parseInt(fct50.toFixed(0)));
    const fct60 = restHR + (0.6 * (maxHR - restHR));
    setRestHR60(parseInt(fct60.toFixed(0)));
    const fct70 = restHR + (0.7 * (maxHR - restHR));
    setRestHR70(parseInt(fct70.toFixed(0)));
  }
  
  function calculateRCQ() {
    const rcq = (waistSize / hipSize).toFixed(3);
    setRCQ(parseFloat(rcq));
  }
  
  return (
    <Div>
      <h1 className="title">Mari linda da minha vida ❣️</h1>
      
      <section className="section">
        <h2 className="subtitle">Frequências Cardíacas</h2>
        <div className="inputs">
          <div className="input">
            <label htmlFor="age" className="label">Idade</label>
            <input type="number"
                   placeholder={"Idade"}
                   className="input-field"
                   id="age"
                   onChange={({ target: { value } }) => {
                     if (!isNaN(parseInt(value))) {
                       setAge(parseInt(value));
                     }
                   }} />
          </div>
          <div className="input">
            <label htmlFor="restHeartRate" className="label">Frequência em Repouso</label>
            <input type="number"
                   placeholder={"Frequência de repouso"}
                   className="input-field"
                   id="restHeartRate"
                   onChange={({ target: { value } }) => {
                     if (!isNaN(parseInt(value))) {
                       setRestHR(parseInt(value));
                     }
                   }} />
          </div>
        </div>
        
        <button type="button"
                className="button"
                onClick={calculateMaximumFC}>Calcular
        </button>
        
        <div className="results">
          <h2 className="subtitle">Resultados</h2>
          <p className="text">Idade: <strong>{age}</strong></p>
          <p className="text">FC Máxima: <strong>{maxHR}</strong> bpm</p>
          <p className="text">FC em 50%: <strong>{restHR50}</strong> bpm</p>
          <p className="text">FC em 60%: <strong>{restHR60}</strong> bpm</p>
          <p className="text">FC em 70%: <strong>{restHR70}</strong> bpm</p>
        </div>
      </section>
      <hr />
      
      <section className="section">
        <h2 className="subtitle">Risco de ter doenças crônicas</h2>
        <div className="inputs">
          <div className="input">
            <label htmlFor="waist" className="label">Cintura</label>
            <input type="number"
                   placeholder={"Cintura"}
                   className="input-field"
                   id="waist"
                   onChange={({ target: { value } }) => {
                     if (!isNaN(parseInt(value))) {
                       setWaistSize(parseInt(value));
                     }
                   }} />
          </div>
          <div className="input">
            <label htmlFor="hip" className="label">Quadril</label>
            <input type="number"
                   placeholder={"Quadril"}
                   className="input-field"
                   id="hip"
                   onChange={({ target: { value } }) => {
                     if (!isNaN(parseInt(value))) {
                       setHipSize(parseInt(value));
                     }
                   }} />
          </div>
        </div>
        
        <button type="button"
                className="button"
                onClick={calculateRCQ}>Calcular
        </button>
  
        <div className="results">
          <h2 className="subtitle">Resultados</h2>
          <p className="text">Cintura: <strong>{waistSize}</strong> cm</p>
          <p className="text">Quadril: <strong>{hipSize}</strong> cm</p>
          <p className="text">RCQ: <strong>{rcq}</strong> ou <strong>({(rcq * 100).toFixed(0)}%)</strong></p>
        </div>
      </section>
    </Div>
  );
}
