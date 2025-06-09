import { useState } from "react";
export default function Home() {


  const [lampadaLigada, setLampadaLigada] = useState(false);
  const [quantidade, setQuantidade] = useState(0);

  // Função para ligar a lampada
  function ligarLampada() {
    setLampadaLigada(true);
    setQuantidade(quantidade + 1);
  }
  // Função para desligar a lampada
  function desligarLampada() {
    setLampadaLigada(false);
  }


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <h1 className="text-center">Lampada on/of</h1>
          <div className="text-center mb-4">
            <img src={quantidade >6 ? "/assets/boom.jpg" : lampadaLigada ? "assets/on.png" : "assets/off.png"} alt="Lampada"
              className="img-fluid"/>
          </div>
          <div className="text-center">
            <button className="btn btn-light" onClick={ligarLampada}>Ligar</button>
            <button className="btn btn-dark" onClick={desligarLampada}>Desligar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
